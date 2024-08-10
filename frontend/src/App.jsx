import { useState } from 'react'
import Layoit from './Layoit';
import Home from './Home';
import Shome from './socialmedia/Content/home/Shome';
import Registration from './socialmedia/Content/Registration/Registration';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
