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
    case "timer":
      return <TimerOptions />;
    case "behaviour":
      return <BehaviourOptions />;
    case "notifications":
      return <NotificationOptions />;
    case "appearance":
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
