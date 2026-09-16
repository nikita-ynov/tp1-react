import { createRoot } from 'react-dom/client'

import './styles/main.css'
import './styles/header.css'
import './styles/grid.css'

// pages
import './styles/recipe.css'
import './styles/login.css'


import App from './App.tsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import UserList from './pages/UserList.tsx'
import Header from './components/Header.tsx'
import Recipe from './pages/Recipe.tsx'
import User from './pages/User.tsx'
import Login from './pages/Login.tsx'
import Profile from './pages/Profile.tsx'
import PageNotFound from './pages/PageNotFound.tsx'


const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/userList",
        element: <UserList />,
      },
      {
        path: "/user/:id",
        element: <User />,
      },
      {
        path: "/recipe/:id",
        element: <Recipe />,
      }, 
      {
        path: "/login",
        element: <Login />,
      }, 
      {
        path: "/profile",
        element: <Profile />,
      }, 
      {
        path: "*",
        element: <PageNotFound />,
      },
    ]
  }

])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
