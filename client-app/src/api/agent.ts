import axios, { AxiosResponse } from 'axios';
import {useHistory} from 'react-router-dom'
import { Note, NoteForm } from '../models/note';

axios.defaults.baseURL = process.env.REACT_APP_API_BASEURL;

axios.interceptors.response.use(undefined, error => {
  const {status} = error.response;
  let history = useHistory()
  if (status === 404) {
    history.push("/")
  }
})

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
}

const Notes = {
  list: () => requests.get('/notes/list'),
  create: (note: NoteForm) => requests.post("/notes/create", {note}),
  update: (note: Note) => requests.put(`/notes/update/${note._id}`, {note}),
  delete: (id: string) => requests.delete(`/notes/delete/${id}`),
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Notes,
}