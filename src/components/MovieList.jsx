import React from 'react'
import movieImg from '../assets/image.jpg'
import useFetch from '../assets/hooks/useFetch'
import { Link, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import useTheme from '../assets/hooks/useTheme'
export default function MovieList() {
  let location=useLocation();
  let params=new URLSearchParams(location.search);
  let{isDark}=useTheme();
  let search=params.get('search');
    let {data:movies,loading,error}=useFetch(`http://localhost:3000/movies${search ? `?q=${search}`:''}`)
    if(error){
        <p></p>
    }
  return (
    
   <div className="">
    {loading && <p>Loading...</p>}
    {!!movies && <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 my-3 ${isDark?'text-white':''}`}>
      {movies.map((movie)=>(
        // <div className="bg-red-400">1</div>
        <Link to={`/movies/${movie.id}`} key={movie.id}>
            <div className={`p-4 border-2 ${isDark? 'bg-dcd border-yellow-400':''}`} >
          <img src={movieImg} alt="" />
          <div className="text-center space-y-2 mt-3">
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            {/* genre */}
            <div className='flex flex-wrap'>
              {movie.categories.map((c)=>(
                  <span key={c} className='mx-2 my-1 text-white rounded-full px-2 py-1 text-sm bg-yellow-500'>{c}</span>
              ))}
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>}
    {movies && !movies.length && <p className='text-3xl text-center font-bold'>No results found !</p>}
   </div>
  )
}
