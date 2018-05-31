import axios from 'axios'

const BASE_URL = `${process.env.API_URI}/users`

export function login (obj) {
  const url = `${BASE_URL}`
  return axios.get(url).then(response => response)
}

export function logout (obj) {
  const url = `${BASE_URL}`
  return axios.post(url, obj).then(response => response)
}


