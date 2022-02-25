export async function getAdminRequests(authorization) {
  const requests = await fetch("http://localhost:8080/admin-requests", {
    headers: {
      Authorization: authorization,
    },
  }).then((response) => response.json());
  const pendingRequests = await requests.filter((r) => r.isCompleted === false);
  const completedRequests = await requests.filter(
    (r) => r.isCompleted === true
  );
  return [pendingRequests, completedRequests];
}

export async function getUserRequests(userId, authorization) {
  const requests = await fetch(
    `http://localhost:8080/user-requests/${userId}`,
    {
      headers: {
        Authorization: authorization,
      },
    }
  ).then((response) => response.json());
  const pendingRequests = await requests.filter((r) => r.isCompleted === false);
  const completedRequests = await requests.filter(
    (r) => r.isCompleted === true
  );
  return [pendingRequests, completedRequests];
}

export async function addRequest(request, authorization) {
  await fetch("http://localhost:8080/requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authorization,
    },
    body: JSON.stringify(request),
  });
}

export async function getRequest(requestId, authorization) {
  const request = await fetch(`http://localhost:8080/requests/${requestId}`, {
    headers: {
      Authorization: authorization,
    },
  }).then((response) => response.json());
  return request;
}

export async function updateRequest(requestId, isCompleted, authorization) {
  const request = await fetch(
    `http://localhost:8080/requests/${requestId}/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      body: JSON.stringify({
        isCompleted: isCompleted,
      }),
    }
  ).then((response) => response.json());
  return request;
}
