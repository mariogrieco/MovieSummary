import fetch from 'isomorphic-fetch'

class Api {
  constructor () {}


}

let singleton = null

export default (() => {
  if (singleton) return singleton
  singleton = new Api()
  return singleton
})