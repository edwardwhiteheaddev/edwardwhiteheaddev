import { HelpContent } from "./_components/help-content";
import { HelpHeader } from "./_components/help-header";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <HelpHeader />

      <HelpContent />
    </div>
  );
}
