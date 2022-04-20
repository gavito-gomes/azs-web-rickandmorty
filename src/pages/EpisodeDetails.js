import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/solid'
import { getEpisodeById } from '../services/api'
import Loading from '../components/Loading'
import {
  checkIfFavorite,
  checkIfFinished,
  markFavorite,
  markFinished,
} from '../services/localstorage'
import { ToogleFavorite, ToogleFinished } from '../components/ToogleButtons'
import Tip from '../components/Tip'
import CharacterCard from '../components/CharacterCard'

export default function EpisodeDetails() {
  const { id } = useParams()
  const [episode, setepisode] = useState({})
  const [loading, setloading] = useState(true)
  const [err, seterr] = useState('')
  const [updateKey, setupdateKey] = useState(false)

  const date =
    episode && episode.air_date
      ? new Date(episode.air_date).toLocaleDateString()
      : ''

  const favorite = checkIfFavorite(episode.episode)
  const finished = checkIfFinished(episode.episode)

  const toogleFavorite = () => {
    markFavorite(episode.episode)
    setupdateKey((val) => !val)
  }
  const toogleFinished = () => {
    markFinished(episode.episode)
    setupdateKey((val) => !val)
  }

  useEffect(() => {
    const getEpisode = async () => {
      try {
        let data = await getEpisodeById(id)
        setepisode(data.episode)
        setloading(false)
      } catch (err) {
        seterr('Algum erro ocorreu. Tente novamente mais tarde.')
      }
    }

    getEpisode()
  }, [id])

  return (
    <main className='px-4' key={updateKey}>
      <Link to='/' className='inline-flex gap-2 mb-4'>
        <ArrowLeftIcon fill='#fefefe' width={20} height={20} />
        <span>Voltar</span>
      </Link>

      {loading ? (
        <div className='py-52 flex items-center justify-center'>
          <Loading />
        </div>
      ) : (
        <section className='bg-panelBG p-5 mb-5'>
          <h1 className='text-2xl'>
            {episode.episode} - {episode.name}
          </h1>
          <p className='my-4'>Estreou em {date}</p>
          <div className='flex items-center gap-3'>
            <ToogleFavorite value={favorite} onClick={toogleFavorite} />
            <ToogleFinished value={finished} onClick={toogleFinished} />
            <Tip text='Você pode marcar e desmarcar o episódio como favorito ou visto.' />
          </div>

          <section>
            <h3 className='my-5 text-xl'>Personagens</h3>
            <div className='flex flex-wrap gap-2'>
              {episode?.characters.map((char, i) => {
                return <CharacterCard character={char} key={i} />
              })}
            </div>
          </section>

          {err}
        </section>
      )}
    </main>
  )
}
