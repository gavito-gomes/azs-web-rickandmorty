import { checkIfFavorite, checkIfFinished } from './localstorage'

export const groupBySeason = (episodes, newEps) => {
  let groups = episodes || {}
  newEps.forEach((item) => {
    let key = item.episode.split('E')[0] //Get the season
    groups[key] = groups[key] || []
    let epNums = groups[key].map((item) => item.episode)
    if (!epNums.includes(item.episode)) {
      item.favorite = checkIfFavorite(item.episode)
      item.finished = checkIfFinished(item.episode)
      groups[key].push(item)
    }
  })
  return groups
}
