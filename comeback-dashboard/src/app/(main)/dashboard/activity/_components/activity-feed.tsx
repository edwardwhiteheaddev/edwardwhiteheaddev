"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { User, Settings, FileText, Shield, Database } from "lucide-react";

const activities = [
  {
    id: 1,
    user: "John Smith",
    avatar: "/avatars/john.jpg",
    action: "Created new user account",
    target: "Sarah Johnson",
    time: "2 minutes ago",
    type: "user",
    icon: User,
  },
  {
    id: 2,
    user: "System",
    avatar: "/avatars/system.jpg",
    action: "Updated system settings",
    target: "Security configuration",
    time: "5 minutes ago",
    type: "system",
    icon: Settings,
  },
  {
    id: 3,
    user: "Mike Chen",
    avatar: "/avatars/mike.jpg",
    action: "Generated report",
    target: "Monthly Sales Report",
    time: "12 minutes ago",
    type: "report",
    icon: FileText,
  },
  {
    id: 4,
    user: "Emily Davis",
    avatar: "/avatars/emily.jpg",
    action: "Modified role permissions",
    target: "Designer role",
    time: "18 minutes ago",
    type: "security",
    icon: Shield,
  },
  {
    id: 5,
    user: "System",
    avatar: "/avatars/system.jpg",
    action: "Database backup completed",
    target: "Production database",
    time: "1 hour ago",
    type: "system",
    icon: Database,
  },
  {
    id: 6,
    user: "Alex Rodriguez",
    avatar: "/avatars/alex.jpg",
    action: "Logged in",
    target: "Dashboard",
    time: "2 hours ago",
    type: "auth",
    icon: User,
  },
  {
    id: 7,
    user: "Sarah Johnson",
    avatar: "/avatars/sarah.jpg",
    action: "Updated profile",
    target: "Personal information",
    time: "3 hours ago",
    type: "user",
    icon: User,
  },
  {
    id: 8,
    user: "System",
    avatar: "/avatars/system.jpg",
    action: "Scheduled maintenance",
    target: "Server maintenance window",
    time: "4 hours ago",
    type: "system",
    icon: Settings,
  },
];

export function ActivityFeed() {
  return (
    <Card className="h-[600px]">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest actions and system events
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[500px]">
          <div className="space-y-4 p-6">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="flex items-start space-x-4">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={activity.avatar} />
                      <AvatarFallback>
                        {activity.user.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1">
                      <div className="h-6 w-6 rounded-full bg-background border-2 border-border flex items-center justify-center">
                        <Icon className="h-3 w-3" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{activity.user}</span>
                      <Badge
                        variant={
                          activity.type === "user"
                            ? "default"
                            : activity.type === "system"
                            ? "secondary"
                            : activity.type === "security"
                            ? "destructive"
                            : "outline"
                        }
                        className="text-xs"
                      >
                        {activity.type}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {activity.action}{" "}
                      <span className="font-medium text-foreground">
                        {activity.target}
                      </span>
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
