"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Book, Video, FileText, Users, Settings, BarChart3, ExternalLink, MessageCircle } from "lucide-react";

const helpSections = [
  {
    title: "Getting Started",
    description: "Learn the basics of using the dashboard",
    icon: Book,
    articles: [
      { title: "Dashboard Overview", type: "guide", readTime: "5 min" },
      { title: "Navigation Guide", type: "tutorial", readTime: "3 min" },
      { title: "First Steps", type: "guide", readTime: "7 min" },
    ],
  },
  {
    title: "Features",
    description: "Explore all available features and tools",
    icon: Settings,
    articles: [
      { title: "Analytics Dashboard", type: "feature", readTime: "8 min" },
      { title: "User Management", type: "guide", readTime: "6 min" },
      { title: "Reports & Export", type: "tutorial", readTime: "4 min" },
    ],
  },
  {
    title: "API Documentation",
    description: "Technical documentation for developers",
    icon: FileText,
    articles: [
      { title: "Authentication API", type: "api", readTime: "10 min" },
      { title: "Data Endpoints", type: "reference", readTime: "12 min" },
      { title: "Webhooks Guide", type: "guide", readTime: "6 min" },
    ],
  },
  {
    title: "Troubleshooting",
    description: "Common issues and solutions",
    icon: Users,
    articles: [
      { title: "Login Issues", type: "troubleshooting", readTime: "4 min" },
      { title: "Performance Problems", type: "troubleshooting", readTime: "6 min" },
      { title: "Data Sync Issues", type: "troubleshooting", readTime: "5 min" },
    ],
  },
];

export function HelpContent() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {helpSections.map((section) => {
        const Icon = section.icon;
        return (
          <Card key={section.title}>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {section.articles.map((article, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{article.title}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge
                        variant={
                          article.type === "guide"
                            ? "default"
                            : article.type === "tutorial"
                            ? "secondary"
                            : article.type === "api"
                            ? "outline"
                            : "destructive"
                        }
                        className="text-xs"
                      >
                        {article.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {article.readTime} read
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              <Button variant="outline" className="w-full">
                View All {section.title} Articles
              </Button>
            </CardContent>
          </Card>
        );
      })}

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Need More Help?</CardTitle>
          <CardDescription>
            Get personalized assistance from our support team
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center space-y-2">
              <div className="p-3 rounded-lg bg-blue-50 mx-auto w-fit">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium">Live Chat</h4>
              <p className="text-sm text-muted-foreground">
                Chat with our support team in real-time
              </p>
              <Button size="sm">Start Chat</Button>
            </div>

            <div className="text-center space-y-2">
              <div className="p-3 rounded-lg bg-green-50 mx-auto w-fit">
                <Book className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-medium">Documentation</h4>
              <p className="text-sm text-muted-foreground">
                Browse our comprehensive knowledge base
              </p>
              <Button variant="outline" size="sm">View Docs</Button>
            </div>

            <div className="text-center space-y-2">
              <div className="p-3 rounded-lg bg-purple-50 mx-auto w-fit">
                <Video className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-medium">Video Tutorials</h4>
              <p className="text-sm text-muted-foreground">
                Watch step-by-step video guides
              </p>
              <Button variant="outline" size="sm">Watch Videos</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
