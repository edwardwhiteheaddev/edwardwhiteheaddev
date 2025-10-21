import { SettingsHeader } from "./_components/settings-header";
import { SettingsTabs } from "./_components/settings-tabs";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <SettingsHeader />

      <SettingsTabs />
    </div>
  );
}
