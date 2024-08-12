import { Container } from '@mui/material'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return <Container>{children}</Container>
}

export default Layout
