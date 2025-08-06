import { createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../Services/tmdbApi";

export const fetchGenresWithMovies = createAsyncThunk(
  "moviesGenre/fetchGenresWithMovies",
  async (_, thunkApi) => { 
    try {
      const [movieGenresRes, tvGenresRes] = await Promise.all([
        tmdbApi.get("/genre/movie/list"),
        tmdbApi.get("/genre/tv/list"),
      ]);

      const movieGenres = movieGenresRes.data.genres;
      const tvGenres = tvGenresRes.data.genres;

      const uniqueGenresMap = new Map();

      movieGenres.forEach((genre) => {
        uniqueGenresMap.set(genre.id, { ...genre, isMovie: true, isTV: false });
      });

      tvGenres.forEach((genre) => {
        if (uniqueGenresMap.has(genre.id)) {
          uniqueGenresMap.get(genre.id).isTV = true;
        } else {
          uniqueGenresMap.set(genre.id, {
            ...genre,
            isMovie: false,
            isTV: true,
          });
        }
      });

      const mergedGenres = Array.from(uniqueGenresMap.values());

      const genresWithMovies = await Promise.all(
        mergedGenres.map(async (genre) => {
          const promises = [];

          if (genre.isMovie) {
            promises.push(
              tmdbApi.get("/discover/movie", {
                params: { with_genres: genre.id, page: 1 },
              })
            );
          }

          if (genre.isTV) {
            promises.push(
              tmdbApi.get("/discover/tv", {
                params: { with_genres: genre.id, page: 1 },
              })
            );
          }

          const responses = await Promise.allSettled(promises);

          const moviesData = [];

          responses.forEach((res) => {
            if (res.status === "fulfilled") {
              const isMovieRes = res.value.config.url.includes("/movie");
              const items = res.value.data.results.map((item) => ({
                ...item,
                media_type: isMovieRes ? "movie" : "tv",
              }));
              moviesData.push(...items);
            }
          });

          return {
            id: genre.id,
            name: genre.name,
            moviesData,
          };
        })
      );

      return genresWithMovies;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message || "Fetch error");
    }
  }
);
