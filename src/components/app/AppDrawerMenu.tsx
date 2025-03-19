import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import {NavLink} from 'react-router'
import PageStub from '../../types/PageStub.tsx'
import Typography from '@mui/material/Typography'
import {pageTitle} from '../../config/site.tsx'

interface AppDrawerMenuProps {
  onClick: () => void
  pages: PageStub[]
}

function AppDrawerMenu(props: AppDrawerMenuProps) {
  return (
    <Box onClick={props.onClick} sx={{textAlign: 'center'}}>
      <Typography variant="h6" sx={{my: 2}}>
        {pageTitle}
      </Typography>
      <Divider />
      <List>
        {props.pages.map((pageStub) => (
          <ListItem key={pageStub.id} disablePadding>
            <ListItemButton component={NavLink} to={`/${pageStub.id}`} sx={{textAlign: 'center'}}>
              <ListItemText primary={pageStub.title}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default AppDrawerMenu
