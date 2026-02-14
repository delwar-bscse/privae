"use client"
import { usePathname } from 'next/navigation';

export enum SidebarRoute {
  DASHBOARD = "/",
  BOOKINGS = "/bookings",
  CUSTOMERS = "/customers",
  CHEFS = "/chefs",
  PAYMENTS_AND_DISCOUNTS = "/payments-and-discounts",
  MESSAGING = "/messaging",
  ADMIN = "/admin",
}


const DashboardTitle = () => {
  const pathname = usePathname();

  const getTitle = (pathname: string): string => {
    switch (pathname) {
      case SidebarRoute.DASHBOARD:
        return "Dashboard 🎯";
      case SidebarRoute.BOOKINGS:
        return "Bookings 🛎️";
      case SidebarRoute.CUSTOMERS:
        return "Customer 👤";
      case SidebarRoute.CHEFS:
        return "Chef 👨‍🍳";
      case SidebarRoute.PAYMENTS_AND_DISCOUNTS:
        return "Payments & Discounts 💰";
      case SidebarRoute.MESSAGING:
        return "Chats 💬";
      case SidebarRoute.ADMIN:
        return "Admin 🛠️";
      default:
        return "";
    }
  };


  // console.log("Pathname :", getTitle(pathname))

  return (
    <div className='px-2 py-1 text-2xl font-bold text-gray-800'>{getTitle(pathname)}</div>
  )
}

export default DashboardTitle