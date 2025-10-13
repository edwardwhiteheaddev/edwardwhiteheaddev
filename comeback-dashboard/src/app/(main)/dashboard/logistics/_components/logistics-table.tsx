"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpDown, MapPin, Truck } from "lucide-react";

const logisticsData = [
  {
    id: "DEL-001",
    route: "North Route A",
    driver: "John Smith",
    vehicle: "Truck-47",
    status: "In Transit",
    eta: "2:30 PM",
    progress: 65,
  },
  {
    id: "DEL-002",
    route: "South Route B",
    driver: "Maria Garcia",
    vehicle: "Van-23",
    status: "Delivered",
    eta: "Delivered",
    progress: 100,
  },
  {
    id: "DEL-003",
    route: "East Route C",
    driver: "David Chen",
    vehicle: "Truck-12",
    status: "Loading",
    eta: "4:15 PM",
    progress: 15,
  },
  {
    id: "DEL-004",
    route: "West Route D",
    driver: "Sarah Johnson",
    vehicle: "Van-89",
    status: "In Transit",
    eta: "1:45 PM",
    progress: 78,
  },
  {
    id: "DEL-005",
    route: "Central Route E",
    driver: "Mike Wilson",
    vehicle: "Truck-34",
    status: "Delayed",
    eta: "5:30 PM",
    progress: 45,
  },
];

export function LogisticsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Deliveries</CardTitle>
        <CardDescription>
          Real-time tracking of current delivery operations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Delivery ID
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Route
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Driver
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Vehicle
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Status
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  ETA
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Progress
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logisticsData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium font-mono">{row.id}</TableCell>
                <TableCell className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{row.route}</span>
                </TableCell>
                <TableCell>{row.driver}</TableCell>
                <TableCell className="flex items-center space-x-2">
                  <Truck className="h-4 w-4 text-muted-foreground" />
                  <span>{row.vehicle}</span>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      row.status === "Delivered"
                        ? "default"
                        : row.status === "In Transit"
                        ? "secondary"
                        : row.status === "Loading"
                        ? "outline"
                        : "destructive"
                    }
                  >
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell>{row.eta}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Progress value={row.progress} className="h-2 flex-1" />
                    <span className="text-sm text-muted-foreground w-10">{row.progress}%</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
