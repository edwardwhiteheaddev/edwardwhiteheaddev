"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const reportData = [
  { month: "Jan", revenue: 45000, users: 1200, orders: 340 },
  { month: "Feb", revenue: 52000, users: 1350, orders: 380 },
  { month: "Mar", revenue: 48000, users: 1280, orders: 360 },
  { month: "Apr", revenue: 61000, users: 1450, orders: 420 },
  { month: "May", revenue: 55000, users: 1380, orders: 390 },
  { month: "Jun", revenue: 67000, users: 1520, orders: 450 },
];

const categoryData = [
  { name: "Sales", value: 45, fill: "hsl(var(--chart-1))" },
  { name: "Marketing", value: 25, fill: "hsl(var(--chart-2))" },
  { name: "Support", value: 15, fill: "hsl(var(--chart-3))" },
  { name: "Development", value: 15, fill: "hsl(var(--chart-4))" },
];

export function ReportsCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>Monthly trends for key metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              revenue: {
                label: "Revenue",
                color: "hsl(var(--chart-1))",
              },
              users: {
                label: "Users",
                color: "hsl(var(--chart-2))",
              },
              orders: {
                label: "Orders",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={reportData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="hsl(var(--chart-3))"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Department Breakdown</CardTitle>
          <CardDescription>Resource allocation by department</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              value: {
                label: "Percentage",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData}>
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" fill="hsl(var(--chart-1))" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
