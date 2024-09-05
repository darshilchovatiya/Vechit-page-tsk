import LayoutMain from "../../../Components/LayoutMain/LayoutMain";
import SmsTemplate from "../../../Components/Site Setting/SettingItems/SmsTemplate";
import SettingTitle from "../../../Components/Site Setting/SiteSettingTitle/SettingTitle";

export default function smstemplatepage() {
  return (
    <div>
      <LayoutMain>
        <SettingTitle />
        <SmsTemplate />
      </LayoutMain>
    </div>
  );
}
