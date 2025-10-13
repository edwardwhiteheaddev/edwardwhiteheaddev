import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Fuel, Route, AlertTriangle, CheckCircle } from "lucide-react";

const metricsCards = [
  {
    title: "Fuel Efficiency",
    value: "8.4 mpg",
    change: "+0.6",
    icon: Fuel,
    progress: 84,
    target: "9.0 mpg",
    status: "On Track",
  },
  {
    title: "Route Optimization",
    value: "92.3%",
    change: "+3.2%",
    icon: Route,
    progress: 92,
    target: "95.0%",
    status: "Improving",
  },
  {
    title: "Incidents",
    value: "3",
    change: "-40%",
    icon: AlertTriangle,
    progress: 60,
    target: "0",
    status: "Reducing",
  },
  {
    title: "Safety Score",
    value: "98.7%",
    change: "+1.2%",
    icon: CheckCircle,
    progress: 99,
    target: "100%",
    status: "Excellent",
  },
];

export function LogisticsMetrics() {
  return (
    <div className="space-y-4">
      {metricsCards.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={index}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold">{metric.value}</span>
                <Badge
                  variant={metric.change.startsWith('+') ? "default" : "destructive"}
                  className="text-xs"
                >
                  {metric.change}
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-muted-foreground">{metric.target}</span>
                </div>
                <Progress value={metric.progress} className="h-2" />
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {metric.status}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
