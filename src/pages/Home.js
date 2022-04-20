import React, { useState, useEffect, useCallback } from 'react'

import SearchBar from '../components/SearchBar'
import { getEpisodes } from '../services/api'
import EpisodesList from '../components/EpisodesList'
import { groupBySeason } from '../services/episodes'

export default function Home() {
  const [episodes, setepisodes] = useState()
  const [nextPage, setnextPage] = useState(1)
  const [loading, setloading] = useState(true)
  const [mounted, setmounted] = useState(false)
  const [feedbackMessage, setfeedbackMessage] = useState('')

  const searchEpisodesByName = (value) => {
    let filter = value && `{ name: "${value}"}`
    setepisodes(null)
    getNextEpisodes(filter, 1)
  }

  const getNextEpisodes = useCallback(
    async (nameFilter = null, page = nextPage) => {
      setloading(true)
      try {
        if (page) {
          let data = await getEpisodes(nameFilter, page)
          setepisodes((episodes) =>
            groupBySeason(episodes, data.episodes.results)
          )
          setnextPage(data.episodes.info.next)
          setfeedbackMessage(null)
        }
      } catch (err) {
        if (err.response.data.episodes === null) {
          setfeedbackMessage('Nenhum episódio encontrado')
          setnextPage(1)
        } else
          setfeedbackMessage('Algum erro ocorreu. Tente novamente mais tarde.')
      }
      setloading(false)
    },
    [nextPage]
  )

  useEffect(() => {
    if (!mounted) {
      getNextEpisodes()
      setmounted(true)
    }
  }, [getNextEpisodes, mounted])

  return (
    <div className='px-3 pb-3'>
      <SearchBar onSubmit={searchEpisodesByName} />

      <EpisodesList
        episodes={episodes}
        loading={loading}
        nextPage={nextPage}
        feedbackMessage={feedbackMessage}
        getNextEpisodes={() => getNextEpisodes()}
      />
    </div>
  )
}
