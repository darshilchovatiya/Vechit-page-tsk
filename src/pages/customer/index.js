import CustomerMainCard from "../../../Components/Customer/CustmorCard/CustomerMainCard";
import CustomerTable from "../../../Components/Customer/CustomerTable/CustomerTable";
import LayoutMain from "../../../Components/LayoutMain/LayoutMain";

export default function customer() {
  return (
    <>
      <LayoutMain>
        <CustomerMainCard/>
        <CustomerTable />
      </LayoutMain> 
    </>
  );
}
