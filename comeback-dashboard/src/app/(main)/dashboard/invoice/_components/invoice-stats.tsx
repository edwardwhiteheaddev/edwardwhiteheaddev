import { CheckCircle, Clock, DollarSign, FileText, TrendingDown, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const statsCards = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
    description: "from last month",
  },
  {
    title: "Invoices Sent",
    value: "127",
    change: "+12.5%",
    trend: "up",
    icon: FileText,
    description: "from last month",
  },
  {
    title: "Pending Payment",
    value: "$8,450.00",
    change: "-5.2%",
    trend: "down",
    icon: Clock,
    description: "from last month",
  },
  {
    title: "Paid Invoices",
    value: "98",
    change: "+15.3%",
    trend: "up",
    icon: CheckCircle,
    description: "from last month",
  },
];

export function InvoiceStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsCards.map((card) => {
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
