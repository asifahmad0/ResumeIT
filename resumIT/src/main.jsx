import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from './componant/auth/sign-in/Signin.jsx'
import SignUp from './componant/auth/sign-up/Sighup.jsx'
import Home from './Home/Index.jsx'
import Deshboard from './deshboard/Index.jsx'
import { ClerkProvider } from '@clerk/clerk-react'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

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
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>

    <RouterProvider router={router} />

    </ClerkProvider>
  </StrictMode>,
)
