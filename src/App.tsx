import CssBaseline from '@mui/material/CssBaseline'
import PostsList from './components/PostsList.tsx'
import Scaffold from './components/Scaffold.tsx'

import {createTheme, ThemeProvider} from '@mui/material/styles'
import {amber, blueGrey} from '@mui/material/colors'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const appTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: blueGrey,
    secondary: amber,
  },
})

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Scaffold>
        <PostsList />
      </Scaffold>
    </ThemeProvider>
  )
}

export default App
