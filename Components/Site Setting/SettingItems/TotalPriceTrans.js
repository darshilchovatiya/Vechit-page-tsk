import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Card, CardBody } from "reactstrap";
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
      flexWrap: "wrap",
    },
  },
  cells: {
    style: {
      border: "1px solid #ededed",
      padding: "0",
      fontSize: "10px",
    },
  },
};

export default function TotalPriceTrans() {
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
      name: "Item Cost",
      selector: (row) => row.itmscost,
      minWidth: "120px",
      maxWidth: "120px",
    },
    {
      name: "Limit",
      selector: (row) => row.limit,
      minWidth: "120px",
      maxWidth: "120px",
    },
    {
      name: "Mango Pay Transaction Percentage",
      selector: (row) => row.transactionpercentage,
      minWidth: "160px",
      maxWidth: "160px",
    },
    {
      name: "Mango Pay Transaction Fee",
      selector: (row) => row.transactionfee,
      style: {
        justifyContent: "center",
      },
      minWidth: "140px",
      maxWidth: "140px",
    },
    {
      name: "Mango Pay Total Fees",
      selector: (row) => row.totalfees,
      minWidth: "140px",
      maxWidth: "140px",
    },
    {
      name: "Vechit Transaction Fee Percentage",
      selector: (row) => row.transactionfeepercentage,
      minWidth: "160px",
      maxWidth: "160px",
    },
    {
      name: "Vechit Transaction Fee",
      selector: (row) => row.vechittransactionfee,
      style: {
        justifyContent: "center",
      },
      minWidth: "150px",
      maxWidth: "150px",
    },
    {
      name: "Vechit Total Fees",
      selector: (row) => row.vechittotalfees,
      style: {
        justifyContent: "center",
      },
      minWidth: "150px",
      maxWidth: "150px",
    },
    {
      name: "Total Cost To Buyer Inc Fees",
      selector: (row) => row.costtobuyerincfees,
      style: {
        justifyContent: "center",
      },
      minWidth: "150px",
      maxWidth: "150px",
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
      minWidth: "120px",
      maxWidth: "120px",
    },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      itmscost: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost"
            id="item_cost"
            name="item_cost"
            disabled="true"
            type="number"
            className="form-control"
            value="1"
          />
        </div>
      ),
      limit: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost_limit"
            id="item_cost_limit"
            name="item_cost_limit"
            disabled="true"
            type="number"
            className="form-control"
            value="1.99"
            fdprocessedid="3qpokx"
          />
        </div>
      ),
      transactionpercentage: (
        <div className="sc-fb9f1326-27 iXqgxr userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_percentage"
            id="mangopay_transaction_fee_percentage"
            name="mangopay_transaction_fee_percentage"
            type="number"
            className="form-control"
          />
        </div>
      ),
      transactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_fee"
            id="mangoPay_transaction_fee"
            name="mangoPay_transaction_fee"
            type="number"
            className="form-control"
          />
        </div>
      ),
      totalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="mangopay_total_fees"
            id="mangopay_total_fees"
            name="mangopay_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.22"
          />
        </div>
      ),
      transactionfeepercentage: (
        <div className="sc-fb9f1326-27 iXqgzi userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="vechit_transaction_fee_percentage"
            id="vechit_transaction_fee_percentage"
            name="vechit_transaction_fee_percentage"
            type="number"
            className="form-control"
            //   value="30"
          />
        </div>
      ),
      vechittransactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder=""
            id="vechit_transaction_fee"
            name="vechit_transaction_fee"
            disabled="true"
            type="number"
            className="form-control"
            value="0.3"
          />
        </div>
      ),
      vechittotalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="vechit_total_fees"
            id="vechit_total_fees"
            name="vechit_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.52"
          />
        </div>
      ),
      costtobuyerincfees: (
        <div className="sc-fb9f1326-27 iXqgyF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            disabled="true"
            placeholder="total_cost_to_buyer_inc_fees"
            id="total_cost_to_buyer_inc_fees"
            name="total_cost_to_buyer_inc_fees"
            type="number"
            className="form-control"
            value="1.52"
          />
        </div>
      ),
    },
    {
      id: 2,
      itmscost: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost"
            id="item_cost"
            name="item_cost"
            disabled="true"
            type="number"
            className="form-control"
            value="2"
          />
        </div>
      ),
      limit: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost_limit"
            id="item_cost_limit"
            name="item_cost_limit"
            disabled="true"
            type="number"
            className="form-control"
            value="1.99"
            fdprocessedid="3qpokx"
          />
        </div>
      ),
      transactionpercentage: (
        <div className="sc-fb9f1326-27 iXqgxr userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_percentage"
            id="mangopay_transaction_fee_percentage"
            name="mangopay_transaction_fee_percentage"
            type="number"
            className="form-control"
          />
        </div>
      ),
      transactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_fee"
            id="mangoPay_transaction_fee"
            name="mangoPay_transaction_fee"
            type="number"
            className="form-control"
          />
        </div>
      ),
      totalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="mangopay_total_fees"
            id="mangopay_total_fees"
            name="mangopay_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.22"
          />
        </div>
      ),
      transactionfeepercentage: (
        <div className="sc-fb9f1326-27 iXqgzi userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="vechit_transaction_fee_percentage"
            id="vechit_transaction_fee_percentage"
            name="vechit_transaction_fee_percentage"
            type="number"
            className="form-control"
            //   value="30"
          />
        </div>
      ),
      vechittransactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder=""
            id="vechit_transaction_fee"
            name="vechit_transaction_fee"
            disabled="true"
            type="number"
            className="form-control"
            value="0.3"
          />
        </div>
      ),
      vechittotalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="vechit_total_fees"
            id="vechit_total_fees"
            name="vechit_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.52"
          />
        </div>
      ),
      costtobuyerincfees: (
        <div className="sc-fb9f1326-27 iXqgyF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            disabled="true"
            placeholder="total_cost_to_buyer_inc_fees"
            id="total_cost_to_buyer_inc_fees"
            name="total_cost_to_buyer_inc_fees"
            type="number"
            className="form-control"
            value="1.52"
          />
        </div>
      ),
    },
    {
      id: 3,
      itmscost: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost"
            id="item_cost"
            name="item_cost"
            disabled="true"
            type="number"
            className="form-control"
            value="3"
          />
        </div>
      ),
      limit: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost_limit"
            id="item_cost_limit"
            name="item_cost_limit"
            disabled="true"
            type="number"
            className="form-control"
            value="1.99"
            fdprocessedid="3qpokx"
          />
        </div>
      ),
      transactionpercentage: (
        <div className="sc-fb9f1326-27 iXqgxr userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_percentage"
            id="mangopay_transaction_fee_percentage"
            name="mangopay_transaction_fee_percentage"
            type="number"
            className="form-control"
          />
        </div>
      ),
      transactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_fee"
            id="mangoPay_transaction_fee"
            name="mangoPay_transaction_fee"
            type="number"
            className="form-control"
          />
        </div>
      ),
      totalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="mangopay_total_fees"
            id="mangopay_total_fees"
            name="mangopay_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.22"
          />
        </div>
      ),
      transactionfeepercentage: (
        <div className="sc-fb9f1326-27 iXqgzi userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="vechit_transaction_fee_percentage"
            id="vechit_transaction_fee_percentage"
            name="vechit_transaction_fee_percentage"
            type="number"
            className="form-control"
            //   value="30"
          />
        </div>
      ),
      vechittransactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder=""
            id="vechit_transaction_fee"
            name="vechit_transaction_fee"
            disabled="true"
            type="number"
            className="form-control"
            value="0.3"
          />
        </div>
      ),
      vechittotalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="vechit_total_fees"
            id="vechit_total_fees"
            name="vechit_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.52"
          />
        </div>
      ),
      costtobuyerincfees: (
        <div className="sc-fb9f1326-27 iXqgyF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            disabled="true"
            placeholder="total_cost_to_buyer_inc_fees"
            id="total_cost_to_buyer_inc_fees"
            name="total_cost_to_buyer_inc_fees"
            type="number"
            className="form-control"
            value="1.52"
          />
        </div>
      ),
    },
    {
      id: 4,
      itmscost: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost"
            id="item_cost"
            name="item_cost"
            disabled="true"
            type="number"
            className="form-control"
            value="4"
          />
        </div>
      ),
      limit: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost_limit"
            id="item_cost_limit"
            name="item_cost_limit"
            disabled="true"
            type="number"
            className="form-control"
            value="1.99"
            fdprocessedid="3qpokx"
          />
        </div>
      ),
      transactionpercentage: (
        <div className="sc-fb9f1326-27 iXqgxr userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_percentage"
            id="mangopay_transaction_fee_percentage"
            name="mangopay_transaction_fee_percentage"
            type="number"
            className="form-control"
          />
        </div>
      ),
      transactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_fee"
            id="mangoPay_transaction_fee"
            name="mangoPay_transaction_fee"
            type="number"
            className="form-control"
          />
        </div>
      ),
      totalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="mangopay_total_fees"
            id="mangopay_total_fees"
            name="mangopay_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.22"
          />
        </div>
      ),
      transactionfeepercentage: (
        <div className="sc-fb9f1326-27 iXqgzi userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="vechit_transaction_fee_percentage"
            id="vechit_transaction_fee_percentage"
            name="vechit_transaction_fee_percentage"
            type="number"
            className="form-control"
            //   value="30"
          />
        </div>
      ),
      vechittransactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder=""
            id="vechit_transaction_fee"
            name="vechit_transaction_fee"
            disabled="true"
            type="number"
            className="form-control"
            value="0.3"
          />
        </div>
      ),
      vechittotalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="vechit_total_fees"
            id="vechit_total_fees"
            name="vechit_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.52"
          />
        </div>
      ),
      costtobuyerincfees: (
        <div className="sc-fb9f1326-27 iXqgyF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            disabled="true"
            placeholder="total_cost_to_buyer_inc_fees"
            id="total_cost_to_buyer_inc_fees"
            name="total_cost_to_buyer_inc_fees"
            type="number"
            className="form-control"
            value="1.52"
          />
        </div>
      ),
    },
    {
      id: 5,
      itmscost: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost"
            id="item_cost"
            name="item_cost"
            disabled="true"
            type="number"
            className="form-control"
            value="5"
          />
        </div>
      ),
      limit: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost_limit"
            id="item_cost_limit"
            name="item_cost_limit"
            disabled="true"
            type="number"
            className="form-control"
            value="1.99"
            fdprocessedid="3qpokx"
          />
        </div>
      ),
      transactionpercentage: (
        <div className="sc-fb9f1326-27 iXqgxr userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_percentage"
            id="mangopay_transaction_fee_percentage"
            name="mangopay_transaction_fee_percentage"
            type="number"
            className="form-control"
          />
        </div>
      ),
      transactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_fee"
            id="mangoPay_transaction_fee"
            name="mangoPay_transaction_fee"
            type="number"
            className="form-control"
          />
        </div>
      ),
      totalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="mangopay_total_fees"
            id="mangopay_total_fees"
            name="mangopay_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.22"
          />
        </div>
      ),
      transactionfeepercentage: (
        <div className="sc-fb9f1326-27 iXqgzi userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="vechit_transaction_fee_percentage"
            id="vechit_transaction_fee_percentage"
            name="vechit_transaction_fee_percentage"
            type="number"
            className="form-control"
            //   value="30"
          />
        </div>
      ),
      vechittransactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder=""
            id="vechit_transaction_fee"
            name="vechit_transaction_fee"
            disabled="true"
            type="number"
            className="form-control"
            value="0.3"
          />
        </div>
      ),
      vechittotalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="vechit_total_fees"
            id="vechit_total_fees"
            name="vechit_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.52"
          />
        </div>
      ),
      costtobuyerincfees: (
        <div className="sc-fb9f1326-27 iXqgyF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            disabled="true"
            placeholder="total_cost_to_buyer_inc_fees"
            id="total_cost_to_buyer_inc_fees"
            name="total_cost_to_buyer_inc_fees"
            type="number"
            className="form-control"
            value="1.52"
          />
        </div>
      ),
    },
    {
      id: 6,
      itmscost: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost"
            id="item_cost"
            name="item_cost"
            disabled="true"
            type="number"
            className="form-control"
            value="6"
          />
        </div>
      ),
      limit: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost_limit"
            id="item_cost_limit"
            name="item_cost_limit"
            disabled="true"
            type="number"
            className="form-control"
            value="1.99"
            fdprocessedid="3qpokx"
          />
        </div>
      ),
      transactionpercentage: (
        <div className="sc-fb9f1326-27 iXqgxr userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_percentage"
            id="mangopay_transaction_fee_percentage"
            name="mangopay_transaction_fee_percentage"
            type="number"
            className="form-control"
          />
        </div>
      ),
      transactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_fee"
            id="mangoPay_transaction_fee"
            name="mangoPay_transaction_fee"
            type="number"
            className="form-control"
          />
        </div>
      ),
      totalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="mangopay_total_fees"
            id="mangopay_total_fees"
            name="mangopay_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.22"
          />
        </div>
      ),
      transactionfeepercentage: (
        <div className="sc-fb9f1326-27 iXqgzi userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="vechit_transaction_fee_percentage"
            id="vechit_transaction_fee_percentage"
            name="vechit_transaction_fee_percentage"
            type="number"
            className="form-control"
            //   value="30"
          />
        </div>
      ),
      vechittransactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder=""
            id="vechit_transaction_fee"
            name="vechit_transaction_fee"
            disabled="true"
            type="number"
            className="form-control"
            value="0.3"
          />
        </div>
      ),
      vechittotalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="vechit_total_fees"
            id="vechit_total_fees"
            name="vechit_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.52"
          />
        </div>
      ),
      costtobuyerincfees: (
        <div className="sc-fb9f1326-27 iXqgyF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            disabled="true"
            placeholder="total_cost_to_buyer_inc_fees"
            id="total_cost_to_buyer_inc_fees"
            name="total_cost_to_buyer_inc_fees"
            type="number"
            className="form-control"
            value="1.52"
          />
        </div>
      ),
    },
    {
      id: 7,
      itmscost: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost"
            id="item_cost"
            name="item_cost"
            disabled="true"
            type="number"
            className="form-control"
            value="7"
          />
        </div>
      ),
      limit: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost_limit"
            id="item_cost_limit"
            name="item_cost_limit"
            disabled="true"
            type="number"
            className="form-control"
            value="1.99"
            fdprocessedid="3qpokx"
          />
        </div>
      ),
      transactionpercentage: (
        <div className="sc-fb9f1326-27 iXqgxr userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_percentage"
            id="mangopay_transaction_fee_percentage"
            name="mangopay_transaction_fee_percentage"
            type="number"
            className="form-control"
          />
        </div>
      ),
      transactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_fee"
            id="mangoPay_transaction_fee"
            name="mangoPay_transaction_fee"
            type="number"
            className="form-control"
          />
        </div>
      ),
      totalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="mangopay_total_fees"
            id="mangopay_total_fees"
            name="mangopay_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.22"
          />
        </div>
      ),
      transactionfeepercentage: (
        <div className="sc-fb9f1326-27 iXqgzi userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="vechit_transaction_fee_percentage"
            id="vechit_transaction_fee_percentage"
            name="vechit_transaction_fee_percentage"
            type="number"
            className="form-control"
            //   value="30"
          />
        </div>
      ),
      vechittransactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder=""
            id="vechit_transaction_fee"
            name="vechit_transaction_fee"
            disabled="true"
            type="number"
            className="form-control"
            value="0.3"
          />
        </div>
      ),
      vechittotalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="vechit_total_fees"
            id="vechit_total_fees"
            name="vechit_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.52"
          />
        </div>
      ),
      costtobuyerincfees: (
        <div className="sc-fb9f1326-27 iXqgyF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            disabled="true"
            placeholder="total_cost_to_buyer_inc_fees"
            id="total_cost_to_buyer_inc_fees"
            name="total_cost_to_buyer_inc_fees"
            type="number"
            className="form-control"
            value="1.52"
          />
        </div>
      ),
    },
    {
      id: 8,
      itmscost: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost"
            id="item_cost"
            name="item_cost"
            disabled="true"
            type="number"
            className="form-control"
            value="8"
          />
        </div>
      ),
      limit: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost_limit"
            id="item_cost_limit"
            name="item_cost_limit"
            disabled="true"
            type="number"
            className="form-control"
            value="1.99"
            fdprocessedid="3qpokx"
          />
        </div>
      ),
      transactionpercentage: (
        <div className="sc-fb9f1326-27 iXqgxr userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_percentage"
            id="mangopay_transaction_fee_percentage"
            name="mangopay_transaction_fee_percentage"
            type="number"
            className="form-control"
          />
        </div>
      ),
      transactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_fee"
            id="mangoPay_transaction_fee"
            name="mangoPay_transaction_fee"
            type="number"
            className="form-control"
          />
        </div>
      ),
      totalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="mangopay_total_fees"
            id="mangopay_total_fees"
            name="mangopay_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.22"
          />
        </div>
      ),
      transactionfeepercentage: (
        <div className="sc-fb9f1326-27 iXqgzi userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="vechit_transaction_fee_percentage"
            id="vechit_transaction_fee_percentage"
            name="vechit_transaction_fee_percentage"
            type="number"
            className="form-control"
            //   value="30"
          />
        </div>
      ),
      vechittransactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder=""
            id="vechit_transaction_fee"
            name="vechit_transaction_fee"
            disabled="true"
            type="number"
            className="form-control"
            value="0.3"
          />
        </div>
      ),
      vechittotalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="vechit_total_fees"
            id="vechit_total_fees"
            name="vechit_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.52"
          />
        </div>
      ),
      costtobuyerincfees: (
        <div className="sc-fb9f1326-27 iXqgyF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            disabled="true"
            placeholder="total_cost_to_buyer_inc_fees"
            id="total_cost_to_buyer_inc_fees"
            name="total_cost_to_buyer_inc_fees"
            type="number"
            className="form-control"
            value="1.52"
          />
        </div>
      ),
    },
    {
      id: 9,
      itmscost: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost"
            id="item_cost"
            name="item_cost"
            disabled="true"
            type="number"
            className="form-control"
            value="9"
          />
        </div>
      ),
      limit: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost_limit"
            id="item_cost_limit"
            name="item_cost_limit"
            disabled="true"
            type="number"
            className="form-control"
            value="1.99"
            fdprocessedid="3qpokx"
          />
        </div>
      ),
      transactionpercentage: (
        <div className="sc-fb9f1326-27 iXqgxr userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_percentage"
            id="mangopay_transaction_fee_percentage"
            name="mangopay_transaction_fee_percentage"
            type="number"
            className="form-control"
          />
        </div>
      ),
      transactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_fee"
            id="mangoPay_transaction_fee"
            name="mangoPay_transaction_fee"
            type="number"
            className="form-control"
          />
        </div>
      ),
      totalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="mangopay_total_fees"
            id="mangopay_total_fees"
            name="mangopay_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.22"
          />
        </div>
      ),
      transactionfeepercentage: (
        <div className="sc-fb9f1326-27 iXqgzi userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="vechit_transaction_fee_percentage"
            id="vechit_transaction_fee_percentage"
            name="vechit_transaction_fee_percentage"
            type="number"
            className="form-control"
            //   value="30"
          />
        </div>
      ),
      vechittransactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder=""
            id="vechit_transaction_fee"
            name="vechit_transaction_fee"
            disabled="true"
            type="number"
            className="form-control"
            value="0.3"
          />
        </div>
      ),
      vechittotalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="vechit_total_fees"
            id="vechit_total_fees"
            name="vechit_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.52"
          />
        </div>
      ),
      costtobuyerincfees: (
        <div className="sc-fb9f1326-27 iXqgyF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            disabled="true"
            placeholder="total_cost_to_buyer_inc_fees"
            id="total_cost_to_buyer_inc_fees"
            name="total_cost_to_buyer_inc_fees"
            type="number"
            className="form-control"
            value="1.52"
          />
        </div>
      ),
    },
    {
      id: 10,
      itmscost: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost"
            id="item_cost"
            name="item_cost"
            disabled="true"
            type="number"
            className="form-control"
            value="10"
          />
        </div>
      ),
      limit: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost_limit"
            id="item_cost_limit"
            name="item_cost_limit"
            disabled="true"
            type="number"
            className="form-control"
            value="1.99"
            fdprocessedid="3qpokx"
          />
        </div>
      ),
      transactionpercentage: (
        <div className="sc-fb9f1326-27 iXqgxr userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_percentage"
            id="mangopay_transaction_fee_percentage"
            name="mangopay_transaction_fee_percentage"
            type="number"
            className="form-control"
          />
        </div>
      ),
      transactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_fee"
            id="mangoPay_transaction_fee"
            name="mangoPay_transaction_fee"
            type="number"
            className="form-control"
          />
        </div>
      ),
      totalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="mangopay_total_fees"
            id="mangopay_total_fees"
            name="mangopay_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.22"
          />
        </div>
      ),
      transactionfeepercentage: (
        <div className="sc-fb9f1326-27 iXqgzi userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="vechit_transaction_fee_percentage"
            id="vechit_transaction_fee_percentage"
            name="vechit_transaction_fee_percentage"
            type="number"
            className="form-control"
            //   value="30"
          />
        </div>
      ),
      vechittransactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder=""
            id="vechit_transaction_fee"
            name="vechit_transaction_fee"
            disabled="true"
            type="number"
            className="form-control"
            value="0.3"
          />
        </div>
      ),
      vechittotalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="vechit_total_fees"
            id="vechit_total_fees"
            name="vechit_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.52"
          />
        </div>
      ),
      costtobuyerincfees: (
        <div className="sc-fb9f1326-27 iXqgyF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            disabled="true"
            placeholder="total_cost_to_buyer_inc_fees"
            id="total_cost_to_buyer_inc_fees"
            name="total_cost_to_buyer_inc_fees"
            type="number"
            className="form-control"
            value="1.52"
          />
        </div>
      ),
    },
    {
      id: 11,
      itmscost: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost"
            id="item_cost"
            name="item_cost"
            disabled="true"
            type="number"
            className="form-control"
            value="11"
          />
        </div>
      ),
      limit: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost_limit"
            id="item_cost_limit"
            name="item_cost_limit"
            disabled="true"
            type="number"
            className="form-control"
            value="1.99"
            fdprocessedid="3qpokx"
          />
        </div>
      ),
      transactionpercentage: (
        <div className="sc-fb9f1326-27 iXqgxr userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_percentage"
            id="mangopay_transaction_fee_percentage"
            name="mangopay_transaction_fee_percentage"
            type="number"
            className="form-control"
          />
        </div>
      ),
      transactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_fee"
            id="mangoPay_transaction_fee"
            name="mangoPay_transaction_fee"
            type="number"
            className="form-control"
          />
        </div>
      ),
      totalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="mangopay_total_fees"
            id="mangopay_total_fees"
            name="mangopay_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.22"
          />
        </div>
      ),
      transactionfeepercentage: (
        <div className="sc-fb9f1326-27 iXqgzi userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="vechit_transaction_fee_percentage"
            id="vechit_transaction_fee_percentage"
            name="vechit_transaction_fee_percentage"
            type="number"
            className="form-control"
            //   value="30"
          />
        </div>
      ),
      vechittransactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder=""
            id="vechit_transaction_fee"
            name="vechit_transaction_fee"
            disabled="true"
            type="number"
            className="form-control"
            value="0.3"
          />
        </div>
      ),
      vechittotalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="vechit_total_fees"
            id="vechit_total_fees"
            name="vechit_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.52"
          />
        </div>
      ),
      costtobuyerincfees: (
        <div className="sc-fb9f1326-27 iXqgyF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            disabled="true"
            placeholder="total_cost_to_buyer_inc_fees"
            id="total_cost_to_buyer_inc_fees"
            name="total_cost_to_buyer_inc_fees"
            type="number"
            className="form-control"
            value="1.52"
          />
        </div>
      ),
    },
    {
      id: 12,
      itmscost: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost"
            id="item_cost"
            name="item_cost"
            disabled="true"
            type="number"
            className="form-control"
            value="12"
          />
        </div>
      ),
      limit: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="item_cost_limit"
            id="item_cost_limit"
            name="item_cost_limit"
            disabled="true"
            type="number"
            className="form-control"
            value="1.99"
            fdprocessedid="3qpokx"
          />
        </div>
      ),
      transactionpercentage: (
        <div className="sc-fb9f1326-27 iXqgxr userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_percentage"
            id="mangopay_transaction_fee_percentage"
            name="mangopay_transaction_fee_percentage"
            type="number"
            className="form-control"
          />
        </div>
      ),
      transactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_fee"
            id="mangoPay_transaction_fee"
            name="mangoPay_transaction_fee"
            type="number"
            className="form-control"
          />
        </div>
      ),
      totalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="mangopay_total_fees"
            id="mangopay_total_fees"
            name="mangopay_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.22"
          />
        </div>
      ),
      transactionfeepercentage: (
        <div className="sc-fb9f1326-27 iXqgzi userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="vechit_transaction_fee_percentage"
            id="vechit_transaction_fee_percentage"
            name="vechit_transaction_fee_percentage"
            type="number"
            className="form-control"
            //   value="30"
          />
        </div>
      ),
      vechittransactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder=""
            id="vechit_transaction_fee"
            name="vechit_transaction_fee"
            disabled="true"
            type="number"
            className="form-control"
            value="0.3"
          />
        </div>
      ),
      vechittotalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="vechit_total_fees"
            id="vechit_total_fees"
            name="vechit_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.52"
          />
        </div>
      ),
      costtobuyerincfees: (
        <div className="sc-fb9f1326-27 iXqgyF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            disabled="true"
            placeholder="total_cost_to_buyer_inc_fees"
            id="total_cost_to_buyer_inc_fees"
            name="total_cost_to_buyer_inc_fees"
            type="number"
            className="form-control"
            value="1.52"
          />
        </div>
      ),
    },
    {
      id: 13,
      itmscost: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder=""
            id="item_cost"
            name="item_cost"
            disabled="true"
            type="number"
            className="form-control"
            value="13"
          />
        </div>
      ),
      limit: (
        <div className="sc-fb9f1326-27 dKfzgF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder=""
            id="item_cost_limit"
            name="item_cost_limit"
            disabled="true"
            type="number"
            className="form-control"
            value="1.99"
            fdprocessedid="3qpokx"
          />
        </div>
      ),
      transactionpercentage: (
        <div className="sc-fb9f1326-27 iXqgxr userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_percentage"
            id="mangopay_transaction_fee_percentage"
            name="mangopay_transaction_fee_percentage"
            type="number"
            className="form-control"
          />
        </div>
      ),
      transactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="transation_fee"
            id="mangoPay_transaction_fee"
            name="mangoPay_transaction_fee"
            type="number"
            className="form-control"
          />
        </div>
      ),
      totalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="mangopay_total_fees"
            id="mangopay_total_fees"
            name="mangopay_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.22"
          />
        </div>
      ),
      transactionfeepercentage: (
        <div className="sc-fb9f1326-27 iXqgzi userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder="vechit_transaction_fee_percentage"
            id="vechit_transaction_fee_percentage"
            name="vechit_transaction_fee_percentage"
            type="number"
            className="form-control"
            //   value="30"
          />
        </div>
      ),
      vechittransactionfee: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            required=""
            placeholder=""
            id="vechit_transaction_fee"
            name="vechit_transaction_fee"
            disabled="true"
            type="number"
            className="form-control"
            value="0.3"
          />
        </div>
      ),
      vechittotalfees: (
        <div className="sc-fb9f1326-27 iXqgAw userAvtar px-1">
          <input
            min="0"
            step="0.01"
            placeholder="vechit_total_fees"
            id="vechit_total_fees"
            name="vechit_total_fees"
            disabled="true"
            type="number"
            className="form-control"
            value="0.52"
          />
        </div>
      ),
      costtobuyerincfees: (
        <div className="sc-fb9f1326-27 iXqgyF userAvtar px-1">
          <input
            min="0"
            step="0.01"
            disabled="true"
            placeholder="total_cost_to_buyer_inc_fees"
            id="total_cost_to_buyer_inc_fees"
            name="total_cost_to_buyer_inc_fees"
            type="number"
            className="form-control"
            value="1.52"
          />
        </div>
      ),
    },
  ]);

  return (
    <>
      <h6>Total Price Transaction</h6>
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
