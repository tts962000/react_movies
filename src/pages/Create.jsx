import React, { useEffect } from 'react'
import { useState } from 'react';
import useFetch from '../assets/hooks/useFetch'
import {useNavigate } from 'react-router-dom';
import useTheme from '../assets/hooks/useTheme';
export default function Create() {
  let [title,setTitle]=useState("");
  let [description,setDescription]=useState("");
  let [newCategory,setNewCategory]=useState("");
  // let [categories,setCategories]=useState(['Action']);
  let [categories,setCategories]=useState([]);
  let {setPostData,data:movie}=useFetch('http://localhost:3000/movies',"POST");
  let navigate=useNavigate();
  let [loader,setLoader]=useState(false);
  let{isDark}=useTheme()
  let addCategory=()=>{
    if(categories.includes(newCategory)){
      setNewCategory('');
      return;
    }
     setCategories((prev)=>[newCategory,...prev])
     setNewCategory('');
  }
  let addMovie = (e) => {
    setLoader(true);
    e.preventDefault();
    let data = {
        title,
        description,
        categories
    }
    setPostData(data);
    setTimeout(() => {
      setLoader(false)
 }, 5000)
}  
useEffect(()=>{
  if(movie){
    navigate('/')

  }
},[movie])
  return (
   <div className="h-screen">
     <form className="w-full max-w-lg mx-auto" onSubmit={addMovie}>
  <div className="flex flex-wrap -mx-3 mb-6 space-y-4">
    <div className="w-full px-3">
      <label className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark? 'text-white':''}`}>
        Movie Title 
      </label>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-text" type="text" placeholder="Movie Title"/>
      
    </div>
    <div className="w-full px-3">
      <label className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark? 'text-white':''}`}>
        Movie Description 
      </label>
      <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-text" type="text" placeholder="Movie Description"/>
      
    </div>
    <div className="w-full px-3">
      <label className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark? 'text-white':''}`}>
       Add Movie Category 
      </label>
     <div className="flex space-x-2 justify-center items-center">
     <input value={newCategory} onChange={(e)=>setNewCategory(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-text" type="text" placeholder="Action.. "/>
     <button type='button' onClick={()=>addCategory()} className='mb-3'>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rounded-lg w-10 h-10 bg-primary p-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
     </button>
     </div>
     <div className='flex flex-wrap'>
              {categories.map((c)=>(
                  <span key={c} className='mx-2 my-1 text-white rounded-full px-2 py-1 text-sm bg-yellow-500'>{c}</span>
              ))}
            </div>
      
    </div>
    
    <div className='text-white rounded-2xl px-3 py-2 bg-primary flex justify-center items-center w-full gap-1'>
    <button className=''>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
    </button>
      {loader ? <p>loading....</p> :<span className='hidden md:block'>Create Movie</span>}
          
    </div>
    
    
  </div>
  
</form>
   </div>
  )
}
