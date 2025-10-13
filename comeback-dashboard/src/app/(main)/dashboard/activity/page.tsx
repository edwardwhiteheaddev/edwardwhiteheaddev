import { ActivityHeader } from "./_components/activity-header";
import { ActivityFeed } from "./_components/activity-feed";

export default function Page() {
    return (
        <div className="flex flex-col gap-6">
            <ActivityHeader />

            <ActivityFeed />
        </div>
    );
}
