import React from 'react'

export default function Loading() {
  return (
    <svg className='animate-spin' width={30} height={30} fill='transparent'>
      <circle
        r={13}
        cx={15}
        cy={15}
        stroke='#fefefe'
        strokeWidth={3}
        strokeDasharray='60 1000'
      />
    </svg>
  )
}
