"use client";

import { Edit, Eye, Settings, Shield, Trash2, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const roles = [
  {
    id: 1,
    name: "Administrator",
    description: "Full system access with all permissions",
    users: 12,
    permissions: ["read", "write", "delete", "manage_users", "manage_settings"],
    color: "bg-red-50 border-red-200",
    icon: Shield,
  },
  {
    id: 2,
    name: "Manager",
    description: "Manage team members and projects",
    users: 28,
    permissions: ["read", "write", "manage_team", "view_reports"],
    color: "bg-blue-50 border-blue-200",
    icon: Users,
  },
  {
    id: 3,
    name: "Developer",
    description: "Access to development tools and code",
    users: 45,
    permissions: ["read", "write", "access_code", "deploy"],
    color: "bg-green-50 border-green-200",
    icon: Settings,
  },
  {
    id: 4,
    name: "Designer",
    description: "Access to design tools and assets",
    users: 18,
    permissions: ["read", "write", "access_design"],
    color: "bg-purple-50 border-purple-200",
    icon: Settings,
  },
  {
    id: 5,
    name: "Viewer",
    description: "Read-only access to reports and data",
    users: 156,
    permissions: ["read"],
    color: "bg-gray-50 border-gray-200",
    icon: Eye,
  },
  {
    id: 6,
    name: "Guest",
    description: "Limited access for external users",
    users: 23,
    permissions: ["read"],
    color: "bg-orange-50 border-orange-200",
    icon: Eye,
  },
];

export function RolesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {roles.map((role) => {
        const Icon = role.icon;
        return (
          <Card key={role.id} className={`${role.color} transition-shadow hover:shadow-md`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-background rounded-lg p-2">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{role.name}</CardTitle>
                    <CardDescription>{role.description}</CardDescription>
                  </div>
                </div>
                <Badge variant="secondary">{role.users} users</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-2 text-sm font-medium">Permissions</h4>
                <div className="flex flex-wrap gap-1">
                  {role.permissions.map((permission) => (
                    <Badge key={permission} variant="outline" className="text-xs">
                      {permission}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t pt-4">
                <div className="text-muted-foreground text-sm">{role.users} users assigned</div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
