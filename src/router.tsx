import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { fetchProductById, fetchProducts } from './api/products'

import NewProductPage from './pages/NewProduct'
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
  getParentRoute: () => rootRoute,
  path: 'products',
})

export const productsIndexRoute = createRoute({
  getParentRoute: () => productsRoute,
  path: '/',
  component: ProductsPage,
  loader: async ({ location }) => fetchProducts(location.search),
})

export const newProductRoute = createRoute({
  getParentRoute: () => productsRoute,
  path: 'new',
  component: NewProductPage,
})

export const productDetailsRoute = createRoute({
  getParentRoute: () => productsRoute,
  path: '$id',
  component: ProductPage,
  loader: async ({ params }) => fetchProductById(params.id),
})

const routeTree = rootRoute.addChildren([
  productsRoute.addChildren([productsIndexRoute, productDetailsRoute, newProductRoute]),
])

const router = createRouter({
  routeTree,
})

export default router
