export async function getMessages(requestId, authorization) {
  const messages = await fetch(
    `http://localhost:8080/requests/${requestId}/messages`,
    {
      headers: {
        Authorization: authorization,
      },
    }
  ).then((response) => response.json());

  if (
    messages.hasOwnProperty("errorMessage") &&
    messages["errorMessage"].toUpperCase().includes("EXPIRED")
  ) {
    return "session expired";
  }

  return messages.sort((a, b) => b.id - a.id);
}

export async function addMessage(requestId, authorization, message, sender) {
  const messages = await fetch(
    `http://localhost:8080/requests/${requestId}/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      body: JSON.stringify({
        sender: sender,
        body: message,
      }),
    }
  ).then((response) => response.json());

  if (
    messages.hasOwnProperty("errorMessage") &&
    messages["errorMessage"].toUpperCase().includes("EXPIRED")
  ) {
    return "session expired";
  }

  return messages.sort((a, b) => b.id - a.id);
}
