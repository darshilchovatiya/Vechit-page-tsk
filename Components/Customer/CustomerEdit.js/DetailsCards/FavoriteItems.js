import DataTable from "react-data-table-component";
import { Card, CardBody } from "reactstrap";


export default function FavoriteItems() {
  const columns = [
 
  ];

  const data = [
   
  ];
  return (
    <>
      <Card>
        <CardBody>
          <DataTable
            className="dataTable"
            columns={columns}
            data={data}
          />
        </CardBody>
      </Card>
    </>
  );
}
