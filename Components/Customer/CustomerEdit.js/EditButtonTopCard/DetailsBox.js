import { useRouter } from "next/router";
import { Button } from "reactstrap";

export const BoxArray = [
  {
    id: 1,
    name: "Customer Details",
    route: "/customer/CustomerDetailsPage",
  },
  {
    id: 2,
    name: "Address",
    route: "/customer/addresspage",
  },
  {
    id: 3,
    name: "Items",
    route: "/customer/itemspage",
  },
  {
    id: 4,
    name: "Music Player",
    route: "/customer/musicplayerpage",
  },
  {
    id: 5,
    name: "Favorite Items",
    route: "/customer/favoriteitemspage",
  },
  {
    id: 6,
    name: "Blocked Members",
    route: "/customer/blockmemberpage",
  },
  {
    id: 7,
    name: "Chats",
    route: "/customer/chatspage",
  },
  {
    id: 8,
    name: "Following",
    route: "/customer/followingpage",
  },
];

export default function DetailsBox() {
  const router = useRouter();

  return (
    <>
      <div className="update-customer">
        <div className="row">
          <div className="col-xl-12">
            <div class="sc-fb9f1326-0 TnemY d-sm-flex align-items-center justify-content-between">
              <h6 class="sc-fb9f1326-1 izPFRb mb-sm-0">UPDATE CUSTOMER</h6>
              <div class="sc-fb9f1326-2 jncgKT page-title-right">
                <ol class="breadcrumb m-0">
                  <li class="breadcrumb-item"></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="update">
            <div className="col">
              <h5 class="mb-3">Update Customer</h5>
            </div>
            <div className="end-btn">
              <div onClick={() => router.push("/customer")}>
                <Button color="dark 2">Back</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="boxes">
          {BoxArray.map((b) => (
            <div
              className={`details ${
                router.pathname === b.route ? "active" : ""
              }`}
              onClick={() => router.push(b.route)}
            >
              {b.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
