import { TrendingUp, TrendingDown, Users, BookOpen, Award, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const overviewCards = [
  {
    title: "Total Students",
    value: "2,847",
    change: "+12.3%",
    trend: "up",
    icon: Users,
    description: "from last month",
  },
  {
    title: "Active Courses",
    value: "156",
    change: "+8.7%",
    trend: "up",
    icon: BookOpen,
    description: "from last month",
  },
  {
    title: "Completion Rate",
    value: "87.2%",
    change: "+3.1%",
    trend: "up",
    icon: Award,
    description: "from last month",
  },
  {
    title: "Avg. Study Time",
    value: "2.4 hrs",
    change: "-5.2%",
    trend: "down",
    icon: Clock,
    description: "from last month",
  },
];

export function AcademyOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {overviewCards.map((card) => {
        const Icon = card.icon;
        return (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <Icon className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <div className="text-muted-foreground flex items-center space-x-2 text-xs">
                <Badge
                  variant={card.trend === "up" ? "default" : "destructive"}
                  className="flex items-center space-x-1"
                >
                  {card.trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  <span>{card.change}</span>
                </Badge>
                <span>{card.description}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
