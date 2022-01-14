const requests = [
  {
    id: 1,
    subject: "software update",
    requester: "User",
    created: "01/01/2022",
    last_update: "10/01/2022",
    completed: true,
    completion_date: "10/01/2022",
  },
  {
    id: 2,
    subject: "laptop replacement",
    requester: "User",
    created: "22/12/2022",
    last_update: "01/01/2022",
    completed: false,
  },
  {
    id: 3,
    subject: "mouse and keyboard",
    requester: "User",
    created: "10/01/2022",
    last_update: "14/01/2022",
    completed: true,
    completion_date: "14/01/2022",
  },
  {
    id: 4,
    subject: "software installation",
    requester: "User",
    created: "12/10/2021",
    last_update: "05/01/2022",
    completed: false,
  },
  {
    id: 5,
    subject: "headphone",
    requester: "User",
    created: "20/07/2021",
    last_update: "27/07/2022",
    completed: true,
    completion_date: "27/07/2021",
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
