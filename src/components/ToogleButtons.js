import React from 'react'

import { StarIcon, BadgeCheckIcon } from '@heroicons/react/solid'
import {
  StarIcon as OutStar,
  BadgeCheckIcon as OutBadge,
} from '@heroicons/react/outline'

const iconSize = 30

export function ToogleFavorite(props) {
  const { value, onClick } = props
  return (
    <button
      onClick={onClick}
      className='bg-primary relative flex items-center gap-1 px-3 py-1'
    >
      {value ? (
        <StarIcon fill='#FFDD63' width={iconSize} height={iconSize} />
      ) : (
        <OutStar
          stroke='#FEFEFE'
          strokeWidth={1}
          width={iconSize}
          height={iconSize}
        />
      )}
      <span>Favorito</span>
    </button>
  )
}

export function ToogleFinished(props) {
  const { value, onClick } = props
  return (
    <button
      onClick={onClick}
      className='bg-primary relative flex items-center gap-1 px-3 py-1'
    >
      {value ? (
        <BadgeCheckIcon fill='#50D17C' width={iconSize} height={iconSize} />
      ) : (
        <OutBadge
          stroke='#FEFEFE'
          strokeWidth={1}
          width={iconSize}
          height={iconSize}
        />
      )}
      <span>Visto</span>
    </button>
  )
}
