import { useState } from 'react'

import HeroSection from '../components/HeroSection'
import MovieList from '../components/MovieList'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    // hero section
    <>
     <HeroSection/>
    {/* movies list */}
    <MovieList/>
    </>
  )
}

export default App
