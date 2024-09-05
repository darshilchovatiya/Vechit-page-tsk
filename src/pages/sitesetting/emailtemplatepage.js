import React from "react";
import LayoutMain from "../../../Components/LayoutMain/LayoutMain";
import SettingTitle from "../../../Components/Site Setting/SiteSettingTitle/SettingTitle";
import EmailTemplate from "../../../Components/Site Setting/SettingItems/EmailTemplate";

export default function emailtemplatepage() {
  return (
    <LayoutMain>
      <SettingTitle />
      <EmailTemplate />
    </LayoutMain>
  );
}
