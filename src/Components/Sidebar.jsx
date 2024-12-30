import React from "react";
import {
  HomeIcon,
  UserCircleIcon,
  CogIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  MailIcon,
  BookOpenIcon,
  ChatIcon,
} from "@heroicons/react/outline";
import "../index.css"; // Import the external CSS file

function Sidebar({ isCollapsed }) {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <HomeIcon className="h-6 w-6 text-pink-400 stroke-1" />,
      link: "/dashboard",
    },
    {
      name: "Users",
      icon: <UserCircleIcon className="h-6 w-6 text-blue-400 stroke-1" />,
      link: "/users",
    },
    {
      name: "Analytics",
      icon: <ChartBarIcon className="h-6 w-6 text-green-400 stroke-1" />,
      link: "/analytics",
    },
    {
      name: "Settings",
      icon: <CogIcon className="h-6 w-6 text-purple-400 stroke-1" />,
      link: "/settings",
    },
    {
      name: "Orders",
      icon: <ShoppingCartIcon className="h-6 w-6 text-yellow-400 stroke-1" />,
      link: "/orders",
    },
    {
      name: "Messages",
      icon: <MailIcon className="h-6 w-6 text-orange-400 stroke-1" />,
      link: "/messages",
    },
    {
      name: "Library",
      icon: <BookOpenIcon className="h-6 w-6 text-teal-400 stroke-1" />,
      link: "/library",
    },
    {
      name: "Chat",
      icon: <ChatIcon className="h-6 w-6 text-red-400 stroke-1" />,
      link: "/chat",
    },
    {
      name: "Reports",
      icon: <ChartBarIcon className="h-6 w-6 text-green-400 stroke-1" />,
      link: "/reports",
    },
    {
      name: "Support",
      icon: <CogIcon className="h-6 w-6 text-purple-400 stroke-1" />,
      link: "/support",
    },
    {
      name: "Help Center",
      icon: <MailIcon className="h-6 w-6 text-orange-400 stroke-1" />,
      link: "/help",
    },
    // Add more items if needed
  ];

  return (
    <div
      className={`fixed top-4 left-4 bg-white shadow-lg rounded-3xl p-5 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
      style={{ zIndex: 1000, height: "calc(100vh - 2rem)" }} // Set height for the sidebar
    >
      {/* Logo Section */}
      <div className="mb-6">
        <img
          src="https://wallpapercave.com/wp/wp4587060.jpg"
          alt="Logo"
          className={`mx-auto ${
            isCollapsed ? "h-8 w-8" : "h-16 w-16"
          } rounded-full object-cover transition-all transform scale-110`} // Added fixed width and height
        />
      </div>

      {/* Scrollable Menu Items */}
      <div
        className={`overflow-y-auto h-[calc(100vh-10rem)] ${
          !isCollapsed ? "scrollbar-visible" : "scrollbar-none"
        }`}
      >
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index} className="group flex items-center w-full">
              <a
                href={item.link}
                className={`flex items-center space-x-3 text-gray-700 hover:bg-gray-100 w-full px-3 py-2 rounded-lg transition ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <span>{item.icon}</span>
                {!isCollapsed && (
                  <span className="whitespace-nowrap">{item.name}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
