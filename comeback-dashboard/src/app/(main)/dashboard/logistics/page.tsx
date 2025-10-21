import { LogisticsCharts } from "./_components/logistics-charts";
import { LogisticsHeader } from "./_components/logistics-header";
import { LogisticsMap } from "./_components/logistics-map";
import { LogisticsMetrics } from "./_components/logistics-metrics";
import { LogisticsTable } from "./_components/logistics-table";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <LogisticsHeader />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LogisticsCharts />
        </div>
        <div className="space-y-6">
          <LogisticsMetrics />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <LogisticsTable />
        <LogisticsMap />
      </div>
    </div>
  );
}
