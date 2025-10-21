"use client";

import { Clock, MapPin, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const upcomingEvents = [
  {
    id: 1,
    title: "Team Standup",
    time: "9:00 AM - 9:30 AM",
    type: "meeting",
    attendees: 8,
    location: "Conference Room A",
  },
  {
    id: 2,
    title: "Client Presentation",
    time: "2:00 PM - 3:00 PM",
    type: "meeting",
    attendees: 5,
    location: "Virtual",
  },
  {
    id: 3,
    title: "Code Review",
    time: "4:00 PM - 5:00 PM",
    type: "task",
    attendees: 3,
    location: "Dev Office",
  },
  {
    id: 4,
    title: "Project Deadline",
    time: "11:59 PM",
    type: "reminder",
    attendees: 1,
    location: "System",
  },
];

export function CalendarSidebar() {
  return (
    <div className="flex h-full flex-col border-r">
      <div className="border-b p-4">
        <h3 className="mb-4 font-semibold">Upcoming Events</h3>
        <Button className="w-full" size="sm">
          <Clock className="mr-2 h-4 w-4" />
          Schedule Event
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-4 p-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="space-y-2 rounded-lg border p-3">
              <div className="flex items-start justify-between">
                <h4 className="text-sm font-medium">{event.title}</h4>
                <Badge
                  variant={event.type === "meeting" ? "default" : event.type === "task" ? "secondary" : "outline"}
                  className="text-xs"
                >
                  {event.type}
                </Badge>
              </div>

              <div className="text-muted-foreground space-y-1 text-xs">
                <div className="flex items-center space-x-2">
                  <Clock className="h-3 w-3" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-3 w-3" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-3 w-3" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="border-t p-4">
        <div className="text-muted-foreground space-y-1 text-xs">
          <div className="flex justify-between">
            <span>Today&#39;s Events</span>
            <span className="font-medium">12</span>
          </div>
          <div className="flex justify-between">
            <span>This Week</span>
            <span className="font-medium">47</span>
          </div>
          <div className="flex justify-between">
            <span>This Month</span>
            <span className="font-medium">156</span>
          </div>
        </div>
      </div>
    </div>
  );
}
