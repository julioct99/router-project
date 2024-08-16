import { Navigate, createBrowserRouter } from 'react-router-dom'
import { fetchProductById, fetchProducts } from './api/products'

import NewProductPage from './pages/NewProduct'
import NotFoundPage from './pages/NotFound'
import ProductPage from './pages/Product'
import ProductsPage from './pages/Products'
import { createProductFromFormData } from './utils/products'
import { getQueryParamsFromUrl } from './utils/routing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/products' />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
    loader: ({ request }) => {
      const queryParams = getQueryParamsFromUrl(request.url)
      return fetchProducts(queryParams)
    },
  },
  {
    path: '/products/new',
    element: <NewProductPage />,
    action: async ({ request }) => {
      const formData = await request.formData()
      return createProductFromFormData(formData)
    },
  },
  {
    path: '/products/:id',
    element: <ProductPage />,
    loader: ({ params }) => fetchProductById(params.id),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default router
