import React from 'react'

export default function CharacterCard(props) {
  const {
    character: { image, name, status, species },
  } = props
  return (
    <div className='flex bg-dark p-2 gap-3 mb-3'>
      <img src={image} alt={`${name} image`} className='w-1/3'></img>
      <div>
        <p className='text-lg'>{name}</p>
        <p className=''>Espécie: {species}</p>
        <p className=''>Status: {status}</p>
      </div>
    </div>
  )
}
