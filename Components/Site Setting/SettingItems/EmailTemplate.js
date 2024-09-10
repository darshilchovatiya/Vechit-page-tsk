import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { Badge, Button, Card, CardBody } from "reactstrap";
import ModalPage from "../../Modal/ModalPage";

const customStyles = {
  rows: {
    style: {
    },
  },
  headCells: {
    style: {
      border: "1px solid #ededed",
      color: "gray",
      backgroundColor: "#f8f9fb",
    },
  },
  cells: {
    style: {
      border: "1px solid #f1f2f6",
      fontSize: "12px",
    },
  },
};

export default function EmailTemplate() {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const toggle = () => setModal(!modal);

const rowDelete = () => {
  const newData = data.filter((item) => item.id !==selectedId)
  setData(newData)
  toggle()
}

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,

      minWidth: "270px",
      maxWidth: "270px",
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
      minWidth: "930px",
      maxWidth: "930px",
    },
    {
      name: "Status",
      selector: (row) => row.status,
      style: {
        justifyContent: "center",
      },
      minWidth: "80px",
      maxWidth: "80px",
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="actionbtn">
          <div onClick={() => router.push("/customer/customerdetailspage")}>
            <Button color="primary p-0">
              <Icon icon="ic:outline-edit" height={15} width={15} />
            </Button>
          </div>
          <div>
            <Button
              color="danger p-0"
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

  const [data, setData] = useState([
    {
      id: 1,
      name: "Welcome",
      subject: "Welcome to Vechit",
      status: <Badge color="success 2">Active</Badge>,
      action: "",
    },
    {
      id: 2,
      name: "Successfully_Registered",
      subject: "Successfully Registered",
      status: <Badge color="success 2">Active</Badge>,
      action: "",
    },
    {
      id: 3,
      name: "Employee_Register_Details",
      subject: "Employee Register Details",
      status: <Badge color="success 2">Active</Badge>,
      action: "",
    },
    {
      id: 4,
      name: "Email_Verification",
      subject: "Email Verification",
      status: <Badge color="success 2">Active</Badge>,
      action: "",
    },
    {
      id: 5,
      name: "rihhfdff",
      subject: "fefgf",
      status: <Badge color="danger 2">Delete</Badge>,
      action: "",
    },
    {
      id: 6,
      name: "forget_password",
      subject: "Reset Password",
      status: <Badge color="success 2">Active</Badge>,
      action: "",
    },
    {
      id: 7,
      name: "Email_Template_Demo",
      subject: "forget password",
      status: <Badge color="success 2">Active</Badge>,
      action: "",
    },
    {
      id: 8,
      name: "dfdddsebgdf",
      subject: "ergvvf",
      status: <Badge color="danger 2">Delete</Badge>,
      action: "",
    },
  ]);

  return (
    <>
      <div className="row">
        <div className="col">
          <h6 className="mb-3">Email Template</h6>
        </div>
        <div className="add-email col">
          <Button color="dark 3">Add Email Template</Button>
        </div>
      </div>
      <Card>
        <CardBody>
          <DataTable
            className="dataTable"
            columns={columns}
            data={data}
            customStyles={customStyles}
          />
        </CardBody>
      </Card>

      <ModalPage rowDelete={rowDelete} modal={modal} toggle={toggle} />
    </>
  );
}
