export const getFavorites = () =>
  JSON.parse(localStorage.getItem('favorite_eps'))

export function markFavorite(id) {
  let favEps = getFavorites() || []
  console.log(favEps.includes(id))
  if (!favEps.includes(id)) {
    favEps.push(id)
    localStorage.setItem('favorite_eps', JSON.stringify(favEps))
  } else unmarkFavorite(id)
}

export function checkIfFavorite(id) {
  let favEps = getFavorites()
  return favEps && favEps.includes(id)
}

export function unmarkFavorite(id) {
  let favEps = getFavorites()
  let index = favEps.findIndex((item) => item === id)
  if (index >= 0)
    favEps = [...favEps.slice(0, index), ...favEps.slice(index + 1)]
  localStorage.setItem('favorite_eps', JSON.stringify(favEps))
}

export const getFinished = () =>
  JSON.parse(localStorage.getItem('finished_eps'))

export function markFinished(id) {
  let fnshEps = getFinished() || []
  console.log(fnshEps.includes(id))
  if (!fnshEps.includes(id)) {
    fnshEps.push(id)
    localStorage.setItem('finished_eps', JSON.stringify(fnshEps))
  } else unmarkFinished(id)
}

export function checkIfFinished(id) {
  let fnshEps = getFinished()
  return fnshEps && fnshEps.includes(id)
}

export function unmarkFinished(id) {
  let fnshEps = getFinished()
  let index = fnshEps.findIndex((item) => item === id)
  if (index >= 0)
    fnshEps = [...fnshEps.slice(0, index), ...fnshEps.slice(index + 1)]
  localStorage.setItem('finished_eps', JSON.stringify(fnshEps))
}
