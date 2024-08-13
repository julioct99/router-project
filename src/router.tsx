import { Navigate, createBrowserRouter } from 'react-router-dom'
import { createProduct, fetchProductById, fetchProducts } from './api/products'

import HomePage from './pages/Home'
import NewProductPage from './pages/NewProduct'
import NotFoundPage from './pages/NotFound'
import ProductPage from './pages/Product'
import { getQueryParamsFromUrl } from './utils/routing'
import { toast } from 'react-toastify'

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
      toast.success('New product created!')
      toast.info(<pre>{JSON.stringify(dataObject, null, 2)}</pre>)

      const response = await createProduct(dataObject)
      return response
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
