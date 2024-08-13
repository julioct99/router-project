import 'react-toastify/dist/ReactToastify.css'

import AppBar from './Appbar'
import { Container } from '@mui/material'
import { ToastContainer } from 'react-toastify'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar />
      <Container sx={{ padding: '32px 0' }}>{children}</Container>
      <ToastContainer />
    </>
  )
}

export default Layout
