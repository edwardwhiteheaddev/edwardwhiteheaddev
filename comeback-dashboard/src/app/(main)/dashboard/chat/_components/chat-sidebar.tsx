"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Users, Hash } from "lucide-react";

const conversations = [
  {
    id: 1,
    type: "direct",
    name: "John Smith",
    avatar: "/avatars/john.jpg",
    lastMessage: "Thanks for the update!",
    time: "2m ago",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    type: "direct",
    name: "Sarah Johnson",
    avatar: "/avatars/sarah.jpg",
    lastMessage: "Can we schedule a call?",
    time: "15m ago",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    type: "group",
    name: "Design Team",
    avatar: "/avatars/design.jpg",
    lastMessage: "New mockups are ready",
    time: "1h ago",
    unread: 5,
    online: true,
  },
  {
    id: 4,
    type: "direct",
    name: "Mike Chen",
    avatar: "/avatars/mike.jpg",
    lastMessage: "Code review completed",
    time: "2h ago",
    unread: 0,
    online: true,
  },
  {
    id: 5,
    type: "channel",
    name: "#general",
    avatar: "/avatars/general.jpg",
    lastMessage: "Welcome to the team!",
    time: "3h ago",
    unread: 1,
    online: true,
  },
];

export function ChatSidebar() {
  return (
    <div className="flex h-full flex-col border-r">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Conversations</h3>
          <Badge variant="secondary">{conversations.length}</Badge>
        </div>

        <div className="space-y-2">
          <Button variant="outline" size="sm" className="w-full justify-start">
            <MessageCircle className="mr-2 h-4 w-4" />
            Direct Messages
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" />
            Groups
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Hash className="mr-2 h-4 w-4" />
            Channels
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2 space-y-2">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className="flex items-center space-x-3 rounded-lg p-3 hover:bg-muted cursor-pointer"
            >
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={conversation.avatar} />
                  <AvatarFallback>
                    {conversation.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                {conversation.online && (
                  <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium truncate">
                    {conversation.name}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {conversation.time}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  {conversation.lastMessage}
                </p>
              </div>

              {conversation.unread > 0 && (
                <Badge variant="destructive" className="text-xs">
                  {conversation.unread}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
