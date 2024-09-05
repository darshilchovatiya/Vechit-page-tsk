import { Icon } from "@iconify/react";
import React from "react";
import DataTable from "react-data-table-component";
import { Button, Card, CardBody } from "reactstrap";

const customStyles = {
  rows: {
    style: {
    },
  },
  headCells: {
    style: {
      paddingLeft: "20px",
      paddingRight: "8px",
      border: "1px solid #f1f1f1",
      backgroundColor: "c",
      color: "gray",
      justifyContent: "center",
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
export default function Address() {
  
  const columns = [
    {
      name: "Full Name",
      selector: (row) => row.fullname,
    },
    {
      name: "Address Line 1",
      selector: (row) => row.addressline1,
    },
    {
      name: "Address Line 2",
      selector: (row) => row.addressline2,
    },
    {
      name: "Post Code",
      selector: (row) => row.postcode,
    },
    {
      name: "City",
      selector: (row) => row.city,
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];

  const data = [
    {
      fullname: "Karen Marez",
      addressline1: "33A Dunraven Rd,",
      addressline2: "London",
      postcode: "W127QZ",
      city: "Hammersmith and Fulham",
      action: (
        <div className="actionbtn">
          <Button color="primary">
            <Icon icon="ic:outline-edit" />
          </Button>
        </div>
      ),
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
            selectableRows
            pointerOnHover
          />
        </CardBody>
      </Card>
    </>
  );
}
