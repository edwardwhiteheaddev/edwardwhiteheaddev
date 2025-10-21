"use client";

import { Area, AreaChart, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const deliveryData = [
  { month: "Jan", delivered: 450, pending: 23, failed: 8 },
  { month: "Feb", delivered: 520, pending: 18, failed: 12 },
  { month: "Mar", delivered: 480, pending: 25, failed: 15 },
  { month: "Apr", delivered: 610, pending: 19, failed: 9 },
  { month: "May", delivered: 590, pending: 22, failed: 11 },
  { month: "Jun", delivered: 670, pending: 16, failed: 7 },
  { month: "Jul", delivered: 720, pending: 14, failed: 5 },
];

const zoneData = [
  { name: "North Zone", value: 35, fill: "hsl(var(--chart-1))" },
  { name: "South Zone", value: 28, fill: "hsl(var(--chart-2))" },
  { name: "East Zone", value: 22, fill: "hsl(var(--chart-3))" },
  { name: "West Zone", value: 15, fill: "hsl(var(--chart-4))" },
];

const performanceData = [
  { day: "Mon", efficiency: 94 },
  { day: "Tue", efficiency: 96 },
  { day: "Wed", efficiency: 92 },
  { day: "Thu", efficiency: 98 },
  { day: "Fri", efficiency: 95 },
  { day: "Sat", efficiency: 89 },
  { day: "Sun", efficiency: 87 },
];

export function LogisticsCharts() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Delivery Performance</CardTitle>
          <CardDescription>Monthly delivery statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              delivered: {
                label: "Delivered",
                color: "hsl(var(--chart-1))",
              },
              pending: {
                label: "Pending",
                color: "hsl(var(--chart-2))",
              },
              failed: {
                label: "Failed",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={deliveryData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="delivered"
                  stackId="1"
                  stroke="hsl(var(--chart-1))"
                  fill="hsl(var(--chart-1))"
                  fillOpacity={0.8}
                />
                <Area
                  type="monotone"
                  dataKey="pending"
                  stackId="2"
                  stroke="hsl(var(--chart-2))"
                  fill="hsl(var(--chart-2))"
                  fillOpacity={0.8}
                />
                <Area
                  type="monotone"
                  dataKey="failed"
                  stackId="3"
                  stroke="hsl(var(--chart-3))"
                  fill="hsl(var(--chart-3))"
                  fillOpacity={0.8}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Zone Distribution</CardTitle>
            <CardDescription>Shipments by delivery zone</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Shipments",
                },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={zoneData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {zoneData.map((entry) => (
                      <Cell key={`cell-${entry.name}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Efficiency</CardTitle>
            <CardDescription>Daily delivery efficiency rates</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                efficiency: {
                  label: "Efficiency %",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <XAxis dataKey="day" />
                  <YAxis domain={[80, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="efficiency" stroke="hsl(var(--chart-1))" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
