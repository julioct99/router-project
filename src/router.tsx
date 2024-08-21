import { Navigate, createBrowserRouter } from 'react-router-dom'
import { NewProductPage, NotFoundPage, ProductPage, ProductsPage } from './pages'
import { fetchProductById, fetchProducts } from './api/products'

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
