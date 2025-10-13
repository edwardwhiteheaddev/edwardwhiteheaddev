import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Eye, MousePointer, Clock, Globe } from "lucide-react";

const metricsCards = [
  {
    title: "Page Views",
    value: "1,234,567",
    change: "+15.3%",
    icon: Eye,
    progress: 75,
    target: "1,500,000",
  },
  {
    title: "Click Rate",
    value: "3.2%",
    change: "+2.1%",
    icon: MousePointer,
    progress: 64,
    target: "5.0%",
  },
  {
    title: "Avg. Session Duration",
    value: "4m 32s",
    change: "-0.5%",
    icon: Clock,
    progress: 80,
    target: "5m 00s",
  },
  {
    title: "Bounce Rate",
    value: "42.1%",
    change: "-8.2%",
    icon: Globe,
    progress: 58,
    target: "35.0%",
  },
];

export function AnalyticsMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metricsCards.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Badge
                  variant={metric.change.startsWith('+') ? "default" : "destructive"}
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
