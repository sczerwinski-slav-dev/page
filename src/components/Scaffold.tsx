import * as React from 'react'
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
import PageStub from '../types/PageStub.tsx'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {getPages} from '../api/get-pages.tsx'
import {pageTitle} from '../config/site.tsx'

const drawerWidth = 180

interface ScaffoldToolbarProps {
  onMenuClick: (event: React.MouseEvent) => void
  pages: PageStub[]
}

function ScaffoldToolbar(props: ScaffoldToolbarProps) {
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
      <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
        {pageTitle}
      </Typography>
      <Box sx={{display: {sm: 'block', xs: 'none'}}}>
        {props.pages.map((pageStub) => (
          <Button key={pageStub.id} sx={{color: '#fff'}}>
            {pageStub.title}
          </Button>
        ))}
      </Box>
    </Toolbar>
  )
}

interface ScaffoldDrawerContentsProps {
  onClick: (event: React.MouseEvent) => void
  pages: PageStub[]
}

function ScaffoldDrawerContents(props: ScaffoldDrawerContentsProps) {
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

interface ScaffoldDrawerProps extends ScaffoldDrawerContentsProps {
  open: boolean
}

function ScaffoldDrawer(props: ScaffoldDrawerProps) {
  return (
    <Drawer
      variant="temporary"
      open={props.open}
      onClose={props.onClick}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        '.MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
        display: {sm: 'none', xs: 'block'},
      }}
    >
      <ScaffoldDrawerContents onClick={props.onClick} pages={props.pages} />
    </Drawer>
  )
}

function Scaffold(props: React.PropsWithChildren) {
  const [pages, setPages] = React.useState<PageStub[]>([]),
    [drawerOpen, setDrawerOpen] = React.useState(false)

  function handleDrawerToggle() {
    setDrawerOpen((oldState) => !oldState)
  }

  React.useEffect(() => {
    getPages()
      .then(setPages)
      .catch((reason: unknown) => { console.error(reason) })
  }, [])

  return (
    <Box sx={{display: 'flex'}}>
      <AppBar component="nav">
        <Container maxWidth="lg">
          <ScaffoldToolbar onMenuClick={handleDrawerToggle} pages={pages} />
        </Container>
      </AppBar>
      <nav>
        <ScaffoldDrawer open={drawerOpen} onClick={handleDrawerToggle} pages={pages} />
      </nav>
      <Container maxWidth="lg">
        <Box component="main" sx={{padding: 3}}>
          <Toolbar />
          {props.children}
        </Box>
      </Container>
    </Box>
  )
}

export default Scaffold
