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

export function getRequests() {
  //return userRequests;
}

export function getRequest(id) {
  //return userRequests.find((r) => r.id === id);
}
