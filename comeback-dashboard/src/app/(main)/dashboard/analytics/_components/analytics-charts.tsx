"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 4000, users: 240 },
  { month: "Feb", revenue: 3000, users: 139 },
  { month: "Mar", revenue: 2000, users: 980 },
  { month: "Apr", revenue: 2780, users: 390 },
  { month: "May", revenue: 1890, users: 480 },
  { month: "Jun", revenue: 2390, users: 380 },
  { month: "Jul", revenue: 3490, users: 430 },
];

const trafficData = [
  { name: "Desktop", value: 45, fill: "hsl(var(--chart-1))" },
  { name: "Mobile", value: 35, fill: "hsl(var(--chart-2))" },
  { name: "Tablet", value: 20, fill: "hsl(var(--chart-3))" },
];

const conversionData = [
  { month: "Jan", rate: 2.1 },
  { month: "Feb", rate: 2.8 },
  { month: "Mar", rate: 3.2 },
  { month: "Apr", rate: 2.9 },
  { month: "May", rate: 3.5 },
  { month: "Jun", rate: 3.8 },
  { month: "Jul", rate: 4.1 },
];

export function AnalyticsCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Revenue & Users</CardTitle>
          <CardDescription>Monthly revenue and user growth trends</CardDescription>
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
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stackId="1"
                  stroke="hsl(var(--chart-1))"
                  fill="hsl(var(--chart-1))"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="users"
                  stackId="2"
                  stroke="hsl(var(--chart-2))"
                  fill="hsl(var(--chart-2))"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Traffic Sources</CardTitle>
          <CardDescription>Device breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              value: {
                label: "Value",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trafficData}>
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" fill="hsl(var(--chart-1))" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Conversion Rate Trend</CardTitle>
          <CardDescription>Monthly conversion rate over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              rate: {
                label: "Conversion Rate",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[200px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={conversionData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="hsl(var(--chart-3))"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
