const requests = [
  {
    id: "1",
    subject: "software update",
    requester: "Karim",
    date: "01/01/2022",
    completed: true,
  },
  {
    id: "2",
    subject: "laptop replacement",
    requester: "Yahya",
    date: "05/01/2022",
    completed: false,
  },
  {
    id: "3",
    subject: "mouse and keyboard",
    requester: "Taha",
    date: "10/01/2022",
    completed: true,
  },
  {
    id: "4",
    subject: "software installation",
    requester: "Zakaria",
    date: "12/10/2021",
    completed: false,
  },
  {
    id: "5",
    subject: "headphone",
    requester: "Karim",
    date: "20/07/2021",
    completed: true,
  },
];

export function getRequests() {
  return requests;
}

export function getRequest(id) {
  return requests.find((r) => r.id === id);
}

export function getPendingRequests() {
  return requests.filter((r) => r.completed === false);
}

export function getCompletedRequests() {
  return requests.filter((r) => r.completed === true);
}
