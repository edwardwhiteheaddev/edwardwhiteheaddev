import { UsersHeader } from "./_components/users-header";
import { UsersStats } from "./_components/users-stats";
import { UsersTable } from "./_components/users-table";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <UsersHeader />

      <UsersStats />

      <UsersTable />
    </div>
  );
}
