"use client"

import React, {useState} from 'react'
import axios from "axios"

import { RiArticleFill } from "react-icons/ri";



const Summary = ({link, title, channel}: any) => {
    const params = {
      link,
      title,
      channel
    }
    console.log(params)
    const handleSummary = async () => {
        const response = await axios.get("http://localhost:4000", {
          params
        })
        console.log(response.data);
    }
  return (
    <div>
        <button onClick={handleSummary}><RiArticleFill className="w-8 h-8" /></button>
    </div>
  )
}

export default Summary
