import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from 'react-router-dom'
import './style/App.css'
import Logo from './assets/logo.png'
import BG from './assets/bg.png'

import Home from './pages/Home'
import EpisodeDetails from './pages/EpisodeDetails'
import { useEffect } from 'react'

const Header = () => {
  return (
    <header className='flex justify-center align-middle pt-10 pb-6 lg:py-4'>
      <img
        src={Logo}
        alt='Logo de Rick and Morty'
        className='w-1/2 md:w-1/3 lg:w-[300px]'
      ></img>
    </header>
  )
}

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <main className='relative min-h-screen'>
      <Header></Header>

      <div className='lg:w-[85%] lg:pt-3 lg:m-auto'>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/episode/:id' element={<EpisodeDetails />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      </div>

      <img
        src={BG}
        alt='Background'
        className='-z-10 fixed right-0 bottom-0 lg:w-4/6'
      ></img>
      <div className='-z-20 bg-darkBG h-full w-full fixed top-0'></div>
    </main>
  )
}

export default App
