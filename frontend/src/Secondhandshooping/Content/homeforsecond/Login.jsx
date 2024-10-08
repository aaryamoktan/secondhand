import React, { useState } from 'react'

const Login = () => {
    const [id,setId] = useState();
    const  login = ()=>{

    }
    const [password,setPassword] = useState()
  return (
    <div className='w-[100%] h-[100vh] bg-[#6ea3fe] flex justify-center items-center'>
        <div className='w-[30%] h-[60vh] bg-[#9dbffc] shadow-amber-500 rounded-xl text-center   '>
            <form className=' text-center text-white'>
               <h1 className='mt-10 font-serif font-semibold text-3xl text-[#4078d7]'>Login</h1>
               <input name="user" onChange={(e)=>
                {
                    setId(e.target.value)
                }
               } placeholder='User Id' className='w-[90%] h-[5vh]  font-serif rounded-2xl mt-20 bg-[#1a2334] text-center text-xl'/><br/>
               <input name="password" onChange={(e)=>
                {
                    setPassword(e.target.value)
                }
               } type="password" placeholder='Password' className='w-[90%] h-[5vh] text-[white] font-serif rounded-2xl mt-5 bg-[#1a2334] text-center text-xl'/>
               <br/>
               <button onClick={login} className='text-[white] w-[30%] h-[5vh] bg-[#1a2334] mt-10 rounded-lg font-serif'>Login</button>
            </form>
            <p className='text-[#495364] font-serif mt-8'>if you don't have account </p>
            <button className='text-[white] w-[30%] h-[5vh] bg-[#1a2334]  rounded-lg font-serif mt-2'><a href="/Sregist">Registration</a></button>
        </div>
    </div>
  )
}

export default Login