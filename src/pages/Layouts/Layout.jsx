import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../../components/navbar'
import { SwitchTransition,CSSTransition } from 'react-transition-group'
import './style.css'
import useTheme from '../../assets/hooks/useTheme'
export default function Layout() {
    const location=useLocation()
    // console.log(location.pathname)
    let{isDark}=useTheme();
    useEffect(()=>{
      let bodyBug=document.body;
      if(isDark){
        bodyBug.classList.add('bg-dbg');
        //body class='bg-dark'
      }else{
        bodyBug.classList.remove('bg-dbg');
        //body class=''
      }
    },[isDark])
  return (
    <div className={isDark?'bg-dbg':'bg-white'}>
       <Navbar/>
       <SwitchTransition>
        <CSSTransition timeout={200} classNames='fade' key={location.pathname}>
        <div className=' max-w-6xl mx-auto p-3'>
                <Outlet />
            </div>
        </CSSTransition>
       </SwitchTransition>
       
    </div>
  )
}
