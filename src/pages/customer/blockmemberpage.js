import FavoriteItems from "../../../Components/Customer/CustomerEdit.js/DetailsCards/FavoriteItems";
import DetailsBox from "../../../Components/Customer/CustomerEdit.js/EditButtonTopCard/DetailsBox";
import LayoutMain from "../../../Components/LayoutMain/LayoutMain";

export default function blockmemberpage() {
  return (
    <>
      <LayoutMain>
        <DetailsBox />
        <FavoriteItems />
      </LayoutMain>
    </>
  );
}
