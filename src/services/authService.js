export async function loginUser(username, password) {
  const jwt = await fetch("http://localhost:8080/login", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      email: username,
      password: password,
    }),
  }).then((response) => response.headers.get("Authorization"));

  const user = await fetch("http://localhost:8080/users/user", {
    method: "post",
    headers: {
      "content-type": "application/json",
      Authorization: jwt,
    },
    body: JSON.stringify({
      email: username,
    }),
  }).then((response) => response.json());

  return [user, jwt];
}
