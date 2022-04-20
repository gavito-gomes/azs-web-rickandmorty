import React, { useState, useEffect, useCallback } from 'react'

import SearchBar from '../components/SearchBar'
import { getEpisodes } from '../services/api'
import EpisodesList from '../components/EpisodesList'
import { groupBySeason } from '../services/episodes'

export default function Home() {
  const [episodes, setepisodes] = useState()
  const [nameFilter, setnameFilter] = useState('')
  const [nextPage, setnextPage] = useState(1)
  const [loading, setloading] = useState(true)
  const [mounted, setmounted] = useState(false)

  const searchEpisodesByName = (value) => {
    setnameFilter(value)
    getNextEpisodes()
  }

  const getNextEpisodes = useCallback(async () => {
    setloading(true)
    try {
      if (nextPage) {
        let data = await getEpisodes(nameFilter, nextPage)
        console.log('data', data)
        setepisodes(groupBySeason(episodes, data.episodes.results))
        setnextPage(data.episodes.info.next)
      }
    } catch (err) {
      console.log(err)
    }
    setloading(false)
  }, [episodes, nameFilter, nextPage])

  useEffect(() => {
    if (!mounted) {
      getNextEpisodes()
      setmounted(true)
    }
  }, [getNextEpisodes, mounted])

  return (
    <div className='px-3'>
      <SearchBar onSubmit={searchEpisodesByName} />

      <EpisodesList
        episodes={episodes}
        loading={loading}
        nextPage={nextPage}
        getNextEpisodes={getNextEpisodes}
      />
    </div>
  )
}
