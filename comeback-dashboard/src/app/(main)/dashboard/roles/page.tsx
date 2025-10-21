import { RolesGrid } from "./_components/roles-grid";
import { RolesHeader } from "./_components/roles-header";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <RolesHeader />

      <RolesGrid />
    </div>
  );
}
