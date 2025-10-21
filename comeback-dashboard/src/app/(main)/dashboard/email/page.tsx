import { EmailCompose } from "./_components/email-compose";
import { EmailList } from "./_components/email-list";
import { EmailOverview } from "./_components/email-overview";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <EmailOverview />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <EmailList />
        </div>
        <div>
          <EmailCompose />
        </div>
      </div>
    </div>
  );
}
