import * as React from 'react'
import Alert from '@mui/material/Alert'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import Divider from '@mui/material/Divider'
import ErrorsDispatchContext from '../errors/ErrorsDispatchContext.tsx'
import IconButton from '@mui/material/IconButton'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {darcula} from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface HighlightedCodeCopySuccessSnackbarProps {
  open: boolean
  onClose: () => void
}

function HighlightedCodeCopySuccessSnackbar(props: HighlightedCodeCopySuccessSnackbarProps) {
  return (
    <Snackbar
      open={props.open}
      onClose={props.onClose}
      key='copy-code-success'
      autoHideDuration={1500}
    >
      <Alert
        severity='success'
        variant='outlined'
        sx={{ width: '100%' }}
      >
        Code snipped copied to clipboard
      </Alert>
    </Snackbar>
  )
}

interface HighlightedCodeProps {
  language: string
}

function HighlightedCode(props: React.PropsWithChildren<HighlightedCodeProps>) {
  const children = props.children as string[],
    dispatchError = React.useContext(ErrorsDispatchContext),
    {language} = props,
    [snackbarOpen, setSnackbarOpen] = React.useState(false)

  function onCopyClick() {
    navigator.clipboard.writeText(children.toString())
      .then(() => {setSnackbarOpen(true)})
      .catch((reason: unknown) => {
        if (reason instanceof Error) {
          dispatchError(reason.message)
        }
      })
  }

  function onSnackbarClose() {
    setSnackbarOpen(false)
  }

  return (
    <Card>
      <Stack direction='row-reverse' sx={{alignItems: 'center', mx: 2, my: 1}} onClick={onCopyClick}>
        <IconButton color='inherit' aria-label='copy code'>
          <ContentCopyIcon />
        </IconButton>
        <Stack direction='row' width='100%'>
          <Chip label={language} size="small" />
        </Stack>
      </Stack>
      <Divider />
      <SyntaxHighlighter
        style={darcula}
        customStyle={{background: 'none'}}
        codeTagProps={{style: {fontFamily: 'JetBrains Mono', letterSpacing: 'normal'}}}
        language={language}
      >
        {children}
      </SyntaxHighlighter>
      <HighlightedCodeCopySuccessSnackbar open={snackbarOpen} onClose={onSnackbarClose} />
    </Card>
  )
}

export default HighlightedCode
