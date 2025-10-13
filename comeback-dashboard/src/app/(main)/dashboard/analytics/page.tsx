import { AnalyticsOverview } from "./_components/analytics-overview";
import { AnalyticsCharts } from "./_components/analytics-charts";
import { AnalyticsMetrics } from "./_components/analytics-metrics";
import { AnalyticsTable } from "./_components/analytics-table";

export default function Page() {
    return (
        <div className="flex flex-col gap-4 md:gap-6">
            <AnalyticsOverview />
            <AnalyticsCharts />
            <AnalyticsMetrics />
            <AnalyticsTable />
        </div>
    );
}
