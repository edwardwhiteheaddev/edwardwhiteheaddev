import { KanbanBoard } from "./_components/kanban-board";
import { KanbanHeader } from "./_components/kanban-header";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <KanbanHeader />

      <KanbanBoard />
    </div>
  );
}
