import { Icon } from "@iconify/react";
import React from "react";
import { Progress } from "reactstrap";

export default function DashboardOrderCard() {
  return (
    <div className="card p-20">
      <div className="my-4  card-body">
        <div className="row ">
          <h5>ORDERS</h5>
          <div className="col-sm-4">
            <div className="ordercard card">
              <div className="card-body">
                <span className="carticon">
                  <Icon icon="bi:cart" />
                </span>
                <div className="sc-fb9f1326-95 faIsE">TODAYS ORDERS</div>
                <div className="sc-fb9f1326-96 boSfkV">0</div>
                <div className="sc-fb9f1326-97 fTzkJG">Total orders for today</div>
                <Progress className="my-3" />
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="ordercard card">
              <div className="card-body">
                <span className="carticon">
                  <Icon icon="lucide:book-audio" />
                </span>
                <div className="sc-fb9f1326-95 faIsE">ORDERS FOR THE MONTH</div>
                <div className="sc-fb9f1326-96 boSfkV">90</div>
                <div className="sc-fb9f1326-97 fTzkJG">
                  Total orders for last month
                </div>
                <Progress
                  animated
                  className="my-3"
                  color="info"
                  striped
                  value={90}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="ordercard card">
              <div className="card-body">
                <span className="carticon">
                  <Icon icon="lets-icons:order" />
                </span>
                <div className="sc-fb9f1326-95 faIsE">TOTAL ORDERS</div>
                <div className="sc-fb9f1326-96 boSfkV">382</div>
                <div className="sc-fb9f1326-97 fTzkJG">Total orders</div>
                <Progress
                  animated
                  className="my-3"
                  color="success"
                  striped
                  value={100}
                />
              </div>
            </div>
          </div>

          <h5>CUSTOMERS</h5>
          <div className="col-sm-4">
            <div className="ordercard card">
              <div className="card-body">
                <span className="carticon">
                  <Icon icon="fluent-emoji:headphone" />
                </span>
                <div className="sc-fb9f1326-95 faIsE">CUSTOMERS TODAY</div>
                <div className="sc-fb9f1326-96 boSfkV">0</div>
                <div className="sc-fb9f1326-97 fTzkJG">
                  Total customers for today
                </div>
                <Progress className="my-3" />
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="ordercard card">
              <div className="card-body">
                <span className="carticon">
                  <Icon icon="simple-line-icons:calender" />
                </span>
                <div className="sc-fb9f1326-95 faIsE">CUSTOMERS FOR THE MONTH</div>
                <div className="sc-fb9f1326-96 boSfkV">24</div>
                <div className="sc-fb9f1326-97 fTzkJG">
                  Total customers for last month
                </div>
                <Progress
                  animated
                  className="my-3"
                  color="info"
                  striped
                  value={20}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="ordercard card">
              <div className="card-body">
                <span className="carticon">
                  <Icon icon="fluent-mdl2:connect-contacts" />
                </span>
                <div className="sc-fb9f1326-95 faIsE">TOTAL CUSTOMERS</div>
                <div className="sc-fb9f1326-96 boSfkV">183</div>
                <div className="sc-fb9f1326-97 fTzkJG">Total customers</div>
                <Progress
                  animated
                  className="my-3"
                  color="success"
                  striped
                  value={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
