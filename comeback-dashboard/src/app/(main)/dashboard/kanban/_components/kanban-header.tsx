import { Filter, MoreHorizontal, Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export function KanbanHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Project Board</h1>
        <p className="text-muted-foreground">Organize and track your project tasks</p>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search tasks..."
            className="border-input bg-background ring-offset-background w-64 rounded-md border px-10 py-2 text-sm"
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
        <Button variant="outline" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>
    </div>
  );
}
