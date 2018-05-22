import axios from 'axios'

const BASE_URL = process.env.API_URI

export {
  signupApi
}

function signupApi() {
  const url = `${BASE_URL}/users`
  return axios.get(url).then(response => response.data)
}