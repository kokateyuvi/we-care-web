import { httpAxios } from "@/libs/httpHelper";

export async function addUser(formData) {
  const result = httpAxios
    .post("api/signup", formData)
    .then((response) => response.data);
  return result;
}
export async function loginUser(formData) {
  const result = httpAxios
    .post("api/login", formData)
    .then((response) => response.data);
  return result;
}

export async function getUser(email){
  const result = httpAxios.post("api/getuser",{email}).then((response)=>response.data);
  return result;
}
