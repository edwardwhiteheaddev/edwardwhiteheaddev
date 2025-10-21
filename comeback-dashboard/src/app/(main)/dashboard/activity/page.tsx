import { ActivityFeed } from "./_components/activity-feed";
import { ActivityHeader } from "./_components/activity-header";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <ActivityHeader />

      <ActivityFeed />
    </div>
  );
}
