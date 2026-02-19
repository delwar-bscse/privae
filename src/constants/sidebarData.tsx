import React from "react";

import { RiHomeLine } from "react-icons/ri";
import { PiCreditCardLight } from "react-icons/pi";
import { PiChefHatLight } from "react-icons/pi";
// import { PiChatTeardropText } from "react-icons/pi";
import { BiUser } from "react-icons/bi";
import { TbToolsKitchen2 } from "react-icons/tb";
import { PiReceipt } from "react-icons/pi";



export type TMenuItem = {
  icon: React.ReactNode;
  title: string;
  label: string;
};


export const sidebarData: TMenuItem[] = [
  {
    icon: <RiHomeLine />,
    title: "Dashboard",
    label: "/",
  },
  {
    icon: <PiReceipt />,
    title: "Bookings",
    label: "/bookings",
  },
  {
    icon: <TbToolsKitchen2 />,
    title: "Customers",
    label: "/customers",
  },
  {
    icon: <PiChefHatLight />,
    title: "Chefs",
    label: "/chefs",
  },
  {
    icon: <PiCreditCardLight />,
    title: "Payments & Discounts",
    label: "/payments-and-discounts",
  },
  // {
  //   icon: <PiChatTeardropText />,
  //   title: "Messaging",
  //   label: "/messaging",
  // },
  {
    icon: <BiUser />,
    title: "Admin",
    label: "/admin",
  }
];