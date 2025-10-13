import { RolesHeader } from "./_components/roles-header";
import { RolesGrid } from "./_components/roles-grid";

export default function Page() {
    return (
        <div className="flex flex-col gap-6">
            <RolesHeader />

            <RolesGrid />
        </div>
    );
}
