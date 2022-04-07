export async function loginUser(username, password) {
  const response = await fetch("http://localhost:8080/login", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      email: username,
      password: password,
    }),
  });

  if (response.status >= 400) return "user not found";

  const jwt = response.headers.get("Authorization");

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
