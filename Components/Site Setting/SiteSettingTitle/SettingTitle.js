import { useRouter } from "next/router";
import { Button } from "reactstrap";

export const SettingManu = [
  {
    id: 1,
    name: "Details",
    route: "/sitesetting",
  },
  {
    id: 2,
    name: "Email Template",
    route: "/sitesetting/emailtemplatepage",
  },
  {
    id: 3,
    name: "SMS Template",
    route: "/sitesetting/smstemplatepage",
  },
  {
    id: 4,
    name: "Pages",
    route: "/sitesetting/pages",
  },
  {
    id: 5,
    name: "Total Price Transactions",
    route: "/sitesetting/totalpricetransaction",
  },
];

export default function SettingTitle() {
  const router = useRouter();
  return (
    <>
      <div className="update-customer">
        <div className="row">
          <div className="col-xl-12">
            <div class="sc-fb9f1326-0 TnemY d-sm-flex align-items-center justify-content-between">
              <h6 class="sc-fb9f1326-1 izPFRb mb-sm-0">SITE SETTING</h6>
              <div class="sc-fb9f1326-2 jncgKT page-title-right">
                <ol class="breadcrumb m-0">
                  <li class="breadcrumb-item"></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="setting-manu">
          {SettingManu.map((c) => (
            <div
              key={c.id}
              className={`settingitems ${
                router.pathname === c.route ? "active" : ""
              }`}
              onClick={() => router.push(c.route)}
            >
              {c.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
