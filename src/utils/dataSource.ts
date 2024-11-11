export type Order = {
  id: number;
  trackingId: string;
  Status: string;
  ApproxTime: string;
};

export const OrdersArray: Order[] = [
  {
    id: 1,
    trackingId: "NB145618X8S",
    Status: "In Transit",
    ApproxTime: "15 min",
  },
  {
    id: 2,
    trackingId: "NB135618X7S",
    Status: "Pending",
    ApproxTime: "15 min",
  },
  {
    id: 3,
    trackingId: "NB125618X6S",
    Status: "Delivered",
    ApproxTime: "15 min",
  },
];
