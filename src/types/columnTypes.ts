// import { StaticImageData } from "next/image"

export interface IBooking {
  id: string;          // e.g. "00001"
  status: string;      // restricted to known statuses
  dateTime: string;           // ISO 8601 format, e.g. "2026-01-11T12:30:00Z"
  chef: string;               // name of the chef
  customer: string;           // name of the customer
  area: string;               // area code, e.g. "10001"
  items: number;              // number of items
  estimatedTime: string;      // e.g. "1–1.5h"
  actualTime: string | null;  // actual cooking time, may be null
  rate: number;               // monetary rate, e.g. 42.45
  updated: string;            // ISO 8601 format, e.g. "2026-01-09T23:30:00Z"
}


// ============================================= //
export type TService = {
    id: string;
    name: string;
    icon: string;
    date: string;
  };

export type TReferral = {
  id: string
  referralId: string
  name: string
  email: string
  number: string
  code: string
  location: string
  status: "Active" | "Used"
}
export type TUser = {
  id: string
  name: string
  email: string
  number: string
  location: string
  isService?: boolean
  status: string
}

export type TSupport = {
  id: string
  name: string
  email: string
  number: string
  location: string
  status: "Solved" | "Pending"
}

export type TOrder = {
  id: string
  name: string
  providerName?: string
  serviceImg: string
  status: string
  price: number
}