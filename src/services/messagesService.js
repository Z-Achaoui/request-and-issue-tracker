export async function getMessages(requestId, authorization) {
  const messages = await fetch(
    `http://localhost:8080/requests/${requestId}/messages`,
    {
      headers: {
        Authorization: authorization,
      },
    }
  ).then((response) => response.json());
  return messages.sort((a, b) => b.id - a.id);
}
