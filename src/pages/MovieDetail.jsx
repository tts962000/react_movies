import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../assets/hooks/useFetch'
import movieImg from '../assets/image.jpg'
import useTheme from '../assets/hooks/useTheme'
export default function MovieDetail() {
    let {id}=useParams()
    console.log(id);
    let {data:movie,loading,error}=useFetch(`http://localhost:3000/movies/${id}`)
    if(error){
        <p>Error...</p>
    }
    let{isDark}=useTheme()
    return (
    <div className="h-screen">
        {loading && <p>Loading...</p>}
        {movie && <div className='grid grid-cols-2'>
                <div className="">
                    <img src={movieImg} className='w-[70%]' alt="" />
                </div>
                <div className="space-y-3">
                    <h1 className={`text-3xl text-bold ${isDark?'text-white':''}`}>{movie.title}</h1>
                    <div className="space-x-1">
                    {movie.categories.map((c)=>(
                  <span key={c} className='mx-2 my-1 text-white rounded-full px-2 py-1 text-sm bg-yellow-500'>{c}</span>
              ))}
                    </div>
                    <p className={isDark? 'text-white':''}>{movie.description}</p>
                </div>
            </div>}
    </div>
  )
}
