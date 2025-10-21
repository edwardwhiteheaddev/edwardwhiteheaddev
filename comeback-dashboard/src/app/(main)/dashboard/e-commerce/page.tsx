import { EcommerceCharts } from "./_components/ecommerce-charts";
import { EcommerceMetrics } from "./_components/ecommerce-metrics";
import { EcommerceOverview } from "./_components/ecommerce-overview";
import { EcommerceTable } from "./_components/ecommerce-table";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <EcommerceOverview />
      <EcommerceCharts />
      <EcommerceMetrics />
      <EcommerceTable />
    </div>
  );
}
