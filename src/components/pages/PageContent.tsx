import * as React from 'react'
import ErrorAlert from '../feedback/ErrorAlert.tsx'
import MaterialMarkdown from '../markdown/MaterialMarkdown.tsx'
import Page from '../../types/Page.tsx'
import PageSkeleton from './PageSkeleton.tsx'
import Typography from '@mui/material/Typography'
import {getPage} from '../../api/get-page.tsx'
import {useParams} from 'react-router'

interface PageContentInnerProps {
  page: Page | null
  loading: boolean
}

function PageContentInner(props: PageContentInnerProps) {
  const {page, loading} = props

  if (loading) {
    return (<PageSkeleton />)
  }

  if (page) {
    return (
      <React.Fragment>
        <Typography variant="h1">{page.title}</Typography>
        <MaterialMarkdown markdown={page.content} />
      </React.Fragment>
    )
  }
}

function PageContent() {
  const {pageId} = useParams(),
    [page, setPage] = React.useState<Page | null>(null),
    [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (pageId) {
      setError(null)
      setPage(null)
      getPage(pageId)
        .then(setPage)
        .catch((reason: unknown) => {
          if (reason instanceof Error) {
            setError(reason.message)
          }
        })
    }
  }, [pageId])

  return (
    <React.Fragment>
      <ErrorAlert message={error} />
      <PageContentInner page={page} loading={!page && !error} />
    </React.Fragment>
  )
}

export default PageContent
