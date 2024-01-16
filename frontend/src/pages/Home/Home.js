import React, { useEffect } from 'react'
import { axiosClient } from '../../utils/axiosClient';

const Home = () => {
    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData(){
        const response=await axiosClient.get('/posts/all')
        console.log(response);
    }
  return (
    <div>Home</div>
  )
}

export default Home