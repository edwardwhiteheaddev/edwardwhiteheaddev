import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Paperclip } from "lucide-react";

export function EmailCompose() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Compose Email</CardTitle>
        <CardDescription>
          Send a new message
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="to">To</Label>
          <Input
            id="to"
            placeholder="recipient@example.com"
            type="email"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            placeholder="Email subject"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Type your message here..."
            className="min-h-[120px]"
          />
        </div>

        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm">
            <Paperclip className="mr-2 h-4 w-4" />
            Attach File
          </Button>

          <Button>
            <Send className="mr-2 h-4 w-4" />
            Send Email
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
