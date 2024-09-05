import React from "react";
import LayoutMain from "../../../Components/LayoutMain/LayoutMain";
import DetailsBox from "../../../Components/Customer/CustomerEdit.js/EditButtonTopCard/DetailsBox";
import CustomerDetails from "../../../Components/Customer/CustomerEdit.js/DetailsCards/CustomerDetails";

export default function CustomerDetailsPage() {
  return (
    <LayoutMain>
      <DetailsBox />
      <CustomerDetails/>
    </LayoutMain>
  );
}
