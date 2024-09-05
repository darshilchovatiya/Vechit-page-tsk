import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import DataTable from "react-data-table-component";
import { Badge, Button, Card, CardBody } from "reactstrap";

const customStyles = {
  rows: {
    style: {
      height: "60px",
      width: "100%",
    },
  },
  headCells: {
    style: {
      justifyContent: "center",
      height: "60px",
      paddingLeft: "20px",
      paddingRight: "8px",
      border: "1px solid #ededed",
      color: "gray",
      backgroundColor: "#f8f9fb",
    },
  },
  cells: {
    style: {
      paddingLeft: "20px",
      paddingRight: "8px",
      border: "1px solid #ededed",
    },
  },
};

export default function DashboardTable() {
  const router = useRouter();

  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <div className="tableimg">
          <img src={row.image} alt="table-img"></img>
        </div>
      ),
      style: {
        justifyContent: "end",
      },
      minWidth: "80px",
      maxWidth: "80px",
    },
    {
      name: "Order Id",
      selector: (row) => row.orderid,
      style: {
        justifyContent: "center",
      },
      minWidth: "90px",
      maxWidth: "900px",
    },
    {
      name: "Customer Name",
      selector: (row) => row.customername,
      style: {
        // color:"gray",
      },
      minWidth: "270px",
      maxWidth: "270px",
    },
    {
      name: "Price",
      selector: (row) => row.price,
      style: {
        justifyContent: "center",
      },
      minWidth: "140px",
      maxWidth: "130px",
    },
    {
      name: "Order Place",
      selector: (row) => row.orderplace,
      style: {
        justifyContent: "center",
      },
      minWidth: "150px",
      maxWidth: "200px",
    },
    {
      name: "Order Status",
      selector: (row) => row.orderstatus,
      style: {
        justifyContent: "center",
      },
      minWidth: "120px",
      maxWidth: "120px",
    },
    {
      name: "Payment Status",
      selector: (row) => row.paymentstatus,
      style: {
        justifyContent: "center",
      },
      minWidth: "120px",
      maxWidth: "120px",
    },
    {
      name: "Item Images",
      selector: (row) => (
        <div className="itemimg">
          <div>
            <img src={row.itemimages}></img>
          </div>
          <div>
            <img src={row.itemimagesa}></img>
          </div>
          <div>
            <img src={row.itemimagesa}></img>
          </div>
        </div>
      ),
      style: {
        // justifyContent: "center",
      },
      minWidth: "330px",
      maxWidth: "100px",
    },
    {
      name: "View",
      selector: (row) => (
        <div className="viewarrow">
          <Icon icon="mdi:keyboard-arrow-right" />
        </div>
      ),
      style: {
        justifyContent: "center",
      },
      minWidth: "75px",
      maxWidth: "60px",
    },
  ];

  const data = [
    {
      image: "/td1.jpeg",
      orderid: "10431",
      customername: "Kusum Modhvadia",
      price: "£ 4.55",
      orderplace: "02 Aug 2024",
      orderstatus: <Badge color="success">Complete</Badge>,
      paymentstatus: <Badge color="success">Success</Badge>,
      itemimages: "/td1.jpeg",
      itemimagesa: "/td2.jpeg",
    },
    {
      image: "/td2.jpeg",
      orderid: "10410",
      customername: "John Wick",
      price: "£ 5.77",
      orderplace: "02 Aug 2024",
      orderstatus: <Badge color="success">Complete</Badge>,
      paymentstatus: <Badge color="success">Success</Badge>,
      itemimages: "/item2.jpeg",
      itemimagesa: "/item3.jpeg",
    },
    {
      image: "/td3.jpeg",
      orderid: "10430",
      customername: "Adam Smith",
      price: "£ 3.78",
      orderplace: "01 Aug 2024",
      orderstatus: <Badge color="danger">Cancelled</Badge>,
      paymentstatus: <Badge color="secondary">Cancelled</Badge>,
      itemimages: "/item3.jpeg",
      itemimagesa: "/item5.jpeg",
    },
    {
      image: "/td3.jpeg",
      orderid: "10429",
      customername: "Adam Smith",
      price: "£ 1.51",
      orderplace: "01 Aug 2024",
      orderstatus: <Badge color="danger">Cancelled</Badge>,
      paymentstatus: <Badge color="secondary">Cancelled</Badge>,
      itemimages: "/item2.jpeg",
      itemimagesa: "/item1.jpeg",
    },
    {
      image: "/td3.jpeg",
      orderid: "10428",
      customername: "Adam Smith",
      price: "£ 1.51",
      orderplace: "01 Aug 2024",
      orderstatus: <Badge color="danger">Cancelled</Badge>,
      paymentstatus: <Badge color="secondary">Cancelled</Badge>,
      itemimages: "item5.jpeg",
      itemimagesa: "item3.jpeg",
    },
  ];

  const columns1 = [
    {
      name: "Image",
      selector: (row) => (
        <div className="tableimg">
          <img src="/td3.jpeg" alt="Customer Image"></img>
        </div>
      ),
      style: {
        justifyContent: "center",
      },
      minWidth: "80px",
      maxWidth: "80px",
    },
    {
      name: "First Name",
      selector: (row) => row.firstname,
      style: {
        justifyContent: "center",
      },
      minWidth: "100px",
      maxWidth: "100px",
    },
    {
      name: "Last Name",
      selector: (row) => row.lastname,
      style: {
        justifyContent: "center",
      },
      minWidth: "110px",
      maxWidth: "110px",
    },
    {
      name: "Country Code",
      selector: (row) => row.countrycode,
      style: {
        justifyContent: "center",
      },
      minWidth: "110px",
      maxWidth: "110px",
    },
    {
      name: "Phone Number",
      selector: (row) => row.phonenumber,
      style: {
        justifyContent: "center",
      },
      minWidth: "200px",
      maxWidth: "300px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      style: {
        justifyContent: "center",
        fontWeight: "600",
      },
      minWidth: "300px",
      maxWidth: "300px",
    },
    {
      name: "Registration Date",
      selector: (row) => row.registrationdate,
      style: {
        justifyContent: "center",
      },
      minWidth: "200px",
      maxWidth: "200px",
    },
    {
      name: "Status",
      selector: (row) => row.status,
      style: {
        justifyContent: "center",
      },
      minWidth: "110px",
      maxWidth: "110px",
    },
    {
      name: "Action",
      selector: (row) => (
        <div
          className="actionbtn"
          onClick={() => router.push("/customer/CustomerDetailsPage")}
        >
          <Button color="primary">
            <Icon icon="ic:outline-edit" height={20} width={20} />
          </Button>
        </div>
      ),
      style: {
        justifyContent: "center",
      },
      minWidth: "110px",
      maxWidth: "110px",
    },
  ];

  const data1 = [
    {
      image: 1,
      firstname: "Darshil",
      lastname: "Chovatiya",
      countrycode: "+44",
      phonenumber: "9662649473",
      email: "darshil@email.com",
      registrationdate: "14 Aug 2024",
      status: <Badge color="success">Active</Badge>,
    },
    {
      image: 2,
      firstname: "Meet",
      lastname: "Hint",
      countrycode: "+44",
      phonenumber: "8662649473",
      email: "meet@email.com",
      registrationdate: "14 Aug 2024",
      status: <Badge color="success">Active</Badge>,
    },
    {
      image: 3,
      firstname: "Heli",
      lastname: "Keyli",
      countrycode: "+44",
      phonenumber: "7658649473",
      email: "heli@email.com",
      registrationdate: "14 Aug 2024",
      status: <Badge color="success">Active</Badge>,
    },
    {
      image: 4,
      firstname: "Deny",
      lastname: "Liyer",
      countrycode: "+44",
      phonenumber: "6612649473",
      email: "deny@email.com",
      registrationdate: "14 Aug 2024",
      status: <Badge color="success">Active</Badge>,
    },
    {
      image: 5,
      firstname: "Jaily",
      lastname: "Kivhb",
      countrycode: "+44",
      phonenumber: "8669469473",
      email: "jaily@email.com",
      registrationdate: "14 Aug 2024",
      status: <Badge color="success">Active</Badge>,
    },
  ];
  return (
    <>
      <Card>
        <CardBody>
          <DataTable
            title="LATEST ORDERS"
            className="dataTable"
            columns={columns}
            data={data}
            customStyles={customStyles}
            pointerOnHover
          />
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <DataTable
            title="LATEST CUSTOMER"
            className="dataTable"
            columns={columns1}
            data={data1}
            customStyles={customStyles}
            pointerOnHover
          />
        </CardBody>
      </Card>
    </>
  );
}
