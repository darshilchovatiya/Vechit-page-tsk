import Address from "../../../Components/Customer/CustomerEdit.js/DetailsCards/Address";
import DetailsBox from "../../../Components/Customer/CustomerEdit.js/EditButtonTopCard/DetailsBox";
import LayoutMain from "../../../Components/LayoutMain/LayoutMain";

export default function addresspage() {
  return (
    <>
      <LayoutMain>
        <DetailsBox />
        <Address />
      </LayoutMain>
    </>
  );
}
