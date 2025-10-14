import { GraduationCap, Trophy, Target, Calendar } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const metricsCards = [
  {
    title: "Avg. Grade",
    value: "B+",
    change: "+0.2",
    icon: GraduationCap,
    progress: 88,
    target: "A-",
  },
  {
    title: "Certificates Earned",
    value: "1,247",
    change: "+18.5%",
    icon: Trophy,
    progress: 75,
    target: "1,500",
  },
  {
    title: "Course Success Rate",
    value: "94.3%",
    change: "+2.1%",
    icon: Target,
    progress: 94,
    target: "95.0%",
  },
  {
    title: "Study Streak",
    value: "12 days",
    change: "+3 days",
    icon: Calendar,
    progress: 60,
    target: "30 days",
  },
];

export function AcademyMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metricsCards.map((metric, index) => {
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
                <Badge variant={metric.change.startsWith("+") ? "default" : "destructive"} className="text-xs">
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
