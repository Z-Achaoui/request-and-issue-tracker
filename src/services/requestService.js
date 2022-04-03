export async function getAdminRequests(authorization) {
  const response = await fetch("http://localhost:8080/admin-requests", {
    headers: {
      Authorization: authorization,
    },
  }).then((response) => response.json());

  if (
    response.hasOwnProperty("errorMessage") &&
    response["errorMessage"].toUpperCase().includes("EXPIRED")
  ) {
    return "session expired";
  }
  const pendingRequests = await response.filter((r) => r.isCompleted === false);
  const completedRequests = await response.filter(
    (r) => r.isCompleted === true
  );
  return [pendingRequests, completedRequests];
}

export async function getUserRequests(userId, authorization) {
  const response = await fetch(
    `http://localhost:8080/user-requests/${userId}`,
    {
      headers: {
        Authorization: authorization,
      },
    }
  ).then((response) => response.json());

  if (
    response.hasOwnProperty("errorMessage") &&
    response["errorMessage"].toUpperCase().includes("EXPIRED")
  ) {
    return "session expired";
  }
  const pendingRequests = await response.filter((r) => r.isCompleted === false);
  const completedRequests = await response.filter(
    (r) => r.isCompleted === true
  );
  return [pendingRequests, completedRequests];
}

export async function addRequest(request, authorization) {
  const response = await fetch("http://localhost:8080/requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authorization,
    },
    body: JSON.stringify(request),
  }).then((response) => response.json());

  if (
    response.hasOwnProperty("errorMessage") &&
    response["errorMessage"].toUpperCase().includes("EXPIRED")
  ) {
    return "session expired";
  }
}

export async function getRequest(requestId, authorization) {
  const response = await fetch(`http://localhost:8080/requests/${requestId}`, {
    headers: {
      Authorization: authorization,
    },
  }).then((response) => response.json());

  if (
    response.hasOwnProperty("errorMessage") &&
    response["errorMessage"].toUpperCase().includes("EXPIRED")
  ) {
    return "session expired";
  }
  return response;
}

export async function closeRequest(requestId, authorization) {
  const response = await fetch(
    `http://localhost:8080/requests/close/${requestId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
    }
  ).then((response) => response.json());

  if (
    response.hasOwnProperty("errorMessage") &&
    response["errorMessage"].toUpperCase().includes("EXPIRED")
  ) {
    return "session expired";
  }
}

// export async function updateRequest(requestId, isCompleted, authorization) {
//   const response = await fetch(`http://localhost:8080/requests/${requestId}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: authorization,
//     },
//     body: JSON.stringify({
//       isCompleted: isCompleted,
//     }),
//   }).then((response) => response.json());

//   if (
//     response.hasOwnProperty("errorMessage") &&
//     response["errorMessage"].toUpperCase().includes("EXPIRED")
//   ) {
//     return "session expired";
//   }
//   return response;
// }
