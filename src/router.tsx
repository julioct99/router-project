import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
  useLocation,
  useNavigate,
} from '@tanstack/react-router'
import React, { useEffect } from 'react'

import NotFoundPage from './pages/NotFound'
import ProductsPage from './pages/Products'
import { fetchProducts } from './api/products'

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      )

const RootComponent: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      navigate({ to: '/products' })
    }
  }, [navigate, location])

  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}

const rootRoute = createRootRoute({
  component: () => <RootComponent />,
  notFoundComponent: () => <NotFoundPage />,
})

export const productsRoute = createRoute({
  path: '/products',
  component: () => <ProductsPage />,
  loader: async ({ location }) => {
    console.log({ location })
    return fetchProducts(location.search)
    // const queryParams = getQueryParamsFromUrl(context.location?.href)
    // return fetchProducts(queryParams)
  },
  getParentRoute: () => rootRoute,
})

// const newProductRoute = createRoute({
//   path: '/products/new',
//   component: NewProductPage,
//   // action: async ({ context }) => {
//    // // TODO
//   //   const formData = new FormData(context.event.target)
//   //   const dataObject = Object.fromEntries(formData.entries())

//   //   // Show toast notifications
//   //   toast.success('New product created! (MOCK)')
//   //   toast.info(<pre>{JSON.stringify(dataObject, null, 2)}</pre>)

//   //   // Call API to create the product
//   //   const response = await createProduct(dataObject)
//   //   return response
//   // },
//   getParentRoute: () => productsRoute,
// })

// const productDetailsRoute = createRoute({
//   path: '/products/:id',
//   component: ProductPage,
//   loader: async ({ params }) => {
//     return fetchProductById(params.id)
//   },
//   getParentRoute: () => productsRoute,
// })

// const notFoundRoute = createRoute({
//   path: '*',
//   component: NotFoundPage,
//   getParentRoute: () => rootRoute,
// })

const routeTree = rootRoute.addChildren([productsRoute])

const router = createRouter({
  routeTree,
})

export default router
