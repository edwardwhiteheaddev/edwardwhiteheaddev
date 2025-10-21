"use client";

import { Book, ExternalLink, FileText, MessageCircle, Settings, Users, Video } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
                <div className="bg-primary/10 rounded-lg p-2">
                  <Icon className="text-primary h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {section.articles.map((article) => (
                <div
                  key={article.title}
                  className="hover:bg-muted/50 flex cursor-pointer items-center justify-between rounded-lg border p-3 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{article.title}</h4>
                    <div className="mt-1 flex items-center space-x-2">
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
                      <span className="text-muted-foreground text-xs">{article.readTime} read</span>
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
          <CardDescription>Get personalized assistance from our support team</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2 text-center">
              <div className="mx-auto w-fit rounded-lg bg-blue-50 p-3">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium">Live Chat</h4>
              <p className="text-muted-foreground text-sm">Chat with our support team in real-time</p>
              <Button size="sm">Start Chat</Button>
            </div>

            <div className="space-y-2 text-center">
              <div className="mx-auto w-fit rounded-lg bg-green-50 p-3">
                <Book className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-medium">Documentation</h4>
              <p className="text-muted-foreground text-sm">Browse our comprehensive knowledge base</p>
              <Button variant="outline" size="sm">
                View Docs
              </Button>
            </div>

            <div className="space-y-2 text-center">
              <div className="mx-auto w-fit rounded-lg bg-purple-50 p-3">
                <Video className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-medium">Video Tutorials</h4>
              <p className="text-muted-foreground text-sm">Watch step-by-step video guides</p>
              <Button variant="outline" size="sm">
                Watch Videos
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
