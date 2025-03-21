import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/600.css'
import './App.css'
import {HashRouter, Route, Routes} from 'react-router'
import AppScaffold from './components/app/AppScaffold.tsx'
import CssBaseline from '@mui/material/CssBaseline'
import PageContent from './components/pages/PageContent.tsx'
import PostContent from './components/posts/PostContent.tsx'
import PostsListWithFilter from './components/posts/PostsListWithFilter.tsx'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import {createAppTheme} from './theme.tsx'
import {postsPath} from './config/site.tsx'

const appTheme = createAppTheme()

function App() {
  return (
    <ThemeProvider theme={appTheme} defaultMode='dark'>
      <CssBaseline />
      <HashRouter>
        <AppScaffold>
          <Routes>
            <Route index element={<PostsListWithFilter />} />
            <Route path={postsPath}>
              <Route index element={<PostsListWithFilter />} />
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
