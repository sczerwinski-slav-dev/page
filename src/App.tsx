import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import {HashRouter, Route, Routes} from 'react-router'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import {blueGrey, orange} from '@mui/material/colors'
import AppScaffold from './components/app/AppScaffold.tsx'
import CssBaseline from '@mui/material/CssBaseline'
import PageContent from './components/pages/PageContent.tsx'
import PostContent from './components/posts/PostContent.tsx'
import PostsList from './components/posts/PostsList.tsx'
import {postsPath} from './config/site.tsx'

const appTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: blueGrey,
    secondary: {
      main: orange['200']
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <HashRouter>
        <AppScaffold>
          <Routes>
            <Route index element={<PostsList />} />
            <Route path={postsPath}>
              <Route index element={<PostsList />} />
              <Route path=":postId" element={<PostContent />} />
            </Route>
            <Route path=":pageId" element={<PageContent />} />
          </Routes>
        </AppScaffold>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
