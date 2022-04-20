import { request, gql } from 'graphql-request'

export const getEpisodes = (filter, page = 1) => {
  filter = filter ? `, filter: ${filter}` : ''

  const query = gql`
{
  episodes(page: ${page} ${filter}) {
    info {
      count
      pages
      next
      prev
    }
    results {
      id
      name
      episode
      air_date
      characters {name}
    }
  }
}
`

  return request('https://rickandmortyapi.com/graphql', query)
}

export const getEpisodeById = (id) => {
  const query = gql`
{
  episode(id: ${id}) {
    id
    name
    episode
    air_date
    characters {
      name
      species
      status
      image
    }
  }
}
`

  return request('https://rickandmortyapi.com/graphql', query)
}
