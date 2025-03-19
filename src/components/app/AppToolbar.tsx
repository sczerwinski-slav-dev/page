import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import {NavLink} from 'react-router'
import PageStub from '../../types/PageStub.tsx'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {pageTitle} from '../../config/site.tsx'

interface AppToolbarProps {
  onMenuClick: () => void
  pages: PageStub[]
}

function AppToolbar(props: AppToolbarProps) {
  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={props.onMenuClick}
        sx={{display: {sm: 'none'}, mr: 2}}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        component={NavLink}
        to="/"
        variant="h6"
        sx={{color: 'inherit', flexGrow: 1, textDecoration: 'none'}}
      >
        {pageTitle}
      </Typography>
      <Box sx={{display: {sm: 'block', xs: 'none'}}}>
        {props.pages.map((pageStub) => (
          <Button component={NavLink} to={`/${pageStub.id}`} key={pageStub.id} sx={{color: '#fff'}}>
            {pageStub.title}
          </Button>
        ))}
      </Box>
    </Toolbar>
  )
}

export default AppToolbar
