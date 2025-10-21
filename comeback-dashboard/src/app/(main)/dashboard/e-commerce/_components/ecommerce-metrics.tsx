import { Clock, ShoppingBag, Star, Truck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const metricsCards = [
  {
    title: "Avg. Order Value",
    value: "$127.50",
    change: "+5.2%",
    icon: ShoppingBag,
    progress: 85,
    target: "$150.00",
  },
  {
    title: "Delivery Time",
    value: "2.3 days",
    change: "-12.5%",
    icon: Truck,
    progress: 92,
    target: "2.0 days",
  },
  {
    title: "Customer Rating",
    value: "4.7/5.0",
    change: "+0.3",
    icon: Star,
    progress: 94,
    target: "4.8/5.0",
  },
  {
    title: "Return Rate",
    value: "3.2%",
    change: "-1.1%",
    icon: Clock,
    progress: 68,
    target: "2.5%",
  },
];

export function EcommerceMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metricsCards.map((metric) => {
        const Icon = metric.icon;
        return (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <Icon className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="text-muted-foreground flex items-center space-x-2 text-xs">
                <Badge
                  variant={
                    metric.change.startsWith("+") || (metric.change.startsWith("-") && !metric.change.includes("-1"))
                      ? "default"
                      : "destructive"
                  }
                  className="text-xs"
                >
                  {metric.change}
                </Badge>
                <span>from last month</span>
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-muted-foreground">{metric.target}</span>
                </div>
                <Progress value={metric.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
