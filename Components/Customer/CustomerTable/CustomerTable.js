import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Badge, Button, Card, CardBody } from "reactstrap";
import CustomerMainCard from "../CustmorCard/CustomerMainCard";
import AddModal from "../../Modal/AddModal";
import UpdateModal from "../../Modal/UpdateModal";
import ModalPage from "../../Modal/ModalPage";

const customStyles = {
  headCells: {
    style: {
      border: "1px solid #ededed",
      color: "gray",
      backgroundColor: "#f8f9fb",
      fontWeight: "700",
      justifyContent: "center",
    },
  },
  cells: {
    style: {
      justifyContent: "center",
      border: "1px solid #ededed",
    },
  },
};

export default function CustomerTable() {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const toggle = () => setModal(!modal);
  const [searchQuery, setSearchQuery] = useState("");

  const [data, setData] = useState([
    {
      id: 1,
      firstname: "Darshil",
      lastname: "Chovatiya",
      countrycode: "+44",
      phonenumber: "9662649473",
      email: "darshil@milantahriol.com",
      registrationdate: "14-08-2024 ",
      logindate: "28-08-2024  ",
    },
    {
      id: 2,
      firstname: "Meet",
      lastname: "Hint",
      countrycode: "+44",
      phonenumber: "8662649473",
      email: "meet@milantahriol.com",
      registrationdate: "14-08-2024 ",
      logindate: "28-08-2024  ",
    },
    {
      id: 3,
      firstname: "Heli",
      lastname: "Keyli",
      countrycode: "+44",
      phonenumber: "7658649473",
      email: "heli@milantahriol.com",
      registrationdate: "14-08-2024 ",
      logindate: "28-08-2024 ",
    },
    {
      id: 4,
      firstname: "Deny",
      lastname: "Liyer",
      countrycode: "+44",
      phonenumber: "6612649473",
      email: "deny@milantahriol.com",
      registrationdate: "14-08-2024 ",
      logindate: "28-08-2024 ",
    },
    {
      id: 5,
      firstname: "Jaily",
      lastname: "Kivhb",
      countrycode: "+44",
      phonenumber: "8669469473",
      email: "jaily@milantahriol.com",
      registrationdate: "14-08-2024",
      logindate: "28-08-2024 ",
    },
    {
      id: 6,
      firstname: "Jink",
      lastname: "Tya",
      countrycode: "+44",
      phonenumber: "5651649473",
      email: "jink@milantahriol.com",
      registrationdate: "14-08-2024",
      logindate: "28-08-2024",
    },
    {
      id: 7,
      firstname: "Hil",
      lastname: "Kess",
      countrycode: "+44",
      phonenumber: "6362649473",
      email: "hil@milantahriol.com",
      registrationdate: "14-08-2024 ",
      logindate: "28-08-2024",
    },
    {
      id: 8,
      firstname: "kalw",
      lastname: "fash",
      countrycode: "+44",
      phonenumber: "7162649473",
      email: "kalw@milantahriol.com",
      registrationdate: "14-08-2024",
      logindate: "28-08-2024",
    },
    {
      id: 9,
      firstname: "Gisy",
      lastname: "Ktiya",
      countrycode: "+44",
      phonenumber: "9662649473",
      email: "Gisy@milantahriol.com",
      registrationdate: "14-08-2024 ",
      logindate: "28-08-2024 ",
    },
    {
      id: 10,
      firstname: "Jhil",
      lastname: "Fail",
      countrycode: "+44",
      phonenumber: "6932649473",
      email: "jhil@milantahriol.com",
      registrationdate: "14-08-2024",
      logindate: "28-08-2024 ",
    },
  ]);

  const [allData] = useState(data);

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
      minWidth: "150px",
      maxWidth: "150px",
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
          <div>
            <Button
              color="secondary p-0"
              onClick={() => {
                setSelectedId(row.id);
                toggleAddModal();
              }}
            >
              <Icon icon="material-symbols:add" width="1rem" height="1rem" />
            </Button>
          </div>

          <Button
            color="primary p-0"
            onClick={() => {
              setSelectedId(row.id);
              toggleUpdateModal();
            }}
          >
            <Icon icon="ic:outline-edit" />
          </Button>
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
      minWidth: "170px",
      maxWidth: "170px",
    },
  ];

  // search data

  useEffect(() => {
    searchData(searchQuery);
  }, [searchQuery]);

  const searchData = (searchQuery) => {
    let filterData = data;
    if (searchQuery) {
      filterData = data.filter(
        (usr) =>
          usr.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
          usr.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
          usr.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          usr.phonenumber.includes(searchQuery)
      );
    } else {
      filterData = allData;
    }
    setData(filterData);
  };

  // add new data

  const [addModalOpen, setAddModalOpen] = useState(false);
  const toggleAddModal = () => setAddModalOpen(!addModalOpen);

  const [newCustomer, setNewCustomer] = useState({
    firstname: "",
    lastname: "",
    countrycode: "",
    phonenumber: "",
    email: "",
    registrationdate: "",
    logindate: "",
  });

  const handleAddCustomer = (e) => {
    e.preventDefault();
    const newCustomerData = { ...newCustomer, id: data.length + 1 };
    setData([...data, newCustomerData]);
    toggleAddModal();
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({
      ...newCustomer,
      [name]: value,
    });
  };

  // update data

  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const toggleUpdateModal = () => setUpdateModalOpen(!updateModalOpen);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    countrycode: "",
    phonenumber: "",
    email: "",
    registrationdate: "",
    logindate: "",
  });

  const handleUpdateCustomer = (e) => {
    e.preventDefault();
    const updatedData = data.map((item) =>
      item.id === selectedId ? { ...formData, id: selectedId } : item
    );
    setData(updatedData);
    toggleUpdateModal();
  };

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditButtonClick = (row) => {
    setSelectedId(row.id);
    setFormData(row);
    toggleUpdateModal();
  };

  // delete row

  const rowDelete = () => {
    const newData = data.filter((item) => item.id !== selectedId);
    setData(newData);
    toggle();
  };

  return (
    <>
      <CustomerMainCard
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

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

      <AddModal
        handleInputChange={handleInputChange}
        handleAddCustomer={handleAddCustomer}
        toggleAddModal={toggleAddModal}
        setNewCustomer={setNewCustomer}
        addModalOpen={addModalOpen}
      />
      <UpdateModal
        handleUpdateCustomer={handleUpdateCustomer}
        handleUpdateInputChange={handleUpdateInputChange}
        handleEditButtonClick={handleEditButtonClick}
        toggleUpdateModal={toggleUpdateModal}
        setNewCustomer={setNewCustomer}
        updateModalOpen={updateModalOpen}
      />
    </>
  );
}
