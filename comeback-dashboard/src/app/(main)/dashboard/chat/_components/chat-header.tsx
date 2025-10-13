import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Settings, Plus } from "lucide-react";

export function ChatHeader() {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div>
        <h1 className="text-2xl font-bold">Messages</h1>
        <p className="text-muted-foreground">Stay connected with your team</p>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            className="w-64 pl-10"
          />
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
