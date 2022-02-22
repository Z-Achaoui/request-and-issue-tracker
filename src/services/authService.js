export function authenticateUser(username, password) {
  return fetch("http://localhost:8080/login", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      email: username,
      password: password,
    }),
  }).then((response) => response.headers.get("Authorization"));
}

export function authorizeUser(username, jwt) {
  return fetch("http://localhost:8080/users/user", {
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
