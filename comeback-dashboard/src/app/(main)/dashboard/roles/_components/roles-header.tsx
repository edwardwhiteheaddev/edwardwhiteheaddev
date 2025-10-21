import { Plus, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";

export function RolesHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Role Management</h1>
        <p className="text-muted-foreground">Define roles and manage permissions</p>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm">
          <Settings className="mr-2 h-4 w-4" />
          Permissions
        </Button>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Role
        </Button>
      </div>
    </div>
  );
}
