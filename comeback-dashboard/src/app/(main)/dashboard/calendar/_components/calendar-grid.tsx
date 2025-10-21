"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const calendarDays = [
  { day: 1, events: 2, type: "meeting" },
  { day: 2, events: 0 },
  { day: 3, events: 1, type: "task" },
  { day: 4, events: 3, type: "meeting" },
  { day: 5, events: 1, type: "reminder" },
  { day: 6, events: 0 },
  { day: 7, events: 2, type: "meeting" },
  { day: 8, events: 1, type: "task" },
  { day: 9, events: 0 },
  { day: 10, events: 4, type: "meeting" },
  { day: 11, events: 2, type: "task" },
  { day: 12, events: 1, type: "reminder" },
  { day: 13, events: 0 },
  { day: 14, events: 3, type: "meeting" },
  { day: 15, events: 1, type: "task" },
  { day: 16, events: 2, type: "meeting" },
  { day: 17, events: 0 },
  { day: 18, events: 1, type: "reminder" },
  { day: 19, events: 3, type: "meeting" },
  { day: 20, events: 2, type: "task" },
  { day: 21, events: 1, type: "meeting" },
  { day: 22, events: 0 },
  { day: 23, events: 4, type: "meeting" },
  { day: 24, events: 2, type: "task" },
  { day: 25, events: 1, type: "reminder" },
  { day: 26, events: 3, type: "meeting" },
  { day: 27, events: 0 },
  { day: 28, events: 2, type: "task" },
  { day: 29, events: 1, type: "meeting" },
  { day: 30, events: 3, type: "meeting" },
  { day: 31, events: 1, type: "task" },
];

export function CalendarGrid() {
  return (
    <Card className="h-full">
      <CardContent className="h-full p-0">
        <div className="flex h-full flex-col">
          {/* Days of week header */}
          <div className="grid grid-cols-7 border-b">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-muted-foreground border-r p-3 text-center text-sm font-medium last:border-r-0"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid flex-1 auto-rows-fr grid-cols-7">
            {calendarDays.map((day) => (
              <div
                key={day.day}
                className="hover:bg-muted/50 min-h-[120px] cursor-pointer border-r border-b p-2 transition-colors"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className={`text-sm ${day.day === new Date().getDate() ? "text-primary font-bold" : ""}`}>
                    {day.day}
                  </span>
                  {day.events > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      {day.events}
                    </Badge>
                  )}
                </div>

                <div className="space-y-1">
                  {day.events > 0 && (
                    <div className="space-y-1">
                      {Array.from({ length: Math.min(day.events, 3) }).map((_, eventIndex) => (
                        <div
                          key={`${day.day}-${eventIndex}`}
                          className={`h-2 w-full rounded-full ${
                            day.type === "meeting"
                              ? "bg-blue-500"
                              : day.type === "task"
                                ? "bg-green-500"
                                : "bg-orange-500"
                          }`}
                        />
                      ))}
                      {day.events > 3 && <div className="text-muted-foreground text-xs">+{day.events - 3} more</div>}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
