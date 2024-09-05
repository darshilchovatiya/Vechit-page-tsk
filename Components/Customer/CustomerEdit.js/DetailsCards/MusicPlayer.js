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
export default function MusicPlayer() {
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
      name: "Photo",
      selector: (row) => (
        <div className="musicimg">
          {" "}
          <img src="/music.png"></img>
        </div>
      ),
      style: {
        justifyContent: "start",
      },
      minWidth: "120px",
      maxWidth: "120px",
    },
    {
      name: "Song Name",
      selector: (row) => row.songname,
      style: {
        justifyContent: "start",
      },
      minWidth: "330px",
      maxWidth: "330px",
    },

    {
      name: "Author Name",
      selector: (row) => row.authorname,
      style: {
        justifyContent: "start",
      },
      minWidth: "330px",
      maxWidth: "330px",
    },
    {
      name: "Duration",
      selector: (row) => row.duration,
      style: {
        justifyContent: "start",
      },
      minWidth: "320px",
      maxWidth: "320px",
    },
    {
      name: "Music Play",
      selector: (row) => (
        <div>
          <Button color="info">Play</Button>
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
      minWidth: "80px",
      maxWidth: "80px",
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
      photo: "",
      songname: "Aesthetics",
      authorname: "Oleg Fedak",
      duration: "2.06",
      musicplay: "",
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
            pointerOnHover
          />
        </CardBody>
      </Card>

      <ModalPage rowDelete={rowDelete} modal={modal} toggle={toggle} />
    </>
  );
}
