"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const enrollmentData = [
  { month: "Jan", students: 2400, courses: 45 },
  { month: "Feb", students: 2200, courses: 52 },
  { month: "Mar", students: 2800, courses: 48 },
  { month: "Apr", students: 2600, courses: 61 },
  { month: "May", students: 3100, courses: 55 },
  { month: "Jun", students: 2900, courses: 67 },
  { month: "Jul", students: 3200, courses: 59 },
];

const subjectData = [
  { name: "Technology", value: 30, fill: "hsl(var(--chart-1))" },
  { name: "Business", value: 25, fill: "hsl(var(--chart-2))" },
  { name: "Design", value: 20, fill: "hsl(var(--chart-3))" },
  { name: "Science", value: 15, fill: "hsl(var(--chart-4))" },
  { name: "Arts", value: 10, fill: "hsl(var(--chart-5))" },
];

const completionData = [
  { month: "Jan", rate: 82 },
  { month: "Feb", rate: 85 },
  { month: "Mar", rate: 83 },
  { month: "Apr", rate: 87 },
  { month: "May", rate: 89 },
  { month: "Jun", rate: 91 },
  { month: "Jul", rate: 87 },
];

export function AcademyCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Enrollment Trends</CardTitle>
          <CardDescription>Monthly student enrollment and course creation</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              students: {
                label: "Students",
                color: "hsl(var(--chart-1))",
              },
              courses: {
                label: "Courses",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={enrollmentData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="students"
                  stackId="1"
                  stroke="hsl(var(--chart-1))"
                  fill="hsl(var(--chart-1))"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="courses"
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
          <CardTitle>Subject Distribution</CardTitle>
          <CardDescription>Course distribution by subject</CardDescription>
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
              <BarChart data={subjectData}>
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
          <CardTitle>Completion Rate Trend</CardTitle>
          <CardDescription>Monthly course completion rates</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              rate: {
                label: "Completion Rate",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[200px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={completionData}>
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
