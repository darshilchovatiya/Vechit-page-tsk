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

export default function SettingPages() {
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
      style: {
      },
      minWidth: "370px",
      maxWidth: "370px",
    },
    {
      name: "URL",
      selector: (row) => row.url,

      minWidth: "800px",
      maxWidth: "800px",
    },
    {
      name: "Status",
      selector: (row) => <Badge color="success 2">Active</Badge>,
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
      name: "hermes",
      url: "https://www.evri.com/track-a-parcel/",
      action: "",
    },
    {
      id: 2,
      name: "yodel_walleted",
      url: "https://www.yodel.co.uk/track/",
      action: "",
    },
    {
      id: 3,
      name: "the-vechit-story",
      url: "https://www.vechit.com/the-vechit-story/",
      action: "",
    },
    {
      id: 4,
      name: "app-feedback",
      url: "https://www.vechit.com/mobile-feedback/",
      action: "",
    },
    {
      id: 5,
      name: "playStore",
      url: "google.com",
      action: "",
    },
    {
      id: 6,
      name: "appStore",
      url: "google.com",
      action: "",
    },
    {
      id: 7,
      name: "bundle-policy",
      url: "https://www.vechit.com/bundle-policy/",
      action: "",
    },
    {
      id: 8,
      name: "kyc-info",
      url: "https://www.vechit.com/what-is-a-kyc-check",
      action: "",
    },
    {
      id: 9,
      name: "refund-policy",
      url: "https://www.vechit.com/mangopay-terms-and-conditions/",
      action: "",
    },
    {
      id: 10,
      name: "buyer-protection",
      url: "https://www.vechit.com/buyer-protection/",
      action: "",
    },
  ]);

  return (
    <>
      <div className="row">
        <div className="col">
          <h6 className="mb-3">Pages</h6>
        </div>
        <div className="add-email col">
          <Button color="dark 3">Add pages</Button>
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
