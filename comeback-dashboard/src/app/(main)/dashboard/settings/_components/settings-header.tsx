import { RotateCcw, Save } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SettingsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Configure your application preferences</p>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm">
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </div>
  );
}
