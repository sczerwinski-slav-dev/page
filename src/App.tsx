import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import {amber, blueGrey} from '@mui/material/colors'
import CssBaseline from '@mui/material/CssBaseline'
import ErrorsStateProvider from './components/errors/ErrorsStateProvider.tsx'
import PostsList from './components/PostsList.tsx'
import Scaffold from './components/Scaffold.tsx'

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
      <ErrorsStateProvider>
        <Scaffold>
          <PostsList />
        </Scaffold>
      </ErrorsStateProvider>
    </ThemeProvider>
  )
}

export default App
