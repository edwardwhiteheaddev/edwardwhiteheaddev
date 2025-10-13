"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Smile, Paperclip, Phone, Video, MoreVertical } from "lucide-react";

const messages = [
  {
    id: 1,
    sender: "John Smith",
    avatar: "/avatars/john.jpg",
    message: "Hey team! How's the project coming along?",
    time: "10:30 AM",
    type: "text",
  },
  {
    id: 2,
    sender: "Sarah Johnson",
    avatar: "/avatars/sarah.jpg",
    message: "Great progress! I've completed the design mockups.",
    time: "10:32 AM",
    type: "text",
  },
  {
    id: 3,
    sender: "Mike Chen",
    avatar: "/avatars/mike.jpg",
    message: "Awesome! The backend integration is almost done too.",
    time: "10:35 AM",
    type: "text",
  },
  {
    id: 4,
    sender: "You",
    avatar: "/avatars/you.jpg",
    message: "Perfect! Let's schedule a quick review meeting for tomorrow.",
    time: "10:37 AM",
    type: "text",
  },
];

export function ChatWindow() {
  return (
    <div className="flex h-full flex-col border rounded-lg">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/avatars/design.jpg" />
            <AvatarFallback>DT</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">Design Team</h3>
            <p className="text-sm text-muted-foreground">3 members online</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Video className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex space-x-3 max-w-[70%] ${message.sender === "You" ? "flex-row-reverse space-x-reverse" : ""}`}>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={message.avatar} />
                  <AvatarFallback>
                    {message.sender.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>

                <div className={`space-y-1 ${message.sender === "You" ? "items-end" : "items-start"}`}>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{message.sender}</span>
                    <span className="text-xs text-muted-foreground">{message.time}</span>
                  </div>
                  <div
                    className={`rounded-lg px-3 py-2 text-sm ${
                      message.sender === "You"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {message.message}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Message Input */}
      <div className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <Input
              placeholder="Type a message..."
              className="pr-20"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
              <Button variant="ghost" size="sm">
                <Smile className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Paperclip className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
