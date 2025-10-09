import type { ActiveSectionState } from "@/types";
import TimerOptions from "@/components/features/settings/options/TimerOptions";
import BehaviourOptions from "@/components/features/settings/options/BehaviourOptions";
import NotificationOptions from "@/components/features/settings/options/NotificationOptions";
import AppearanceOptions from "@/components/features/settings/options/AppearanceOptions";

export const renderSectionOptions = ({
  activeSection,
}: {
  activeSection: ActiveSectionState;
}) => {
  switch (activeSection) {
    case "Timer":
      return <TimerOptions />;
    case "Behaviour":
      return <BehaviourOptions />;
    case "Notifications":
      return <NotificationOptions />;
    case "Appearance":
      return <AppearanceOptions />;
    default:
      return (
        <>
          <p className="text-neutral-500">
            No settings available for this section
          </p>
        </>
      );
  }
};
