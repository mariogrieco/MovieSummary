import fetch from 'isomorphic-fetch'
import {
  apiKey,
  // apiUrl,
  endpoints
} from '../CONFIG.js'


class Api {
  // constructor () {}

  getMovies (page = 0) {
    return fetch(`${endpoints.movies}?api_key=${apiKey}&page=${page}`)
  }

  getGenres () {
    return fetch(`${endpoints.genre}?api_key=${apiKey}`)
  }

}

let singleton = null

export default (() => {
  if (singleton) return singleton
  singleton = new Api()
  return singleton
})()