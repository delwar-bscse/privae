import { IDiscount } from "@/types/columnTypes";

export const dummyDiscountDatas: IDiscount[] = [
  {
    id: "00001",
    code: "ajFjbdf",
    type: "20%",
    appliesTo: "First Booking",
    minimumOrder: 100.00,
    usage: { used: 34, total: 100 },
    status: "Active",
    validUntil: "2026-01-09",
    createdBy: "Max Mustermann"
  },
  {
    id: "00002",
    code: "13231fen",
    type: "$5.00",
    appliesTo: "Invited Users",
    minimumOrder: 5.00,
    usage: { used: 12, total: 100 },
    status: "Deactivated",
    validUntil: "2026-01-09",
    createdBy: "Max Mustermann"
  },
  {
    id: "00003",
    code: "FirstOrder10",
    type: "$25.00",
    appliesTo: "All booking",
    minimumOrder: 93.15,
    usage: { used: 12, total: 100 },
    status: "Active",
    validUntil: "2026-01-09",
    createdBy: "Max Mustermann"
  },
  {
    id: "00004",
    code: "MfdenNV",
    type: "10%",
    appliesTo: "max@web.com",
    minimumOrder: 67.00,
    usage: { used: 12, total: 100 },
    status: "Active",
    validUntil: "2026-01-09",
    createdBy: "Max Mustermann"
  },
  {
    id: "00005",
    code: "Referral10",
    type: "3.25%",
    appliesTo: "All booking",
    minimumOrder: 93.15,
    usage: { used: 12, total: 100 },
    status: "Active",
    validUntil: "2026-01-09",
    createdBy: "Max Mustermann"
  }
];