import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from './componant/auth/sign-in/Signin.jsx'
import SignUp from './componant/auth/sign-up/Sighup.jsx'
import Home from './Home/Home.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import Deshboard from './componant/deshboard/Deshboard.jsx'
import Create from './componant/create/Create.jsx'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      
      {
        path: '/deshboard',
        element: <Deshboard />
      },
      {
        path:'/create',
        element: <Create />
      }
    ]
  },
  {
    path:'',
    element: <Home />
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
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>

    <RouterProvider router={router} />

    </ClerkProvider>
  </StrictMode>,
)
