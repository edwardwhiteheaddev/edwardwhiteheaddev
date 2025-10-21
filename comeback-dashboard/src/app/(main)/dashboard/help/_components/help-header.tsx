import { MessageCircle, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HelpHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
        <p className="text-muted-foreground">Find answers and get assistance</p>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input placeholder="Search help articles..." className="w-64 pl-10" />
        </div>
        <Button variant="outline">
          <MessageCircle className="mr-2 h-4 w-4" />
          Contact Support
        </Button>
      </div>
    </div>
  );
}
