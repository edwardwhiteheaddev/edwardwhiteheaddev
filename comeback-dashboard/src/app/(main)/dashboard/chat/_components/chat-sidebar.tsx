"use client";

import { Hash, MessageCircle, Users } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      <div className="border-b p-4">
        <div className="mb-4 flex items-center justify-between">
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
        <div className="space-y-2 p-2">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className="hover:bg-muted flex cursor-pointer items-center space-x-3 rounded-lg p-3"
            >
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={conversation.avatar} />
                  <AvatarFallback>
                    {conversation.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {conversation.online && (
                  <div className="border-background absolute -right-1 -bottom-1 h-3 w-3 rounded-full border-2 bg-green-500" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="truncate text-sm font-medium">{conversation.name}</p>
                  <span className="text-muted-foreground text-xs">{conversation.time}</span>
                </div>
                <p className="text-muted-foreground truncate text-xs">{conversation.lastMessage}</p>
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
