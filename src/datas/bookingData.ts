export const dummyBookingDatas = [
  {
    id: "00001",
    status: "Pending",
    dateTime: "2026-01-11T12:30:00Z",
    chef: "Javier Gonzales",
    customer: "Alexander Kuhnowski",
    area: "10001",
    items: 1,
    estimatedTime: "1–1.5h",
    actualTime: null,
    rate: 42.45,
    updated: "2026-01-09T23:30:00Z"
  },
  {
    id: "00002",
    status: "Confirmed",
    dateTime: "2026-01-11T12:30:00Z",
    chef: "Max Mustermann",
    customer: "Ari Goldmann",
    area: "10002",
    items: 4,
    estimatedTime: "2–2.5h",
    actualTime: null,
    rate: 145.01,
    updated: "2026-01-09T23:30:00Z"
  },
  {
    id: "00003",
    status: "Completed",
    dateTime: "2026-01-11T12:30:00Z",
    chef: "Alexander Kuhnowski",
    customer: "Max Mustermann",
    area: "10023",
    items: 3,
    estimatedTime: "1.5–2h",
    actualTime: "2:05h",
    rate: 65.98,
    updated: "2026-01-09T23:30:00Z"
  },
  {
    id: "00004",
    status: "Cancelled",
    dateTime: "2026-01-11T12:30:00Z",
    chef: "Ari Goldmann",
    customer: "Javier Gonzales",
    area: "10010",
    items: 10,
    estimatedTime: "2–2.5h",
    actualTime: null,
    rate: 35.31,
    updated: "2026-01-09T23:30:00Z"
  },
  {
    id: "00005",
    status: "Confirmed",
    dateTime: "2026-01-11T12:30:00Z",
    chef: "Tim Pfannenkuchen",
    customer: "Jon Doe",
    area: "10020",
    items: 21,
    estimatedTime: "1–1.5h",
    actualTime: null,
    rate: 22.88,
    updated: "2026-01-09T23:30:00Z"
  }
];

export const dymmySingleBookingData = {
  status: "Confirmed",
  orderedAt: "2026-01-09T12:30:00Z",
  orderedFor: "2026-01-11T12:30:00Z",
  chef: "Javier Gonzales",
  customer: "Alexander Kuhnowski",
  address: {
    street: "34 Broadway",
    postalCode: "10005",
    city: "New York",
    country: "United States"
  },
  items: {
    count: 2,
    portions: 4
  },
  dishes: ["Chicken & Rice", "Curry with Rice"],
  estimatedTime: "2–2.25h",
  rate: 42.45,
  actualTime: null,
  updatedAt: "2026-01-10T12:00:00Z",
  notesToChef: "Please make the Curry extra spicy",
  adminNotes: ""
};
