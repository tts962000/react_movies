import React, { createContext, useReducer } from 'react'
const ThemeContext=createContext();


let ThemeReducer=(state,action)=>{
    switch(action.type){
        case "CHANGE_THEME":
            return {...state,theme:action.payload} //theme:dark *(overwrite data)
            default:
                return state; //theme:'light'
    }
    // console.log(state,action);

}
const ThemeContextProvider=({children})=>{

   let[state,dispatch]=useReducer(ThemeReducer,{
        theme:'light'
    }) //similar to useState 

let changeTheme=(theme)=>{
    //action->type+payload {type,payload}
    // dispatch({type:'CHANGE_THEME',payload:'dark'})
    dispatch({type:'CHANGE_THEME',payload:theme})
}
let isDark=state.theme==='dark';
    return(
        <ThemeContext.Provider value={{...state,changeTheme,isDark}}>
            {children}
        </ThemeContext.Provider>
    )
}


export  {ThemeContext,ThemeContextProvider}