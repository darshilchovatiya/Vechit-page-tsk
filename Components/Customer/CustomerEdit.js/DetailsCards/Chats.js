import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import DataTable from "react-data-table-component";
import {
    Button,
    Card,
    CardBody
} from "reactstrap";

const customStyles = {
  rows: {
    style: {
fontSize:"15px",
fontWeight:"600",
    },
  },
  headCells: {
    style: {
      paddingLeft: "20px",
      paddingRight: "8px",
      border: "1px solid #f1f1f1",
      backgroundColor: "#f8f9fb",
      color: "gray",
      fontSize:"15px",
    },
  },
  cells: {
    style: {
      paddingLeft: "20px",
      paddingRight: "8px",
      border: "1px solid #f1f1f1",
      justifyContent: "center",
    },
  },
};
export default function Chats() {
  const router = useRouter();

  const columns = [
    {
      name: "Customer Name",
      selector: (row) => row.customername,
      style: {
        justifyContent: "start",
      },
      minWidth: "350px",
      maxWidth: "350px",
    },
    {
      name: "Profile Image",
      selector: (row) => (
        <div className="tableimg">
          <img src="/chatprofile.jpeg"></img>
        </div>
      ),
      style: {
        justifyContent: "start",
      },
      minWidth: "360px",
      maxWidth: "360px",
    },

    {
      name: "Last Message",
      selector: (row) => row.lastmessage,
      style: {
        justifyContent: "start",
      },
      minWidth: "550px",
      maxWidth: "550px",
    },
    {
      name: "Action",
      selector: (row) => (
        <Button color="primary p-0">
          <Icon icon="mdi:eye-outline" width="1rem" height="1rem" />
        </Button>
      ),
      style: {
        justifyContent: "start",
      },
      minWidth: "150px",
      maxWidth: "150px",
    },
  ];

  const data = [
    {
      id: 1,
      customername: "Jaii Patel",
      profileimage: "",
      lastmessage: "Bundle created",
      action: "",
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
          />
        </CardBody>
      </Card>
    </>
  );
}
