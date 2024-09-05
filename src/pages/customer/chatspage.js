import Chats from "../../../Components/Customer/CustomerEdit.js/DetailsCards/Chats";
import DetailsBox from "../../../Components/Customer/CustomerEdit.js/EditButtonTopCard/DetailsBox";
import LayoutMain from "../../../Components/LayoutMain/LayoutMain";

export default function chatspage() {
  return (
    <>
      <LayoutMain>
        <DetailsBox />
        <Chats />
      </LayoutMain>
    </>
  );
}
