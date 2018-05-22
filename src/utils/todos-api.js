import axios from 'axios'

const BASE_URL = `${process.env.API_URI}/todos`

export {
  getTodo,
  createTodo,
  deleteTodo
}

function getTodo (obj) {
  const url = `${BASE_URL}`
  return axios.get(url).then(response => response)
}

function createTodo (obj) {
  const url = `${BASE_URL}`
  return axios.post(url, obj).then(response => response)
}

function deleteTodo (id) {
  const url = `${BASE_URL}/${id}`
  return axios.delete(url).then(response => response)
}
