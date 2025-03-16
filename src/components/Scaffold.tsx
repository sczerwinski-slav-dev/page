import * as React from 'react'

import PageStub from '../types/PageStub.tsx'
import {getPages} from '../api/get-pages.tsx'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import {pageTitle} from '../config/site.tsx'

const drawerWidth = 240

interface ScaffoldDrawerProps {
  onClick: (event: React.MouseEvent) => void
  pages: PageStub[]
}

function ScaffoldDrawer(props: ScaffoldDrawerProps) {
  return (
    <Box onClick={props.onClick} sx={{textAlign: 'center'}}>
      <Typography variant="h6" sx={{my: 2}}>
        {pageTitle}
      </Typography>
      <Divider />
      <List>
        {props.pages.map((pageStub) => (
          <ListItem key={pageStub.id} disablePadding>
            <ListItemButton sx={{textAlign: 'center'}}>
              <ListItemText primary={pageStub.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

function Scaffold(props: React.PropsWithChildren) {
  const [pages, setPages] = React.useState<PageStub[]>([])
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  function handleDrawerToggle() {
    setDrawerOpen((oldState) => !oldState)
  }

  React.useEffect(() => {
    getPages().then(setPages)
  }, [])

  return (
    <Box sx={{display: 'flex'}}>
      <AppBar component="nav">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{mr: 2, display: {sm: 'none'}}}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              {pageTitle}
            </Typography>
            <Box sx={{display: {xs: 'none', sm: 'block'}}}>
              {pages.map((pageStub) => (
                <Button key={pageStub.id} sx={{color: '#fff'}}>
                  {pageStub.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: {xs: 'block', sm: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}
        >
          <ScaffoldDrawer onClick={handleDrawerToggle} pages={pages} />
        </Drawer>
      </nav>
      <Container maxWidth="lg">
        <Box component="main" sx={{p: 3}}>
          <Toolbar />
          {props.children}
        </Box>
      </Container>
    </Box>
  )
}

export default Scaffold
