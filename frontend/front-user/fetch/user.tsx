import { User } from "../types/User";
export async function getUser() {
  fetch("http://localhost:1337/api/clients", {
    method: "GET",
    // mode: "no-cors",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data: ", data.data);

      return data.data;
    })
    .catch((err) => console.log("Error: ", err));
}
