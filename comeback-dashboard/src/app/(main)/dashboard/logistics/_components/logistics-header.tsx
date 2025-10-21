import { Clock, MapPin, Package, TrendingDown, TrendingUp, Truck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const headerStats = [
  {
    title: "Active Deliveries",
    value: "247",
    change: "+12.3%",
    trend: "up",
    icon: Truck,
  },
  {
    title: "On-Time Delivery",
    value: "94.2%",
    change: "+2.1%",
    trend: "up",
    icon: Clock,
  },
  {
    title: "Total Shipments",
    value: "1,893",
    change: "+8.7%",
    trend: "up",
    icon: Package,
  },
  {
    title: "Delivery Zones",
    value: "47",
    change: "+3",
    trend: "up",
    icon: MapPin,
  },
];

export function LogisticsHeader() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Logistics Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor delivery performance, track shipments, and manage logistics operations
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {headerStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <Icon className="text-muted-foreground h-8 w-8" />
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <Badge variant={stat.trend === "up" ? "default" : "destructive"} className="text-xs">
                    {stat.trend === "up" ? (
                      <TrendingUp className="mr-1 h-3 w-3" />
                    ) : (
                      <TrendingDown className="mr-1 h-3 w-3" />
                    )}
                    {stat.change}
                  </Badge>
                  <span className="text-muted-foreground text-xs">vs last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
