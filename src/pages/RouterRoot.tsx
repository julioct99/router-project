import { Outlet, useLocation, useNavigate } from '@tanstack/react-router'
import React, { useEffect } from 'react'

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

const RouterRoot = () => {
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

export default RouterRoot
