import LayoutMain from "../../../Components/LayoutMain/LayoutMain";
import SettingDetails from "../../../Components/Site Setting/SettingItems/SettingDetails";
import SettingTitle from "../../../Components/Site Setting/SiteSettingTitle/SettingTitle";

export default function sitesetting() {
  return (
    <LayoutMain>
      <SettingTitle />
      <SettingDetails />
    </LayoutMain>
  );
}
