import React, { useState } from 'react'
import EpisodeCard from './EpisodeCard'
import Loading from './Loading'
import SelectFilter from './SelectFilter'

export default function EpisodesList(props) {
  const {
    episodes,
    loading,
    nextPage,
    feedbackMessage,
    getNextEpisodes = () => {},
  } = props

  const [filter, setfilter] = useState(0)

  return (
    <section>
      <SelectFilter value={filter} onChange={setfilter} />
      <ul className='bg-panelBG  overflow-y-scroll px-4 pt-4 lg:overflow-y-visible'>
        {episodes &&
          Object.keys(episodes).map((season) => {
            return (
              <li key={season}>
                <p className='my-4 text-xl font-semibold'>
                  Temporada {season.slice(1)}
                </p>
                <ul className='flex flex-wrap gap-3'>
                  {episodes[season].map((item) => {
                    return filter === 0 ||
                      (filter === 1 && item.favorite) ||
                      (filter === 2 && item.finished) ? (
                      <li className='lg:w-[49%]'>
                        <EpisodeCard key={item.episode} episode={item} />
                      </li>
                    ) : null
                  })}
                </ul>
              </li>
            )
          })}
        <li
          className={`${
            !episodes && 'h-full'
          } flex justify-center items-center p-4 mb-6`}
        >
          {loading ? (
            <Loading />
          ) : nextPage && !feedbackMessage ? (
            <button onClick={getNextEpisodes} className='bg-primary p-3'>
              Buscar mais episódios
            </button>
          ) : (
            feedbackMessage
          )}
        </li>
      </ul>
    </section>
  )
}
