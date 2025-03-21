import * as React from 'react'
import {oneDark, oneLight} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {useColorScheme} from '@mui/material/styles'

type SyntaxHighlightStyle = Record<string, React.CSSProperties>

function useSyntaxHighlightStyle(): SyntaxHighlightStyle {
  const {mode} = useColorScheme()
  if (mode === 'dark') {
    return oneDark
  }
  return oneLight
}

export default useSyntaxHighlightStyle
