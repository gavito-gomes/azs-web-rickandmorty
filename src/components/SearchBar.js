import React, { useState } from 'react'
import { SearchIcon, XIcon } from '@heroicons/react/solid'

export default function SearchBar(props) {
  const { onSubmit } = props

  const [value, setvalue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.blur()
    onSubmit(value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='border border-primary flex mb-3 md:max-w-[50vw] mx-auto'
    >
      <div className='flex-grow relative'>
        <input
          type='text'
          className='bg-[transparent] pl-3 w-full h-full'
          placeholder='Procurar pelo nome...'
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          onSubmit={handleSubmit}
        ></input>

        <button
          type='button'
          onClick={() => setvalue('')}
          className='absolute h-full right-0 px-2'
        >
          <XIcon color='#fefefe' width={25} height={25} />
        </button>
      </div>
      <button type='submit' className='p-2 bg-primary flex gap-2'>
        <SearchIcon color='#fefefe' width={25} height={25} />
        <span>Buscar</span>
      </button>
    </form>
  )
}
