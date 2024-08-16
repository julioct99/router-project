import { Box, AppBar as MUIAppBar, Toolbar, Typography } from '@mui/material'

import { Link } from '@tanstack/react-router'

const AppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MUIAppBar position='static'>
        <Toolbar>
          <Link to='/products' style={{ color: 'inherit', textDecoration: 'none' }}>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              HOME
            </Typography>
          </Link>
        </Toolbar>
      </MUIAppBar>
    </Box>
  )
}

export default AppBar
