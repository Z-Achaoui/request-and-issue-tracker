const requests = [
  {
    id: "1",
    subject: "software update",
    requester: "Karim",
    created: "01/01/2022",
    completed: true,
  },
  {
    id: "2",
    subject: "laptop replacement",
    requester: "Yahya",
    created: "05/01/2022",
    completed: false,
  },
  {
    id: "3",
    subject: "mouse and keyboard",
    requester: "Taha",
    created: "10/01/2022",
    completed: true,
  },
  {
    id: "4",
    subject: "software installation",
    requester: "Zakaria",
    created: "12/10/2021",
    completed: false,
  },
  {
    id: "5",
    subject: "headphone",
    requester: "Karim",
    created: "20/07/2021",
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
