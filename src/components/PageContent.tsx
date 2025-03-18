import * as React from 'react'
import ErrorsDispatchContext from './errors/ErrorsDispatchContext.tsx'
import MaterialMarkdown from './markdown/MaterialMarkdown.tsx'
import Page from '../types/Page.tsx'
import Typography from '@mui/material/Typography'
import {getPage} from '../api/get-page.tsx'
import {useParams} from 'react-router'

function PageContent() {
  const {pageId} = useParams(),
    [page, setPage] = React.useState<Page | null>(null),
    dispatchError = React.useContext(ErrorsDispatchContext)

  React.useEffect(() => {
    if (pageId) {
      getPage(pageId)
        .then(setPage)
        .catch((reason: unknown) => {
          if (reason instanceof Error) {
            dispatchError(reason.message)
          }
        })
    }
  }, [pageId, dispatchError])

  if (!page) {
    return (<React.Fragment />)
  }

  return (
    <React.Fragment>
      <Typography variant="h1">{page.title}</Typography>
      <MaterialMarkdown markdown={page.content} />
    </React.Fragment>
  )
}

export default PageContent
