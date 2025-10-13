import { ChatSidebar } from "./_components/chat-sidebar";
import { ChatWindow } from "./_components/chat-window";
import { ChatHeader } from "./_components/chat-header";

export default function Page() {
  return (
    <div className="flex h-[calc(100vh-200px)] flex-col">
      <ChatHeader />

      <div className="flex flex-1 gap-6">
        <div className="w-80">
          <ChatSidebar />
        </div>
        <div className="flex-1">
          <ChatWindow />
        </div>
      </div>
    </div>
  );
}
