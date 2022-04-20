import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './style/App.css'
import Logo from './assets/logo.png'
import BG from './assets/bg.png'

import Home from './pages/Home'
import EpisodeDetails from './pages/EpisodeDetails'

const Header = () => {
  return (
    <header className='flex justify-center align-middle pt-10 pb-6'>
      <img src={Logo} alt='Logo de Rick and Morty' className='w-1/2'></img>
    </header>
  )
}

function App() {
  return (
    <main className='relative min-h-screen'>
      <Header></Header>

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/episode/:id' element={<EpisodeDetails />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>

      <img
        src={BG}
        alt='Background'
        className='-z-10 fixed right-0 bottom-0'
      ></img>
      <div className='-z-20 bg-darkBG h-full w-full absolute top-0'></div>
    </main>
  )
}

export default App
