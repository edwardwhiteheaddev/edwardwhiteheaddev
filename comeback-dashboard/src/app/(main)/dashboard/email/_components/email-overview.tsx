import { Archive, Inbox, Send, Trash2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const emailStats = [
  {
    title: "Inbox",
    count: "247",
    icon: Inbox,
    color: "text-blue-500",
  },
  {
    title: "Sent",
    count: "89",
    icon: Send,
    color: "text-green-500",
  },
  {
    title: "Archive",
    count: "1,234",
    icon: Archive,
    color: "text-gray-500",
  },
  {
    title: "Trash",
    count: "12",
    icon: Trash2,
    color: "text-red-500",
  },
];

export function EmailOverview() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Email Dashboard</h1>
        <p className="text-muted-foreground">Manage your emails, track communications, and stay organized</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {emailStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.count}</div>
                <p className="text-muted-foreground text-xs">Total {stat.title.toLowerCase()} messages</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
