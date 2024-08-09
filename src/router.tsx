import { fetchProductById, fetchProducts } from './api/fetchers'

import Home from './pages/Home'
import Product from './pages/Product'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: fetchProducts,
  },
  {
    path: '/products/:id',
    element: <Product />,
    loader: ({ params }) => fetchProductById(params?.id ? +params.id : 0),
  },
])

export default router
