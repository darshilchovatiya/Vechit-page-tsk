import { useRouter } from "next/router";
import DataTable from "react-data-table-component";
import { Badge, Card, CardBody } from "reactstrap";

const customStyles = {
  rows: {
    style: {
    //   fontSize: "15px",
    //   fontWeight: "600",
    },
  },
  headCells: {
    style: {
      paddingLeft: "20px",
      paddingRight: "8px",
      border: "1px solid #f1f1f1",
      backgroundColor: "#f8f9fb",
      color: "gray",
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
export default function Following() {
  const router = useRouter();

  const columns = [
    {
      name: "Photo",
      selector: (row) => (
        <div className="tableimg">
          <img src="/chatprofile.jpeg"></img>
        </div>
      ),
      style: {
        justifyContent: "start",
      },
      minWidth: "100px",
      maxWidth: "100px",
    },
    {
      name: "User Name",
      selector: (row) => row.username,
      style: {
        justifyContent: "start",
      },
      minWidth: "260px",
      maxWidth: "260px",
    },

    {
      name: "Last Name",
      selector: (row) => row.lastname,
      style: {
        justifyContent: "start",
      },
      minWidth: "260px",
      maxWidth: "260px",
    },
    {
      name: "Country Code",
      selector: (row) => row.countrycode,
      style: {
        justifyContent: "center",
      },
      minWidth: "170px",
      maxWidth: "170px",
    },
    {
      name: "Phone Number",
      selector: (row) => row.phonenumber,
      style: {
        justifyContent: "start",
      },
      minWidth: "260px",
      maxWidth: "260px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      style: {
        justifyContent: "start",
      },
      minWidth: "260px",
      maxWidth: "260px",
    },
    {
      name: "Status",
      selector: (row) => (
        <div>
          <Badge color="success 2">Active</Badge>
        </div>
      ),
      style: {
        justifyContent: "start",
      },
      minWidth: "100px",
      maxWidth: "100px",
    },
  ];

  const data = [
    {
      id: 1,
      username: "Jaii Patel",
      lastname: "patel",
      countrycode: "+44",
      phonenumber: "9662649473",
      email: "jaii@gmail.com",
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
