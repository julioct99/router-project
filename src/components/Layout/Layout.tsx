import { Container } from '@mui/material'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return <Container sx={{ padding: '32px 0' }}>{children}</Container>
}

export default Layout
