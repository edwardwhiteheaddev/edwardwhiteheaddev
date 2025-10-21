"use client";

import { ArrowUpDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ecommerceData = [
  {
    product: "Wireless Headphones",
    sku: "WH-001",
    sales: "1,234",
    revenue: "$24,680",
    stock: "45",
    status: "In Stock",
  },
  {
    product: "Smart Watch",
    sku: "SW-002",
    sales: "987",
    revenue: "$29,610",
    stock: "12",
    status: "Low Stock",
  },
  {
    product: "Bluetooth Speaker",
    sku: "BS-003",
    sales: "756",
    revenue: "$15,120",
    stock: "0",
    status: "Out of Stock",
  },
  {
    product: "Phone Case",
    sku: "PC-004",
    sales: "2,134",
    revenue: "$8,536",
    stock: "89",
    status: "In Stock",
  },
  {
    product: "Laptop Stand",
    sku: "LS-005",
    sales: "543",
    revenue: "$13,575",
    stock: "23",
    status: "In Stock",
  },
];

export function EcommerceTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Performance</CardTitle>
        <CardDescription>Sales performance and inventory status for top products</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Product
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  SKU
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Sales
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Revenue
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Stock
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Status
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ecommerceData.map((row) => (
              <TableRow key={row.product}>
                <TableCell className="font-medium">{row.product}</TableCell>
                <TableCell>{row.sku}</TableCell>
                <TableCell>{row.sales}</TableCell>
                <TableCell>{row.revenue}</TableCell>
                <TableCell>{row.stock}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      row.status === "In Stock" ? "default" : row.status === "Low Stock" ? "secondary" : "destructive"
                    }
                  >
                    {row.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
