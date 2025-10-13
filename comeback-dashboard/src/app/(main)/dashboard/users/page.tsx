import { UsersHeader } from "./_components/users-header";
import { UsersTable } from "./_components/users-table";
import { UsersStats } from "./_components/users-stats";

export default function Page() {
    return (
        <div className="flex flex-col gap-6">
            <UsersHeader />

            <UsersStats />

            <UsersTable />
        </div>
    );
}
