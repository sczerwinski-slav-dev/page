import * as React from 'react'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import Divider from '@mui/material/Divider'
import ErrorSnackbar from '../feedback/ErrorSnackbar.tsx'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import SuccessSnackbar from '../feedback/SuccessSnackbar.tsx'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {darcula} from 'react-syntax-highlighter/dist/cjs/styles/prism'

const languageOverrides = new Map<string, string>([
  ["gradle", "groovy"],
])

interface HighlightedCodeProps {
  language: string
}

function HighlightedCode(props: React.PropsWithChildren<HighlightedCodeProps>) {
  const children = props.children as string[],
    {language} = props,
    [copySuccessSnackbarOpen, setCopySuccessSnackbarOpen] = React.useState(false),
    [copyErrorSnackbarOpen, setCopyErrorSnackbarOpen] = React.useState(false)

  function onCopyClick() {
    navigator.clipboard.writeText(children.toString())
      .then(() => {setCopySuccessSnackbarOpen(true)})
      .catch(() => {setCopyErrorSnackbarOpen(true)})
  }

  return (
    <React.Fragment>
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
          language={languageOverrides.get(language) ?? language}
        >
          {children}
        </SyntaxHighlighter>
      </Card>
      <SuccessSnackbar
        message='Code was copied to clipboard'
        open={copySuccessSnackbarOpen}
        onClose={() => {setCopySuccessSnackbarOpen(false)}} />
      <ErrorSnackbar
        message='Could not copy the code'
        open={copyErrorSnackbarOpen}
        onClose={() => {setCopyErrorSnackbarOpen(false)}} />
    </React.Fragment>
  )
}

export default HighlightedCode
