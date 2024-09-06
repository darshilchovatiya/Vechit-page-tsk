import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import React from "react";

export default function Sidebar() {
  const router = useRouter();

  const SidebarArray = [
    {
      id: 1,
      name: "Dashboard",
      icon: "icon-park-outline:cooking-pot",
      route: "/",
    },
    {
      id: 2,
      name: "Customer",
      icon: "ri:customer-service-fill",
      route: "/customer",
    },
    {
      id: 3,
      name: "Site Setting",
      icon: "mingcute:user-setting-line",
      route: "/sitesetting",
    },
  ];

  return (
    <div className="sidebarmain">
      <div className="w-100">
        {SidebarArray.map((a) => (
          <div
            className={`items p-4 ${router.pathname === a.route ? "active" : ""}`}
            onClick={() => router.push(a.route)}
          >
            <div className="icon">
              <Icon icon={a.icon} />
            </div>
            <div className="text">{a.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
