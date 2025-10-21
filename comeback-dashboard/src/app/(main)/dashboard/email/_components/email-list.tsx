"use client";

import { Archive, Mail, MoreVertical, Star, Trash2 } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const emailList = [
  {
    id: 1,
    sender: "John Smith",
    email: "john.smith@example.com",
    subject: "Project Update - Q4 Planning",
    preview: "Hi team, I wanted to share the latest updates on our Q4 planning...",
    time: "2 hours ago",
    unread: true,
    starred: false,
    priority: "high",
  },
  {
    id: 2,
    sender: "Sarah Johnson",
    email: "sarah.j@example.com",
    subject: "Meeting Reminder",
    preview: "Don't forget about our team meeting tomorrow at 10 AM...",
    time: "4 hours ago",
    unread: true,
    starred: true,
    priority: "normal",
  },
  {
    id: 3,
    sender: "Mike Chen",
    email: "mike.chen@company.com",
    subject: "Code Review Request",
    preview: "Please review the latest changes to the authentication module...",
    time: "1 day ago",
    unread: false,
    starred: false,
    priority: "normal",
  },
  {
    id: 4,
    sender: "Emily Davis",
    email: "emily.davis@startup.io",
    subject: "Partnership Opportunity",
    preview: "I hope this email finds you well. We're interested in exploring...",
    time: "2 days ago",
    unread: false,
    starred: true,
    priority: "high",
  },
  {
    id: 5,
    sender: "Alex Rodriguez",
    email: "alex@designstudio.com",
    subject: "Design Assets",
    preview: "Here are the updated design assets for the new landing page...",
    time: "3 days ago",
    unread: false,
    starred: false,
    priority: "low",
  },
];

export function EmailList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Emails</CardTitle>
        <CardDescription>Latest messages in your inbox</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {emailList.map((email) => (
            <div
              key={email.id}
              className={`hover:bg-muted/50 flex items-center space-x-4 rounded-lg border p-4 transition-colors ${
                email.unread ? "bg-muted/20" : ""
              }`}
            >
              <Avatar className="h-10 w-10">
                <AvatarFallback>
                  {email.sender
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <p className={`text-sm font-medium ${email.unread ? "font-semibold" : ""}`}>{email.sender}</p>
                    {email.starred && <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />}
                    <Badge
                      variant={
                        email.priority === "high" ? "destructive" : email.priority === "low" ? "secondary" : "outline"
                      }
                      className="text-xs"
                    >
                      {email.priority}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-muted-foreground text-xs">{email.time}</span>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className={`text-sm ${email.unread ? "font-semibold" : ""}`}>{email.subject}</p>
                  <p className="text-muted-foreground line-clamp-1 text-xs">{email.preview}</p>
                </div>
              </div>

              <div className="flex space-x-1">
                <Button variant="ghost" size="sm">
                  <Archive className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" />
            View All Emails
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
