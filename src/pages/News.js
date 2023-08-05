import React, {useEffect, useState} from 'react'
import { Newsdata } from '../data/NewsData'
import axios from 'axios';

export default function News(){

    const [news,setNews]= useState([])

    useEffect(()=>{
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-07-02&sortBy=publishedAt&apiKey=b3ffd894af9449e3b393dfe6337f9a68")
        .then((res)=>console.log(res.data.articles))
    },[])
    return(
        <>
            <h1 className='w-screen h-screen flex justify-center items-center'> News</h1>
        </>
    )
}