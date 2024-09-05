import DashboardOrderCard from "../../Components/Dashboard/DashboardOrderCard/DashOrderCard";
import DashboardTable from "../../Components/Dashboard/DashboardTable/DashboardTable";
import DashboardTitle from "../../Components/Dashboard/DashboardTitle/DashboardTitle";
import LayoutMain from "../../Components/LayoutMain/LayoutMain";

export default function index() {
  return (
    <LayoutMain>
      <DashboardTitle />
      <DashboardOrderCard />
      <DashboardTable />
    </LayoutMain>
  );  
}
