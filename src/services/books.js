import axios from "axios";

const booksAPI = axios.create({
  baseURL: 'http://localhost:8000/books'
})

function getBooks() {
  const res = booksAPI.get('/')
  return res.data
}

export {
  getBooks
}