import React, { useState } from 'react'
import { SlOptionsVertical } from "react-icons/sl";
const HomeMiddle = () => {
    const [search,setsearch] = useState();
    const mydate = new Date()
  return (
    <div style={{borderRight:"1px solid #d2cfcf"}}  className='lg:w-[60%] lg:h-[100vh] '>
        <div className=''>
            <input onChange={(e)=>{
                setsearch(e.target.value)
            }} style={{border:"2px solid #969696"}}  className='lg:w-[60%] lg:h-[5vh] rounded-lg ml-[20%] mt-10' type="text" placeholder='Search'/>
        </div>
        <div className='lg:w-[70%] ml-[10%]  mt-10'><p className='flex justify-between'><p className='ml-20 font-serif text-[#494949]'>Profilename &nbsp; &nbsp; . {mydate.toLocaleTimeString()}</p><p className='text-[#494949]' ><SlOptionsVertical/></p></p></div>
    </div>
  )
}

export default HomeMiddle