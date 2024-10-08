import axios from 'axios'
const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDQyOTZlZGQ4YWI4MTY4ZTg1NWU2MmQ5MGVkZWJmNSIsIm5iZiI6MTcyODM4MzU1OS44MjM4Miwic3ViIjoiNjcwNGYzYTk1NDU0Yjg2MjMzNjljYjQ3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.OluSg1VqYrFgy9gVBfm4Oh_7Bl4vSaw-rX9mXZFh9Wk'
      }
})

export default instance