import MusicPlayer from "../../../Components/Customer/CustomerEdit.js/DetailsCards/MusicPlayer";
import DetailsBox from "../../../Components/Customer/CustomerEdit.js/EditButtonTopCard/DetailsBox";
import LayoutMain from "../../../Components/LayoutMain/LayoutMain";

export default function musicplayerpage() {
  return (
    <>
      <LayoutMain>
        <DetailsBox />
        <MusicPlayer />
      </LayoutMain>
    </>
  );
}
