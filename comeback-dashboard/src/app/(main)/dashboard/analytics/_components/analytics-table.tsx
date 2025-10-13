"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpDown } from "lucide-react";

const analyticsData = [
  {
    page: "/dashboard",
    views: "12,543",
    uniqueViews: "8,234",
    bounceRate: "23.4%",
    avgTime: "3:42",
    conversions: "156",
  },
  {
    page: "/analytics",
    views: "8,932",
    uniqueViews: "6,789",
    bounceRate: "31.2%",
    avgTime: "2:18",
    conversions: "89",
  },
  {
    page: "/crm",
    views: "7,654",
    uniqueViews: "5,432",
    bounceRate: "28.7%",
    avgTime: "4:12",
    conversions: "134",
  },
  {
    page: "/finance",
    views: "6,789",
    uniqueViews: "4,567",
    bounceRate: "35.1%",
    avgTime: "2:55",
    conversions: "78",
  },
  {
    page: "/settings",
    views: "4,321",
    uniqueViews: "3,456",
    bounceRate: "41.2%",
    avgTime: "1:33",
    conversions: "23",
  },
];

export function AnalyticsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Page Analytics</CardTitle>
        <CardDescription>
          Detailed analytics for each page including views, bounce rate, and conversions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Page
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Views
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Unique Views
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Bounce Rate
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Avg. Time
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Conversions
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {analyticsData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{row.page}</TableCell>
                <TableCell>{row.views}</TableCell>
                <TableCell>{row.uniqueViews}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      parseFloat(row.bounceRate) < 30
                        ? "default"
                        : parseFloat(row.bounceRate) < 40
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {row.bounceRate}
                  </Badge>
                </TableCell>
                <TableCell>{row.avgTime}</TableCell>
                <TableCell>{row.conversions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
