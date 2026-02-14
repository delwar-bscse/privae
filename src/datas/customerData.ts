import { ICustomer } from "@/types/columnTypes";

export const dummyCustomerDatas: ICustomer[] = [
  {
    id: "00001",
    name: "Ari Goldmann",
    email: "ari.goldmann@gmail.com",
    phone: "+1 234 567 890",
    area: "10005",
    bookings: 4,
    rating: { score: 4.5, reviews: 182 },
    lastBooking: "2026-01-09T23:30:00Z"
  },
  {
    id: "00002",
    name: "Tim Pfannenkuchen",
    email: "tim@pfannenkuchen.com",
    phone: "+1 234 567 890",
    area: "10020",
    bookings: 1,
    rating: { score: 4.7, reviews: 42 },
    lastBooking: "2026-01-09T23:30:00Z"
  },
  {
    id: "00003",
    name: "Caroline Freitag",
    email: "carolinefreitag.outlook.com",
    phone: "+1 234 567 890",
    area: "10023",
    bookings: 12,
    rating: { score: 4.5, reviews: 402 },
    lastBooking: "2026-01-09T23:30:00Z"
  },
  {
    id: "00004",
    name: "Javier Gonzales",
    email: "j.gonzales@googlemail.com",
    phone: "+1 234 567 890",
    area: "10007",
    bookings: 3,
    rating: { score: 4.2, reviews: 482 },
    lastBooking: "2026-01-09T23:30:00Z"
  },
];