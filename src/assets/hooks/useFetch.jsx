import React, { useEffect, useState } from 'react'

export default function useFetch(url,method="GET") {
  let [data,setData]=useState(null);
  let [loading,setLoading]=useState(false);
  let [error,setError]=useState(null);
  let [postData,setPostData]=useState(null);
  useEffect(()=>{
    let options={
      method
    };
    setLoading(true);
    let fetchData=()=>{
      fetch(url,options)
      .then(res=>{
          if(!res.ok){
              throw Error("Something Went Wrong!");
          }
          return res.json()
      })
      .then(data=>{
          setData(data);
          setLoading(false);
          setError(false);
      })
      .catch(e=>{
          setError(e.message);
      })
    }
    if(method==='POST' && postData){
      options={
        ...options,
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(postData)
      }
      fetchData();
    }
    if(method==='GET'){
      fetchData();
    }
    
  },[url,postData])
  return {setPostData,data,loading,error}
}
