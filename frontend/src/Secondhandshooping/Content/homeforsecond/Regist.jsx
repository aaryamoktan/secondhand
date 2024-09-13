import React, { useState } from 'react'

const Regist = () => {
  const regist = ()=>
  {

  }
  const [id,setId] = useState();
  const [username,setuserName] = useState();
  const [gender,setgender] = useState();
  const [password,setPassword] = useState();
  const [number,setnumber] = useState();
  return (
    <div className='w-[100%] h-[100vh] bg-[#4078d7] flex justify-center items-center'>
    <div className='w-[30%] h-[60vh] bg-[#fafafa] shadow-amber-500 rounded-xl text-center   '>
        <form className=' text-center text-white'>
           <h1 className='mt-10 font-serif font-semibold text-3xl text-[#4078d7]'>Registration</h1>
           <input name="userName" onChange={(e)=>
            {
                setuserName(e.target.value)
            }
           } placeholder='User name' className='w-[90%] h-[5vh]  font-serif rounded-2xl mt-10 bg-[#1a2334] text-center text-xl'/><br/>
           <input name="id" onChange={(e)=>
            {
                setId(e.target.value)
            }
           } placeholder="Email ID" className='w-[90%] h-[5vh]  font-serif rounded-2xl mt-2 bg-[#1a2334] text-center text-xl'/><br/>
           <select name="gender" onChange={(e)=>
            {
                setgender(e.target.value)
            }
           } placeholder='Gender' className='w-[90%] h-[5vh]  font-serif rounded-2xl mt-2 bg-[#1a2334] text-[#9aa2b1] text-center text-xl'>
            <option>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option></select><br/>
           <input name="number" onChange={(e)=>
            {
                setnumber(e.target.value)
            }
           } placeholder='Number' type="number" className='w-[90%] h-[5vh]  font-serif rounded-2xl  mt-2 bg-[#1a2334] text-center text-xl'/><br/>
           <input  name=" password" onChange={(e)=>
            {
                setPassword(e.target.value)
            }
           } placeholder='Password' type="password" className='w-[90%] h-[5vh] text-[white] font-serif rounded-2xl mt-2 bg-[#1a2334] text-center text-xl'/>
           <br/>
           <button onClick={regist} className='text-[#9aa2b1] w-[30%] h-[5vh] bg-[#1a2334] mt-10 rounded-lg font-serif'>Registration</button>
        </form>
    </div>
</div>
  )
}

export default Regist