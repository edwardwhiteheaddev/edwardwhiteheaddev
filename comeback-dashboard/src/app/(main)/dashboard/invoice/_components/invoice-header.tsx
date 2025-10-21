import { Download, Filter, Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export function InvoiceHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Invoices</h1>
        <p className="text-muted-foreground">Manage and track your billing invoices</p>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search invoices..."
            className="border-input bg-background ring-offset-background w-64 rounded-md border px-10 py-2 text-sm"
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Invoice
        </Button>
      </div>
    </div>
  );
}
