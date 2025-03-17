import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import {BrowserRouter, Route, Routes} from 'react-router'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import {amber, blueGrey} from '@mui/material/colors'
import CssBaseline from '@mui/material/CssBaseline'
import ErrorsStateProvider from './components/errors/ErrorsStateProvider.tsx'
import PageContent from './components/PageContent.tsx'
import PostContent from './components/PostContent.tsx'
import PostsList from './components/PostsList.tsx'
import Scaffold from './components/Scaffold.tsx'
import {postsPath} from './config/site.tsx'

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
      <BrowserRouter>
        <ErrorsStateProvider>
          <Scaffold>
            <Routes>
              <Route index element={<PostsList />} />
              <Route path={postsPath}>
                <Route index element={<PostsList />} />
                <Route path=":postId" element={<PostContent />} />
              </Route>
              <Route path=":pageId" element={<PageContent />} />
            </Routes>
          </Scaffold>
        </ErrorsStateProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
