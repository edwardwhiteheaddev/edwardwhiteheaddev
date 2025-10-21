import { DollarSign, Package, ShoppingCart, TrendingDown, TrendingUp, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const overviewCards = [
  {
    title: "Total Sales",
    value: "$54,239.00",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "from last month",
  },
  {
    title: "Orders",
    value: "1,429",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
    description: "from last month",
  },
  {
    title: "Active Customers",
    value: "3,672",
    change: "+15.3%",
    trend: "up",
    icon: Users,
    description: "from last month",
  },
  {
    title: "Products Sold",
    value: "8,492",
    change: "-2.1%",
    trend: "down",
    icon: Package,
    description: "from last month",
  },
];

export function EcommerceOverview() {
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
