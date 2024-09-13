import { useState } from 'react'
import Layoit from './Layoit';
import Home from './Home';
import Shome from './socialmedia/Content/home/Shome';
import Registration from './socialmedia/Content/Registration/Registration';
import Land from './socialmedia/Content/home2/Land';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Secondhandshooping/Content/homeforsecond/Login';
import Regist from './Secondhandshooping/Content/homeforsecond/Regist';
function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {path:"/",
      element:<Layoit/>,
      children:[{
        path:"/",
        element:<Home/>
      },{
        path:"/Login",
        element:<Shome/>
      },{
        path:"/registration",
        element:<Registration/>
      }
      ,{
        path:"/home",
        element:<Land/>
      },
      {
        path:"/SLogin",
        element:<Login/>
      }
      ,
      {
        path:"/",
        element:<Regist/>
      }
    ]
    }
  ])
    return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
