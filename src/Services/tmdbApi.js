import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjdmYTNjZjcwY2RlMzg0NDQ0NjdiNGU0YWQ0YTgzMiIsIm5iZiI6MTczMzAyNzY1NC44MTUsInN1YiI6IjY3NGJlNzQ2Mzg3ODEyZTQwNzg1MzY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8u1dct420fNpTp8wmH9OfGK2hyhWLb7aCSflrMzCXcM";

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    Accept: "application/json",
  },
});

export default tmdbApi;
