import React,{useEffect,useState} from 'react'
import axios from 'axios';
const Lefthome = () => {

    const [id,setloog] = useState();
    const [data1,setData] = useState();
    useEffect(()=>
        {
            setloog(localStorage.getItem('loggedInUser'))
        },[])
        useEffect(()=>
            {
              axios.get(`http://localhost:4000/getdata/`+id)
              .then(result=>setData(result.data.userName))
              .catch(err=>console.log(err))
            },[])
  return (
    <div>
        {data1}
       </div>
  )
}

export default Lefthome