"use client";

import { MapPin, Navigation } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const deliveryPoints = [
  {
    id: "DP-001",
    location: "Downtown Warehouse",
    status: "Loading",
    deliveries: 12,
    coordinates: { x: 20, y: 30 },
  },
  {
    id: "DP-002",
    location: "North Distribution Center",
    status: "Active",
    deliveries: 8,
    coordinates: { x: 45, y: 15 },
  },
  {
    id: "DP-003",
    location: "South Hub",
    status: "Active",
    deliveries: 15,
    coordinates: { x: 70, y: 75 },
  },
  {
    id: "DP-004",
    location: "East Terminal",
    status: "Maintenance",
    deliveries: 0,
    coordinates: { x: 85, y: 45 },
  },
  {
    id: "DP-005",
    location: "West Depot",
    status: "Active",
    deliveries: 6,
    coordinates: { x: 15, y: 60 },
  },
];

export function LogisticsMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Delivery Network Map</CardTitle>
        <CardDescription>Real-time view of delivery points and routes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Map Visualization Area */}
          <div className="bg-muted/10 relative h-[300px] w-full rounded-lg border">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Navigation className="text-muted-foreground mx-auto h-12 w-12" />
                <p className="text-muted-foreground mt-2 text-sm">Interactive Map View</p>
                <p className="text-muted-foreground text-xs">(Map integration would go here)</p>
              </div>
            </div>

            {/* Delivery Points Overlay */}
            {deliveryPoints.map((point) => (
              <div
                key={point.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 transform"
                style={{
                  left: `${point.coordinates.x}%`,
                  top: `${point.coordinates.y}%`,
                }}
              >
                <div className="relative">
                  <MapPin
                    className={`h-6 w-6 ${
                      point.status === "Active"
                        ? "text-green-500"
                        : point.status === "Loading"
                          ? "text-blue-500"
                          : point.status === "Maintenance"
                            ? "text-red-500"
                            : "text-gray-500"
                    }`}
                  />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform whitespace-nowrap">
                    <Badge
                      variant={
                        point.status === "Active" ? "default" : point.status === "Loading" ? "secondary" : "destructive"
                      }
                      className="text-xs"
                    >
                      {point.deliveries}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery Points List */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Active Delivery Points</h4>
            <div className="space-y-2">
              {deliveryPoints.map((point) => (
                <div key={point.id} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-muted-foreground h-4 w-4" />
                    <div>
                      <p className="text-sm font-medium">{point.location}</p>
                      <p className="text-muted-foreground text-xs">{point.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        point.status === "Active" ? "default" : point.status === "Loading" ? "secondary" : "destructive"
                      }
                    >
                      {point.status}
                    </Badge>
                    <span className="text-muted-foreground text-sm">{point.deliveries} deliveries</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Button variant="outline" size="sm">
              <Navigation className="mr-2 h-4 w-4" />
              View Full Map
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
