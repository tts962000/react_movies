import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import useTheme from '../assets/hooks/useTheme'
import sunIcon from '../assets/sunIcon.svg';
import moonIcon from '../assets/moonIcon.svg';
export default function Navbar() {
    let [searchValue,setSearchValue]=useState('');
    let navigate=useNavigate();
    let handleSearch=()=>{
        navigate('/?search='+searchValue);
    }
    // let{theme}=useContext(ThemeContext);
    let {theme,changeTheme,isDark}=useTheme();
    // console.log(theme);
    return (
        <nav  className={`border border-b-1 mb-5 ${isDark? 'bg-dbg border-b-yellow-500':'bg-white'}`}>
            <ul className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
                <li className='flex items-center gap-3'>
                    <svg onClick={()=>handleSearch()} onChange={(e)=>setSearchValue(e.target.value)} to="/create" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${isDark?'text-white':''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} type="text" placeholder='search movies...' className='outline-none px-2 py-1 border-2 rounded-md' />
                    <button onClick={()=>handleSearch()} to="/create" className='hidden md:block text-white bg-primary px-3 py-1 rounded-2xl flex items-center gap-1'>
                       

                        <span className="hidden md:block">Search</span>
                    </button>
                </li>
                <Link to="/" className='flex items-center gap-3 md:-ml-32 cursor-pointer'>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${isDark?'text-white':''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg> */}
                    <i className="fa-solid fa-tv"></i>
                    <span className='text-2xl font-bold text-primary hidden lg:block'>
                        Movie Collection
                    </span>
                </Link>
                <li className='flex gap-3 items-center'>
                    {/* create book */}
                    <Link to="/create" className='text-white bg-primary px-3 py-2 rounded-2xl flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <span className="hidden md:block">Create Movie</span>
                    </Link>
                    {/* profile image */}
                    <div className='w-11'>
                        <img src="https://3fc4ed44-3fbc-419a-97a1-a29742511391.selcdn.net/coub_storage/coub/simple/cw_timeline_pic/5281ab8e3ab/6f939b316939ac5def3f0/med_1695389401_image.jpg" alt="" className='w-full rounded-full' />
                    </div>
                    {/* light mode dark mode switcher */}
                    <div className="cursor-pointer">
                        {isDark && <img src={sunIcon} className='w-8' onClick={()=>changeTheme('light')} alt="" />}
                        {!isDark && <img src={moonIcon} className='w-8' onClick={()=>changeTheme('dark')} alt="" />}
                        
                    </div>
                </li>
            </ul>
        </nav>
    )
}