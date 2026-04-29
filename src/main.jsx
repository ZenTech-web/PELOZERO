import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import NotFound from './Pages/NotFound/index.jsx'
import Main from './Pages/Main/index.jsx'

const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>,
    children: [
      {index: true, element: <Main/>}
    ]
  },
  {
    path: "*", element: <NotFound/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
