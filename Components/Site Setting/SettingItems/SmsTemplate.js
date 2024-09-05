import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { Badge, Button, Card, CardBody } from "reactstrap";
import ModalPage from "../../Modal/ModalPage";

const customStyles = {
  rows: {
    style: {
      // minHeight: "55px",
    },
  },
  headCells: {
    style: {
      border: "1px solid #ededed",
      color: "gray",
      backgroundColor: "#f8f9fb",
      // fontWeight: "700",
    },
  },
  cells: {
    style: {
      border: "1px solid #f1f2f6",
      fontSize: "12px",
    },
  },
};
export default function SmsTemplate() {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [selectedId, setSelectedId] = useState(null);

  const rowDelete = () => {
    const newData = data.filter((item) => item.id !== selectedId);
    setData(newData);
    toggle();
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      minWidth: "200px",
      maxWidth: "200px",
    },
    {
      name: "Body",
      selector: (row) => row.body,
      minWidth: "1000px",
      maxWidth: "1000px",
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
      minWidth: "110px",
      maxWidth: "110px",
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="actionbtn">
          <div onClick={() => router.push("/customer/123")}>
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
      minWidth: "120px",
      maxWidth: "120px",
    },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      name: "New_Offer",
      body: "Hey! During the month of Thanksgiving, we want you to know how thankful we are for you! This Thanksgiving, enjoy 50% off up to $50. Use code ‘THANKFUL50’. T&C apply!",
    },
    {
      id: 2,
      name: "Welcome",
      body: "Welcome to Vechit",
    },
  ]);
  return (
    <>
      <div className="row">
        <div className="col">
          <h6 className="mb-3">SMS Template</h6>
        </div>
        <div className="add-email col">
          <Button color="dark 3">Add SMS Template</Button>
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
