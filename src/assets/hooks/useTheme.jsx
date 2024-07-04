import React from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'
export default function useTheme() {
  let contexts=useContext(ThemeContext)
  if(contexts==='undefined'){
    Error('useTheme should be only used in Theme Context')
  }
  return contexts; //theme:'light' changeTheme()
}
