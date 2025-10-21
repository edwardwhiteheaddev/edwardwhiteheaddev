"use client";

import { MessageSquare, Paperclip, Plus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const columns = [
  {
    id: "todo",
    title: "To Do",
    color: "bg-gray-100",
    count: 8,
    tasks: [
      {
        id: 1,
        title: "Design new user onboarding flow",
        description: "Create wireframes and mockups for the new user registration process",
        priority: "high",
        assignee: "Sarah Johnson",
        avatar: "/avatars/sarah.jpg",
        tags: ["design", "ux"],
        comments: 3,
        attachments: 2,
      },
      {
        id: 2,
        title: "Update API documentation",
        description: "Review and update the REST API documentation",
        priority: "medium",
        assignee: "Mike Chen",
        avatar: "/avatars/mike.jpg",
        tags: ["documentation"],
        comments: 1,
        attachments: 0,
      },
      {
        id: 3,
        title: "Setup CI/CD pipeline",
        description: "Configure automated deployment for the staging environment",
        priority: "high",
        assignee: "Alex Rodriguez",
        avatar: "/avatars/alex.jpg",
        tags: ["devops", "automation"],
        comments: 5,
        attachments: 1,
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    color: "bg-blue-50",
    count: 3,
    tasks: [
      {
        id: 4,
        title: "Implement user authentication",
        description: "Add JWT-based authentication to the application",
        priority: "high",
        assignee: "John Smith",
        avatar: "/avatars/john.jpg",
        tags: ["backend", "security"],
        comments: 7,
        attachments: 3,
      },
      {
        id: 5,
        title: "Create responsive dashboard",
        description: "Build responsive dashboard layout for mobile and desktop",
        priority: "medium",
        assignee: "Emily Davis",
        avatar: "/avatars/emily.jpg",
        tags: ["frontend", "responsive"],
        comments: 2,
        attachments: 4,
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    color: "bg-yellow-50",
    count: 2,
    tasks: [
      {
        id: 6,
        title: "Code review for payment module",
        description: "Review the new payment integration code",
        priority: "medium",
        assignee: "David Kim",
        avatar: "/avatars/david.jpg",
        tags: ["backend", "payment"],
        comments: 4,
        attachments: 2,
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    color: "bg-green-50",
    count: 12,
    tasks: [
      {
        id: 7,
        title: "Setup project structure",
        description: "Initialize the project with proper folder structure",
        priority: "high",
        assignee: "Sarah Johnson",
        avatar: "/avatars/sarah.jpg",
        tags: ["setup"],
        comments: 1,
        attachments: 0,
      },
      {
        id: 8,
        title: "Database schema design",
        description: "Design and implement the database schema",
        priority: "high",
        assignee: "Mike Chen",
        avatar: "/avatars/mike.jpg",
        tags: ["database", "backend"],
        comments: 3,
        attachments: 1,
      },
    ],
  },
];

export function KanbanBoard() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {columns.map((column) => (
        <Card key={column.id} className="h-fit">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">{column.title}</CardTitle>
              <Badge variant="secondary">{column.count}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {column.tasks.map((task) => (
              <Card key={task.id} className="cursor-pointer transition-shadow hover:shadow-md">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h4 className="text-sm font-medium">{task.title}</h4>
                      <Badge
                        variant={
                          task.priority === "high"
                            ? "destructive"
                            : task.priority === "medium"
                              ? "default"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {task.priority}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground line-clamp-2 text-xs">{task.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={task.avatar} />
                          <AvatarFallback className="text-xs">
                            {task.assignee
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-muted-foreground text-xs">{task.assignee}</span>
                      </div>

                      <div className="text-muted-foreground flex items-center space-x-1">
                        {task.comments > 0 && (
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="h-3 w-3" />
                            <span className="text-xs">{task.comments}</span>
                          </div>
                        )}
                        {task.attachments > 0 && (
                          <div className="flex items-center space-x-1">
                            <Paperclip className="h-3 w-3" />
                            <span className="text-xs">{task.attachments}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {task.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {task.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button variant="ghost" className="text-muted-foreground w-full justify-start">
              <Plus className="mr-2 h-4 w-4" />
              Add Task
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
