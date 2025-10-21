import { Plus, Search, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ChatHeader() {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div>
        <h1 className="text-2xl font-bold">Messages</h1>
        <p className="text-muted-foreground">Stay connected with your team</p>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input placeholder="Search conversations..." className="w-64 pl-10" />
        </div>
        <Button variant="outline" size="sm">
          <Settings className="h-4 w-4" />
        </Button>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          New Chat
        </Button>
      </div>
    </div>
  );
}
