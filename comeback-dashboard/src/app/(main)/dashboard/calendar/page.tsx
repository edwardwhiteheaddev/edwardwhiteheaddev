import { CalendarHeader } from "./_components/calendar-header";
import { CalendarGrid } from "./_components/calendar-grid";
import { CalendarSidebar } from "./_components/calendar-sidebar";

export default function Page() {
    return (
        <div className="flex h-[calc(100vh-200px)] flex-col">
            <CalendarHeader />

            <div className="flex flex-1 gap-6">
                <div className="w-64">
                    <CalendarSidebar />
                </div>
                <div className="flex-1">
                    <CalendarGrid />
                </div>
            </div>
        </div>
    );
}
