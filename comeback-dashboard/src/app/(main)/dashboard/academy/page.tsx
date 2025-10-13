import { AcademyOverview } from "./_components/academy-overview";
import { AcademyCharts } from "./_components/academy-charts";
import { AcademyMetrics } from "./_components/academy-metrics";
import { AcademyTable } from "./_components/academy-table";

export default function Page() {
    return (
        <div className="flex flex-col gap-4 md:gap-6">
            <AcademyOverview />
            <AcademyCharts />
            <AcademyMetrics />
            <AcademyTable />
        </div>
    );
}
