import React,{useEffect,useState} from 'react'
import axios from 'axios';
const Lefthome = () => {

    const [loog,setloog] = useState();
    const [data,setData] = useState();
    useEffect(()=>
        {
            setloog(localStorage.getItem('loggedInUser'))
        },[])
  return (
    <div>{data}
    {loog}
       
       </div>
  )
}

export default Lefthome