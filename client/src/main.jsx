import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import Home from './components/layout/Home'
import About from './components/About'
import Contact from './components/Contact'
import SingleProduct from './components/SingleProduct'
import Shop from './components/Shop'
import CartProduct from './components/cart/CartProduct'

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
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
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/shop",
      element: <Shop />
    },
    {
      path: "/product/:id",
      element: <SingleProduct />
    },
    {
      path: "/cart",
      element: <CartProduct />
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
