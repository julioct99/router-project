import { Navigate, createBrowserRouter } from 'react-router-dom'
import { fetchProductById, fetchProducts } from './api/fetchers'

import HomePage from './pages/Home'
import NotFoundPage from './pages/NotFound'
import ProductPage from './pages/Product'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/products' />,
  },
  {
    path: '/products',
    element: <HomePage />,
    loader: fetchProducts,
  },
  {
    path: '/products/:id',
    element: <ProductPage />,
    loader: ({ params }) => fetchProductById(params?.id ? +params.id : 0),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default router
