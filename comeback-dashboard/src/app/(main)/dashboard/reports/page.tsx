import { ReportsHeader } from "./_components/reports-header";
import { ReportsCharts } from "./_components/reports-charts";
import { ReportsTable } from "./_components/reports-table";

export default function Page() {
    return (
        <div className="flex flex-col gap-6">
            <ReportsHeader />

            <ReportsCharts />

            <ReportsTable />
        </div>
    );
}
