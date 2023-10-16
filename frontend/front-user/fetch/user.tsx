import { User } from "../types/User";
export async function getUser() {
  fetch("http://localhost:1337/api/clients", {
    method: "GET",
    // mode: "no-cors",
  })
    .then((res) => res.json())
    .then((user) => {
      console.log("res: ", user.data);
      return user.data;
    })
    .catch((err) => console.log("Error: ", err));
}
