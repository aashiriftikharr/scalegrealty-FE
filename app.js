const baseUrl = "http://localhost:3000";
document
  .getElementById("createUser")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {console.log(data); alert(JSON.stringify(data))})
      .catch((error) => console.error("Error:", error));
  });

document.getElementById("getUser").addEventListener("submit", function (event) {
  event.preventDefault();
  const userId = document.getElementById("userId").value;

  fetch(`${baseUrl}/users/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert(JSON.stringify(data));
    })
    .catch((error) => console.error("Error:", error));
});

document
  .getElementById("updateUser")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const userId = document.getElementById("updateUserId").value;
    const name = document.getElementById("updateName").value;
    const email = document.getElementById("updateEmail").value;

    fetch(`${baseUrl}/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((response) => response.text())
      .then((data) => {console.log(data); alert(JSON.stringify(data))})
      .catch((error) => console.error("Error:", error));
  });

document
  .getElementById("deleteUser")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const userId = document.getElementById("deleteUserId").value;

    fetch(`${baseUrl}/users/${userId}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then((data) => {console.log(data); alert(JSON.stringify(data))})
      .catch((error) => console.error("Error:", error));
  });
