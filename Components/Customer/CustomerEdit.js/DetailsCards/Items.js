import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { Badge, Button, Card, CardBody } from "reactstrap";
import ModalPage from "../../../Modal/ModalPage";

const customStyles = {
  rows: {
    style: {},
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
export default function Items() {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const toggle = () => setModal(!modal);

  const rowDelete = () => {
    const newData = data.filter((item) => item.id !== selectedId);
    setData(newData);
    toggle();
  };

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      style: {
        justifyContent: "start",
      },
      minWidth: "340px",
      maxWidth: "340px",
    },
    {
      name: "Description",
      selector: (row) => row.description,
      style: {
        justifyContent: "start",
      },
      minWidth: "340px",
      maxWidth: "340px",
    },

    {
      name: "Price",
      selector: (row) => row.price,
      style: {
        justifyContent: "start",
      },
      minWidth: "340px",
      maxWidth: "340px",
    },
    {
      name: "Is Veryfy",
      selector: (row) => (
        <div className="verifybtn">
          <Button color="success">
            <Icon icon="icon-park-solid:correct" width="1rem" height="1rem" />
          </Button>
        </div>
      ),
      style: {
        justifyContent: "center",
      },
      minWidth: "100px",
      maxWidth: "100px",
    },
    {
      name: "Status",
      selector: (row) => (
        <div>
          <Badge color="success 2">Active</Badge>
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
          <div onClick={() => router.push("/customerdetailspage")}>
            <Button color="primary">
              <Icon icon="ic:outline-edit" height={15} width={15} />
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

  const [data, setData] = useState([
    {
      id: 1,
      title: "Chanaya Choli",
      description: "Chanaya Choli,",
      price: "5 £",
      isverify: "",
      status: "",
      action: "",
    },
    {
      id: 2,
      title: "Chanaya Choli",
      description: "Chanaya Choli",
      price: "8 £",
      isverify: "",
      status: "",
      action: "",
    },
    {
      id: 3,
      title: "Chanaya Choli",
      description: "Chanaya Choli",
      price: "7 £",
      isverify: "",
      status: "",
      action: "",
    },
  ]);
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

      <ModalPage rowDelete={rowDelete} modal={modal} toggle={toggle} />
    </>
  );
}
