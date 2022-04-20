import React, { useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'

export default function SearchBar(props) {
  const { onSubmit } = props

  const [value, setvalue] = useState()

  const handleSubmit = (e) => {
    // console.log(value)
    e.preventDefault()
    e.target.blur()
    onSubmit(value)
  }

  return (
    <form onSubmit={handleSubmit} className='border border-primary flex mb-3'>
      <input
        type='text'
        className='flex-grow bg-[transparent] px-3'
        placeholder='Procurar pelo nome...'
        onChange={(e) => setvalue(e.target.value)}
        onSubmit={handleSubmit}
      ></input>
      <button type='submit' className='p-2 bg-primary flex gap-2'>
        <SearchIcon color='#fefefe' width={25} height={25} />
        <span>Pesquisar</span>
      </button>
    </form>
  )
}
