import Layout from './components/Layout/Layout'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}

export default App
