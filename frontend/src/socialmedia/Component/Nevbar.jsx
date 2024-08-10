import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { RiFolderHistoryLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
const Nevbar = () => {
  return (
    <><div style={{borderRight:"1px solid #d2cfcf"}} className='lg:w-[20%] lg:h-[100vh]  '>
        <h1 className='mt-10 ml-14 font-serif text-3xl text-[#060606]'><a href="/home">SocialMedia</a></h1>
        <ul className='mt-20 ml-20'>
            <li className='mt-10 font-serif text-lg'><a className='flex gap-2' href=""><p className='mt-1'><MdHomeFilled/></p> Home</a></li>
            <li className='mt-10 font-serif text-lg'><a className='flex gap-2' href=""><p className='mt-1'><FaRegCompass/></p>Explore</a></li>
            <li className='mt-10 font-serif text-lg'><a className='flex gap-2' href=""><p className='mt-1'><RiFolderHistoryLine/></p>Story</a></li>
            <li className='mt-10 font-serif text-lg'><a className='flex gap-2' href=""><p className='mt-1'><AiFillMessage /></p>Messages</a></li>
            <li className='mt-10 font-serif text-lg'><a className='flex gap-2' href=""><p className='mt-1'><FaBell/></p>Notification</a></li>
            <li className='mt-10 font-serif text-lg'><a className='flex gap-2' href=""><p className='mt-1'><CiCirclePlus/></p>Post</a></li>
            
        </ul>
        <button className='mt-[60%] ml-16 text-2xl flex gap-2'><p className='mt-1'><FaBars/></p>More</button>
        </div></>
  )
}

export default Nevbar