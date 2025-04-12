import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from './componant/auth/sign-in/Signin.jsx'
import SignUp from './componant/auth/sign-up/Sighup.jsx'
import Home from './Home/index.jsx'
import Deshboard from './deshboard/Index.jsx'


const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path: '/deshboard',
        element: <Deshboard />
      }
    ]
  },
  {
    path: '/auth/sign-in',
    element: <Signin />
  },
  {
    path: '/auth/sign-up',
    element: <SignUp />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
