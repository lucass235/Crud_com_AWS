import { User } from "../types/User";
export async function getUser() {
  return fetch("http://localhost:3000/api/clients", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((user) => {
      console.log("res: ", user.data);
      return user.data;
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err; 
    });
}
