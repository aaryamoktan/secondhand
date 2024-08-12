import React, { useEffect, useState } from 'react'
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { CiSaveDown2 } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const HomeMiddle = () => {
    const [id,setloog] = useState('')
    const [search,setsearch] = useState();
    const [like,setLike] = useState()
    const [data,setData] = useState()
    const navigate = useNavigate();
    useEffect(()=>
    {
        setloog(localStorage.getItem('loggedInUser'))
    },[])
    useEffect(()=>
        {
          axios.get(`http://localhost:4000/getdata/`+id)
          .then(result=>setData(result))
          .catch(err=>console.log(err))
        },[])
    const mydate = new Date()
    console.log(data)
  return (
    <div  className='lg:w-[55%] lg:h-[100vh] '>
    
       
        <div className=''>
            
            <input onChange={(e)=>{
                setsearch(e.target.value)
            }} style={{border:"2px solid #969696"}}  className='lg:w-[60%] lg:h-[5vh] rounded-lg ml-[23%] mt-10' type="text" placeholder='Search'/>
        </div>
        <div className='lg:w-[70%] ml-[13%]  mt-10'><p className='flex justify-between'><p className='ml-[85px] font-serif text-[#494949]'>Profilename &nbsp; &nbsp; . { mydate.toLocaleString()}</p><p className='text-[#494949]' ><SlOptionsVertical/></p></p></div>
        <div className='lg:w-[62%] ml-[22%] mt-5'>
            <img className='lg:w-[100%] h-[70vh] rounded-md' src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/453007246_2196108810743921_3128357391976275077_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=V_W1wTUeESQQ7kNvgHCwKcN&_nc_ht=scontent.fktm8-1.fna&oh=00_AYB6yutwl4rPFNF1pK8iOZk8xtzyQvI-VY9TKlNzglwLiw&oe=66BD6CFB"/>
        </div>
        <div className='lg:w-[62%] lg:h-[5vh] ml-[22%]  flex justify-between items-center'>
            <div className='flex gap-10 ml-3'>
                <div onClick={()=>
                    {
                        setLike(like+1)
                    }
                }><p className='text-2xl mt-1.5 flex'><p className='text-xl mt-[-3px] mr-1'>{like}</p><AiOutlineLike/></p></div>
                <div><p className='text-2xl mt-2'><BiCommentDots/></p></div>
            </div>
            <div><p className='text-2xl mt-2'><CiSaveDown2/></p></div>
            
        </div>
    </div>
  )
}

export default HomeMiddle