import SettingsTopbarNavItem from "./SettingsTopbarNavItem";

const SettingsTopbar = ({ toggleSettings }: { toggleSettings: () => void }) => {
  return (
    <nav>
      <button onClick={toggleSettings}>X</button>
      <ul>
        <SettingsTopbarNavItem />
        <SettingsTopbarNavItem />
        <SettingsTopbarNavItem />
        <SettingsTopbarNavItem />
      </ul>
    </nav>
  );
};

export default SettingsTopbar;
