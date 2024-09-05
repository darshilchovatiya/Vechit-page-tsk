import HeaderMain from "../HeaderMain/HeaderMain";
import Sidebar from "../Sidebar/Sidebar";

export default function LayoutMain({ children }) {
  return (
    <div>
      <HeaderMain />
      <Sidebar />
      <div className="layout">{children}</div>
    </div>
  );
}
