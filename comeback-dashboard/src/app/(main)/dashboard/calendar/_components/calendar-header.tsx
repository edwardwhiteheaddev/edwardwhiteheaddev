import { Calendar, ChevronLeft, ChevronRight, Grid3X3, List, Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function CalendarHeader() {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div className="flex items-center space-x-4">
        <div>
          <h1 className="text-2xl font-bold">Calendar</h1>
          <p className="text-muted-foreground">Manage your schedule and events</p>
        </div>
        <Badge variant="secondary">October 2024</Badge>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm">
          Today
        </Button>
        <Button variant="outline" size="sm">
          <ChevronRight className="h-4 w-4" />
        </Button>

        <div className="bg-border mx-2 h-6 w-px" />

        <Button variant="outline" size="sm">
          <Calendar className="mr-2 h-4 w-4" />
          Month
        </Button>
        <Button variant="outline" size="sm">
          <List className="mr-2 h-4 w-4" />
          Week
        </Button>
        <Button variant="outline" size="sm">
          <Grid3X3 className="mr-2 h-4 w-4" />
          Day
        </Button>

        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          New Event
        </Button>
      </div>
    </div>
  );
}
