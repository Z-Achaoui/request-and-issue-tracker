export function registerUser(firstName, lastName, email, password) {
  return fetch("http://localhost:8080/register", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }),
  }).then((response) => response.json());
}
