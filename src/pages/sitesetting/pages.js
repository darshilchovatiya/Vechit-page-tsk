import LayoutMain from "../../../Components/LayoutMain/LayoutMain";
import SettingPages from "../../../Components/Site Setting/SettingItems/SettingPages";
import SettingTitle from "../../../Components/Site Setting/SiteSettingTitle/SettingTitle";

export default function pages() {
  return (
    <LayoutMain>
      <SettingTitle />
      <SettingPages/>
    </LayoutMain>
  );
}