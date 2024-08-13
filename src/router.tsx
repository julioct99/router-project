import { Navigate, createBrowserRouter } from 'react-router-dom'
import { fetchProductById, fetchProducts } from './api/fetchers'

import HomePage from './pages/Home'
import NewProductPage from './pages/NewProduct'
import NotFoundPage from './pages/NotFound'
import ProductPage from './pages/Product'
import { getQueryParamsFromUrl } from './utils/routing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/products' />,
  },
  {
    path: '/products',
    element: <HomePage />,
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
      const dataObject = Object.fromEntries(formData.entries())
      console.log({ dataObject })
      return null
    },
  },
  {
    path: '/products/:id',
    element: <ProductPage />,
    loader: ({ params }) => fetchProductById(params?.id ? +params.id : undefined),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default router
