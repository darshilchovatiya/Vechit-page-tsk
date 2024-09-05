import Items from "../../../Components/Customer/CustomerEdit.js/DetailsCards/Items";
import DetailsBox from "../../../Components/Customer/CustomerEdit.js/EditButtonTopCard/DetailsBox";
import LayoutMain from "../../../Components/LayoutMain/LayoutMain";

export default function itemspage() {
  return (
    <>
      <LayoutMain>
        <DetailsBox />
        <Items />
      </LayoutMain>
    </>
  );
}
