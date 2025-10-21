"use client";

import { ArrowUpDown, Download, Eye } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const reports = [
  {
    id: "RPT-001",
    name: "Monthly Sales Report",
    type: "Sales",
    generated: "2024-10-15",
    status: "Ready",
    size: "2.4 MB",
  },
  {
    id: "RPT-002",
    name: "User Activity Analysis",
    type: "Analytics",
    generated: "2024-10-14",
    status: "Processing",
    size: "1.8 MB",
  },
  {
    id: "RPT-003",
    name: "Financial Summary",
    type: "Finance",
    generated: "2024-10-13",
    status: "Ready",
    size: "3.2 MB",
  },
  {
    id: "RPT-004",
    name: "Performance Metrics",
    type: "Analytics",
    generated: "2024-10-12",
    status: "Ready",
    size: "1.5 MB",
  },
  {
    id: "RPT-005",
    name: "Customer Insights",
    type: "Marketing",
    generated: "2024-10-11",
    status: "Ready",
    size: "2.1 MB",
  },
];

export function ReportsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Reports</CardTitle>
        <CardDescription>View and download your generated reports</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Report ID
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Name
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Type
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Generated
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Status
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Size
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id}>
                <TableCell className="font-mono font-medium">{report.id}</TableCell>
                <TableCell className="font-medium">{report.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">{report.type}</Badge>
                </TableCell>
                <TableCell>{report.generated}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      report.status === "Ready" ? "default" : report.status === "Processing" ? "secondary" : "outline"
                    }
                  >
                    {report.status}
                  </Badge>
                </TableCell>
                <TableCell>{report.size}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
