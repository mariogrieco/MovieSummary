const apiUrl = 'http://api.themoviedb.org/3';

const CONFIG = {
  apiUrl,
  endpoints: {
    movies: `${apiUrl}/movie/top_rated`,
    genre: `${apiUrl}/genre/movie/list`
  },
  reduxStoreKey: 123456,
  apiKey: 'a1ae624ccb0a7b33f45b521d1e2681b4'
}

module.exports = CONFIG
