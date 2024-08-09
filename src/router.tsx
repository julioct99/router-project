import { Navigate, createBrowserRouter } from 'react-router-dom'
import { fetchProductById, fetchProducts } from './api/fetchers'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Product from './pages/Product'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/products' />,
  },
  {
    path: '/products',
    element: <Home />,
    loader: fetchProducts,
  },
  {
    path: '/products/:id',
    element: <Product />,
    loader: ({ params }) => fetchProductById(params?.id ? +params.id : 0),
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
