import CustomerMainCard from "../../../Components/Customer/CustmorCard/CustomerMainCard";
import CustomerTable from "../../../Components/Customer/CustomerTable/CustomerTable";
import CustomerTitle from "../../../Components/Customer/CustomerTitile/CustomerTitle";
import LayoutMain from "../../../Components/LayoutMain/LayoutMain";

export default function customer() {
  return (
    <>
      <LayoutMain>
        <CustomerTitle/>
        <CustomerMainCard/>
        <CustomerTable />
      </LayoutMain> 
    </>
  );
}
