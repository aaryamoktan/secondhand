import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-black w-[100%] h-[100vh] text-white'>
        <ul className='font-mono text-3xl'>
            <li className='cursor-pointer  mt-10 hover:text-green-600'><a href="/Login">Social Media</a></li>
            <li className='cursor-pointer  mt-10 hover:text-green-600'><a href="/SLogin">Second Hand Market</a></li>
            <li className='cursor-pointer  mt-10 hover:text-green-600'><a href="">Local Market</a></li>
        </ul>
    </div>
  )
}

export default Home