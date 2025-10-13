import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, UserCheck, UserX, Crown } from "lucide-react";

const statsCards = [
  {
    title: "Total Users",
    value: "2,847",
    change: "+12.3%",
    icon: Users,
    description: "Active users",
  },
  {
    title: "Active Users",
    value: "2,156",
    change: "+8.7%",
    icon: UserCheck,
    description: "This month",
  },
  {
    title: "Inactive Users",
    value: "691",
    change: "-15.2%",
    icon: UserX,
    description: "This month",
  },
  {
    title: "Administrators",
    value: "12",
    change: "+2",
    icon: Crown,
    description: "System admins",
  },
];

export function UsersStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsCards.map((card, index) => {
        const Icon = card.icon;
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Badge
                  variant={card.change.startsWith('+') ? "default" : "destructive"}
                  className="text-xs"
                >
                  {card.change}
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
