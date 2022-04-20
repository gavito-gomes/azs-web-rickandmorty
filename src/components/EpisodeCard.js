import React, { useState } from 'react'
import {
  ChevronRightIcon,
  StarIcon,
  BadgeCheckIcon,
} from '@heroicons/react/solid'
import {
  markFavorite,
  markFinished,
  checkIfFavorite,
  checkIfFinished,
} from '../services/localstorage'

export default function EpisodeCard(props) {
  const { name, episode, air_date, characters } = props.episode
  const date = new Date(air_date)
  const [updateKey, setupdateKey] = useState(false)

  const favorite = checkIfFavorite(episode)
  const finished = checkIfFinished(episode)

  const make = (id) => {
    markFavorite(id)
    markFinished(id)
    setupdateKey((val) => !val)
  }

  return (
    <div
      className='bg-dark mb-3 py-3 px-4 pr-2 flex justify-between items-center'
      key={updateKey}
    >
      <div>
        <p className='text-lg mb-1'>
          <span className='mr-3'>
            {episode} - {name}{' '}
          </span>
        </p>
        <p className='text-sm'>Estreou em {date.toLocaleDateString()}</p>
        <p>{characters.length} Personagens </p>
      </div>
      <div className='flex items-center' onClick={() => make(episode)}>
        {favorite && <StarIcon fill='#FFDD63' width={20} height={20} />}
        {finished && <BadgeCheckIcon fill='#50D17C' width={20} height={20} />}
        <ChevronRightIcon fill='#fefefe' width={30} height={30} />
      </div>
    </div>
  )
}
