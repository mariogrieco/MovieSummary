export default (profiles, genres_ids) => {
  return profiles.map(profile => {
    const nextProfile = Object.assign({}, profile, {
      genre_ids: profile.genre_ids.map(id => genres_ids.find( item => (
        item.id === id
      )))
    })
    return nextProfile
  })
}