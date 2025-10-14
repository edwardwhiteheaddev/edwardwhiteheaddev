"use client";

import { ArrowUpDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const academyData = [
  {
    course: "Advanced JavaScript",
    instructor: "Sarah Johnson",
    students: "342",
    completion: "89%",
    rating: "4.8",
    status: "Active",
  },
  {
    course: "React Fundamentals",
    instructor: "Mike Chen",
    students: "298",
    completion: "92%",
    rating: "4.9",
    status: "Active",
  },
  {
    course: "Data Science Basics",
    instructor: "Dr. Emily Davis",
    students: "187",
    completion: "76%",
    rating: "4.6",
    status: "Active",
  },
  {
    course: "UI/UX Design",
    instructor: "Alex Rodriguez",
    students: "234",
    completion: "85%",
    rating: "4.7",
    status: "Active",
  },
  {
    course: "Machine Learning",
    instructor: "Prof. James Wilson",
    students: "156",
    completion: "71%",
    rating: "4.5",
    status: "Draft",
  },
];

export function AcademyTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Performance</CardTitle>
        <CardDescription>Course enrollment, completion rates, and student ratings</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Course
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Instructor
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Students
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Completion
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0 font-medium">
                  Rating
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
            {academyData.map((row, index) => (
              <TableRow key={row.course}>
                <TableCell className="font-medium">{row.course}</TableCell>
                <TableCell>{row.instructor}</TableCell>
                <TableCell>{row.students}</TableCell>
                <TableCell>{row.completion}</TableCell>
                <TableCell>{row.rating}</TableCell>
                <TableCell>
                  <Badge variant={row.status === "Active" ? "default" : row.status === "Draft" ? "secondary" : "outline"}>
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
