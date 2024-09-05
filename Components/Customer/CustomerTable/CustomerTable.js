import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { Badge, Button, Card, CardBody } from "reactstrap";
import ModalPage from "../../Modal/ModalPage";

const customStyles = {
  headCells: {
    style: {
      border: "1px solid #ededed",
      color: "gray",
      backgroundColor: "#f8f9fb",
      fontWeight: "700",
    },
  },
  cells: {
    style: {
      border: "1px solid #ededed",
    },
  },
};

export default function CustomerTable() {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const toggle = () => setModal(!modal);

  const rowDelete = () => {
    const newData = data.filter((item) => item.id !== selectedId);
    setData(newData);
    toggle();
  };

  const [data, setData] = useState([
    {
      id: 1,
      firstname: "Darshil",
      lastname: "Chovatiya",
      countrycode: "+44",
      phonenumber: "9662649473",
      email: "darshil@milantahriol.com",
      registrationdate: "14-08-2024 10:47:38 ",
      logindate: "28-08-2024 11:03:42 ",
    },
    {
      id: 2,
      firstname: "Meet",
      lastname: "Hint",
      countrycode: "+44",
      phonenumber: "8662649473",
      email: "meet@milantahriol.com",
      registrationdate: "14-08-2024 10:47:38",
      logindate: "28-08-2024 11:03:42 ",
    },
    {
      id: 3,
      firstname: "Heli",
      lastname: "Keyli",
      countrycode: "+44",
      phonenumber: "7658649473",
      email: "heli@milantahriol.com",
      registrationdate: "14-08-2024 10:47:38",
      logindate: "28-08-2024 11:03:42 ",
    },
    {
      id: 4,
      firstname: "Deny",
      lastname: "Liyer",
      countrycode: "+44",
      phonenumber: "6612649473",
      email: "deny@milantahriol.com",
      registrationdate: "14-08-2024 10:47:38",
      logindate: "28-08-2024 11:03:42 ",
    },
    {
      id: 5,
      firstname: "Jaily",
      lastname: "Kivhb",
      countrycode: "+44",
      phonenumber: "8669469473",
      email: "jaily@milantahriol.com",
      registrationdate: "14-08-2024 10:47:38",
      logindate: "28-08-2024 11:03:42 ",
    },
    {
      id: 6,
      firstname: "Jink",
      lastname: "Tya",
      countrycode: "+44",
      phonenumber: "5651649473",
      email: "jink@milantahriol.com",
      registrationdate: "14-08-2024 10:47:38 ",
      logindate: "28-08-2024 11:03:42 ",
    },
    {
      id: 7,
      firstname: "Hil",
      lastname: "Kess",
      countrycode: "+44",
      phonenumber: "6362649473",
      email: "hil@milantahriol.com",
      registrationdate: "14-08-2024 10:47:38 ",
      logindate: "28-08-2024 11:03:42 ",
    },
    {
      id: 8,
      firstname: "kalw",
      lastname: "fash",
      countrycode: "+44",
      phonenumber: "7162649473",
      email: "kalw@milantahriol.com",
      registrationdate: "14-08-2024 10:47:38 ",
      logindate: "28-08-2024 11:03:42 ",
    },
    {
      id: 9,
      firstname: "Gisy",
      lastname: "Ktiya",
      countrycode: "+44",
      phonenumber: "9662649473",
      email: "Gisy@milantahriol.com",
      registrationdate: "14-08-2024 10:47:38 ",
      logindate: "28-08-2024 11:03:42 ",
    },
    {
      id: 10,
      firstname: "Jhil",
      lastname: "Fail",
      countrycode: "+44",
      phonenumber: "6932649473",
      email: "jhil@milantahriol.com",
      registrationdate: "14-08-2024 10:47:38 ",
      logindate: "28-08-2024 11:03:42 ",
    },
    {
      id: 11,
      firstname: "Lail",
      lastname: "Katya",
      countrycode: "+44",
      phonenumber: "7964649473",
      email: "Lail@milantahriol.com",
      registrationdate: "14-08-2024 10:47:38 ",
      logindate: "28-08-2024 11:03:42 ",
    },
    {
      id: 13,
      firstname: "Jinkles",
      lastname: "Tyasd",
      countrycode: "+44",
      phonenumber: "56151649473",
      email: "jinkle@milantahriol.com",
      registrationdate: "14-08-2024 10:47:38 ",
      logindate: "28-08-2024 11:03:42 ",
    },
    {
      id: 14,
      firstname: "Link",
      lastname: "Vya",
      countrycode: "+44",
      phonenumber: "5651649473",
      email: "Link@milantahriol.com",
      registrationdate: "14-08-2024 10:47:38 ",
      logindate: "28-08-2024 11:03:42 ",
    },
    {
      id: 20,
      firstname: "Jink",
      lastname: "Tya",
      countrycode: "+44",
      phonenumber: "5651649473",
      email: "jink@milantahriol.com",
      registrationdate: "14-08-2024 10:47:38 ",
      logindate: "28-08-2024 11:03:42 ",
    },
    {
      id: 15,
      firstname: "Hil",
      lastname: "Kess",
      countrycode: "+44",
      phonenumber: "6362649473",
      email: "hil@milantahriol.com",
      registrationdate: "14-08-2024 10:47:38 ",
      logindate: "28-08-2024 11:03:42 ",
    },
    {
      id: 16,
      firstname: "kalw",
      lastname: "fash",
      countrycode: "+44",
      phonenumber: "7162649473",
      email: "kalw@milantahriol.com",
      registrationdate: "14-08-2024 10:47:38 ",
      logindate: "28-08-2024 11:03:42 ",
    },
  ]);

  const columns = [
    {
      name: "Profile",
      selector: (row) => (
        <div className="custtableimg">
          <img src="/custdet1.jpeg" alt="Profile"></img>
        </div>
      ),
      minWidth: "100px",
      maxWidth: "100px",
    },
    {
      name: "First Name",
      selector: (row) => row.firstname,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastname,
    },
    {
      name: "Country Code",
      selector: (row) => row.countrycode,
      style: {
        justifyContent: "center",
      },
    },
    {
      name: "Phone Number",
      selector: (row) => row.phonenumber,
      minWidth: "170px",
      maxWidth: "170px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      minWidth: "200px",
      maxWidth: "200px",
    },
    {
      name: "Registration Date",
      selector: (row) => row.registrationdate,
      style: {
        justifyContent: "center",
      },
      minWidth: "170px",
      maxWidth: "170px",
    },
    {
      name: "Login Date",
      selector: (row) => row.logindate,
      style: {
        justifyContent: "center",
      },
      minWidth: "170px",
      maxWidth: "170px",
    },
    {
      name: "Status",
      selector: (row) => (
        <div>
          <Badge color="success">Active</Badge>
        </div>
      ),
      style: {
        justifyContent: "center",
      },
      minWidth: "100px",
      maxWidth: "100px",
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="actionbtn">
          <div onClick={() => router.push("/customer/CustomerDetailsPage")}>
            <Button color="primary">
              <Icon icon="ic:outline-edit" />
            </Button>
          </div>
          <div>
            <Button
              color="danger"
              onClick={() => {
                setSelectedId(row.id);
                toggle();
              }}
            >
              <Icon
                icon="material-symbols:delete-outline"
                height={15}
                width={15}
              />
            </Button>
          </div>
        </div>
      ),
      style: {
        justifyContent: "center",
      },
      minWidth: "130px",
      maxWidth: "130px",
    },
  ];

  return (
    <>
      <Card>
        <CardBody>
          <DataTable
            className="dataTable"
            columns={columns}
            data={data}
            customStyles={customStyles}
            pointerOnHover
            selectableRows
          />
        </CardBody>
      </Card>

      <ModalPage rowDelete={rowDelete} modal={modal} toggle={toggle} />
    </>
  );
}
