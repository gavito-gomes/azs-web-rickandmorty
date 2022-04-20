import React from 'react'
import {
  ChevronRightIcon,
  StarIcon,
  BadgeCheckIcon,
} from '@heroicons/react/solid'
import { checkIfFavorite, checkIfFinished } from '../services/localstorage'
import { Link } from 'react-router-dom'

export default function EpisodeCard(props) {
  const { id, name, episode, air_date, characters } = props.episode
  const date = new Date(air_date)

  const favorite = checkIfFavorite(episode)
  const finished = checkIfFinished(episode)

  return (
    <Link
      className='bg-dark mb-3 py-3 px-4 pr-2 flex justify-between items-center'
      to={`/episode/${id}`}
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
      <div className='flex items-center'>
        {favorite && <StarIcon fill='#FFDD63' width={20} height={20} />}
        {finished && <BadgeCheckIcon fill='#50D17C' width={20} height={20} />}
        <ChevronRightIcon fill='#fefefe' width={30} height={30} />
      </div>
    </Link>
  )
}
