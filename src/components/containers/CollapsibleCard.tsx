import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import ExpandMoreButton from '../buttons/ExpandMoreButton.tsx'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import useToggleable from '../../hooks/toggleable.tsx'

interface CollapsibleCardProps {
  caption: string
}

function CollapsibleCard(props: React.PropsWithChildren<CollapsibleCardProps>) {
  const [expanded, toggleExpanded] = useToggleable(false)

  return (
    <Card>
      <CardActions>
        <Stack direction='row' width='100%' sx={{ml: 1}}>
          <Typography gutterBottom variant='h6'>{props.caption}</Typography>
          <ExpandMoreButton
            expanded={expanded}
            onClick={toggleExpanded}
            label="expand filters" />
        </Stack>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {props.children}
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default CollapsibleCard
