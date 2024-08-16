import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { fetchProductById, fetchProducts } from './api/products'

import NotFoundPage from './pages/NotFound'
import ProductPage from './pages/Product'
import ProductsPage from './pages/Products'
import RouterRoot from './pages/RouterRoot'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootRoute = createRootRoute({
  component: RouterRoot,
  notFoundComponent: NotFoundPage,
})

export const productsRoute = createRoute({
  path: 'products',
  getParentRoute: () => rootRoute,
})

export const productsIndexRoute = createRoute({
  path: '/',
  component: ProductsPage,
  getParentRoute: () => productsRoute,
  loader: async ({ location }) => fetchProducts(location.search),
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

export const productDetailsRoute = createRoute({
  getParentRoute: () => productsRoute,
  path: '$id',
  component: ProductPage,
  loader: async ({ params }) => fetchProductById(params.id),
})

const routeTree = rootRoute.addChildren([
  productsRoute.addChildren([productsIndexRoute, productDetailsRoute]),
])

const router = createRouter({
  routeTree,
})

export default router
