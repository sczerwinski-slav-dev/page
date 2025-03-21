import * as React from 'react'
import {Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import ReactMarkdown, {Components} from 'react-markdown'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import HighlightedCode from '../code/HighlightedCode.tsx'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

function header1(attrs: React.HTMLAttributes<HTMLHeadingElement>) {
  return (<Typography variant="h1" sx={{mb: 1, mt: 3}}>{attrs.children}</Typography>)
}

function header2(attrs: React.HTMLAttributes<HTMLHeadingElement>) {
  return (<Typography variant="h2" sx={{mb: 1, mt: 3}}>{attrs.children}</Typography>)
}

function header3(attrs: React.HTMLAttributes<HTMLHeadingElement>) {
  return (<Typography variant="h3" sx={{mb: 1, mt: 3}}>{attrs.children}</Typography>)
}

function header4(attrs: React.HTMLAttributes<HTMLHeadingElement>) {
  return (<Typography variant="h4" sx={{mb: 1, mt: 3}}>{attrs.children}</Typography>)
}

function header5(attrs: React.HTMLAttributes<HTMLHeadingElement>) {
  return (<Typography variant="h5" sx={{mb: 1, mt: 3}}>{attrs.children}</Typography>)
}

function header6(attrs: React.HTMLAttributes<HTMLHeadingElement>) {
  return (<Typography variant="h6" sx={{mb: 1, mt: 3}}>{attrs.children}</Typography>)
}

function paragraph(attrs: React.HTMLAttributes<HTMLParagraphElement>) {
  return (<Typography sx={{mt: 2}}>{attrs.children}</Typography>)
}

function bold(attrs: React.HTMLAttributes<HTMLAnchorElement>) {
  return (<Box component='span' fontWeight='700' display='inline'>{attrs.children}</Box>)
}

function italic(attrs: React.HTMLAttributes<HTMLAnchorElement>) {
  return (<Box component='span' fontStyle='italic' display='inline'>{attrs.children}</Box>)
}

function strikethrough(attrs: React.HTMLAttributes<HTMLAnchorElement>) {
  return (<Box component='span' fontStyle='strikethrough' display='inline'>{attrs.children}</Box>)
}

function underlined(attrs: React.HTMLAttributes<HTMLAnchorElement>) {
  return (<Box component='span' display='inline' sx={{textDecoration: 'underline'}}>{attrs.children}</Box>)
}

function highlightedCode(language: string, attrs: React.HTMLAttributes<HTMLElement>) {
  return (<HighlightedCode language={language}>{attrs.children}</HighlightedCode>)
}

function inlineCode(attrs: React.HTMLAttributes<HTMLElement>) {
  return (
    <Typography
      component='span'
      variant='inherit'
      color='secondary'
      display='inline'
      sx={{fontFamily: 'JetBrains Mono', letterSpacing: 'normal'}}
    >
      {attrs.children}
    </Typography>
  )
}

function code(attrs: React.HTMLAttributes<HTMLElement>) {
  const language = /\blanguage-(?<language>\w+)\b/u.exec(attrs.className ?? '')?.pop()
  if (language) {
    return highlightedCode(language, attrs)
  }
  return inlineCode(attrs)
}

function link(attrs: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link href={attrs.href} title={attrs.title} target='_blank' rel='noopener'>
      {attrs.children}<OpenInNewIcon fontSize='inherit' />
    </Link>
  )
}

function blockQuote(attrs: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return (
    <Card>
      <CardContent>
        <Stack direction='row' spacing={1.5}>
          <FormatQuoteIcon color='primary' />
          <Divider orientation='vertical' variant='fullWidth' flexItem />
          <Box>{attrs.children}</Box>
        </Stack>
      </CardContent>
    </Card>
  )
}

function table(attrs: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <Paper sx={{overflow: 'hidden', width: '100%'}}>
      <TableContainer sx={{maxHeight: '80%'}}>
        <Table stickyHeader>
          {attrs.children}
        </Table>
      </TableContainer>
    </Paper>
  )
}

function tableHead(attrs: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (<TableHead>{attrs.children}</TableHead>)
}

function tableBody(attrs: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (<TableBody>{attrs.children}</TableBody>)
}

function tableRow(attrs: React.HTMLAttributes<HTMLTableRowElement>) {
  return (<TableRow>{attrs.children}</TableRow>)
}

function tableCell(attrs: React.HTMLAttributes<HTMLTableCellElement>) {
  return (<TableCell style={attrs.style}>{attrs.children}</TableCell>)
}

function orderedList(attrs: React.OlHTMLAttributes<HTMLOListElement>) {
  return (
    <List sx={{'.MuiListItem-root': {display: 'list-item'}, listStyleType: 'decimal', mx: 4, my: 1, px: 0, py: 0}}>
      {attrs.children}
    </List>
  )
}

function unorderedList(attrs: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <List sx={{'.MuiListItem-root': {display: 'list-item'}, listStyleType: 'disc', mx: 4, my: 1, px: 0, py: 0}}>
      {attrs.children}
    </List>
  )
}

function listItem(attrs: React.LiHTMLAttributes<HTMLLIElement>) {
  return (<ListItem disableGutters sx={{mx: 0, my: 0, px: 1, py: 0}}>{attrs.children}</ListItem>)
}

const markdownComponents: Components = {
  /* eslint-disable id-length */
  a: link,
  b: bold,
  blockquote: blockQuote,
  code,
  em: italic,
  h1: header1,
  h2: header2,
  h3: header3,
  h4: header4,
  h5: header5,
  h6: header6,
  i: italic,
  li: listItem,
  ol: orderedList,
  p: paragraph,
  s: strikethrough,
  strong: bold,
  table,
  tbody: tableBody,
  td: tableCell,
  th: tableCell,
  thead: tableHead,
  tr: tableRow,
  u: underlined,
  ul: unorderedList,
}

interface MaterialMarkdownProps {
  markdown: string
}

function MaterialMarkdown(props: MaterialMarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={markdownComponents}
    >
      {props.markdown}
    </ReactMarkdown>
  )
}

export default MaterialMarkdown
