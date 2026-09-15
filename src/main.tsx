import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import UserList from './pages/UserList.tsx'
import Header from './components/Header.tsx'
import Profile from './pages/Profile.tsx'


const Layout = () => (
  <> 
    <Header/>
    <Outlet/>
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
        path: "/profile/:username",
        element: <Profile />,
      },
    ]
  }

])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
