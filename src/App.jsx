import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layouts/AppLayout'
import ErrorPage from './Pages/ErrorPage'
import Home from './Pages/Home'
import About from './Pages/About'
import Rooms from './Pages/Rooms'
import Restaurant from './Pages/Restaurant'
import Contact from './Pages/Contact'
import RoomDetailPage from './Pages/RoomDetailPage'
import HeritageComfortPage from './Pages/HeritageComfortPage'
import EliteHomestayPage from './Pages/EliteHomestayPage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import ForgotPasswordPage from './Pages/ForgotPasswordPage'
import BookingPage from './Pages/BookingPage'
// import { Contact } from 'lucide-react'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/rooms",
          element: <Rooms />
        },
        {
          path: "/rooms/royal-nest",
          element: <RoomDetailPage />
        },

        {
          path: "/rooms/heritage-comfort",
          element: <HeritageComfortPage />
        },
        {
          path: "/rooms/elite-homestay",
          element: <EliteHomestayPage />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/booking",
          element: <BookingPage />
        },
      ]
    },

    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path:"/signup",
      element:<SignupPage/>
    },
    {
      path:"/forgot-password",
      element:<ForgotPasswordPage/>
    }
  ])


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App