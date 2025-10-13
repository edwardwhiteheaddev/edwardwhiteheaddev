import { InvoiceHeader } from "./_components/invoice-header";
import { InvoiceList } from "./_components/invoice-list";
import { InvoiceStats } from "./_components/invoice-stats";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <InvoiceHeader />

      <InvoiceStats />

      <InvoiceList />
    </div>
  );
}
