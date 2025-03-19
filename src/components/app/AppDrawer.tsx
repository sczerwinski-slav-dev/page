import AppDrawerMenu from './AppDrawerMenu.tsx'
import Drawer from '@mui/material/Drawer'
import PageStub from '../../types/PageStub.tsx'

const drawerWidth = 180

interface AppDrawerProps {
  onClick: () => void
  pages: PageStub[]
  open: boolean
}

function AppDrawer(props: AppDrawerProps) {
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
      <AppDrawerMenu onClick={props.onClick} pages={props.pages} />
    </Drawer>
  )
}

export default AppDrawer
