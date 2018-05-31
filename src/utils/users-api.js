import axios from 'axios'

const BASE_URL = process.env.API_URI

export {
  signupApi,
  signinApi
}

function signinApi (obj) {
  const url = `${BASE_URL}/signin`
  return axios.post(url, obj).then(response => response.data)
}

function signupApi () {
  const url = `${BASE_URL}/users`
  return axios.get(url).then(response => response.data)
}
