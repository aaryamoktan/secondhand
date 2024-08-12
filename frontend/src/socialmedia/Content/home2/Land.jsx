import React from 'react'
import Nevbar from '../../Component/Nevbar'
import HomeMiddle from '../home/HomeMiddle'
import { useParams } from 'react-router-dom'
const Land = () => {
  
  const params = useParams();
  console.log(params.name)

  return (
    <>
    <div className='flex'>
      
        <Nevbar/>
        <HomeMiddle/>
        
    </div>
    </>
  )
}

export default Land