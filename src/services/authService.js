export async function loginUser(username, password) {
  const jwt = await authenticateUser(username, password);
  const user = await authorizeUser(username, jwt);
  return [user, jwt];
}

async function authenticateUser(username, password) {
  return await fetch("http://localhost:8080/login", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      email: username,
      password: password,
    }),
  }).then((response) => response.headers.get("Authorization"));
}

async function authorizeUser(username, jwt) {
  return await fetch("http://localhost:8080/users/user", {
    method: "post",
    headers: {
      "content-type": "application/json",
      Authorization: jwt,
    },
    body: JSON.stringify({
      email: username,
    }),
  }).then((response) => response.json());
}
