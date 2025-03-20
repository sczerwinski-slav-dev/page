import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import IconButton from '@mui/material/IconButton'

const
  collapsedRotation = '0deg',
  expandedRotation = '180deg'

function getRotation(expanded: boolean): string {
  if (expanded) {
    return expandedRotation
  }
  return collapsedRotation
}

interface ExpandMoreButtonProps {
  label: string
  expanded: boolean
  onClick: () => void
}

function ExpandMoreButton(props: ExpandMoreButtonProps) {
  const {label, expanded, onClick} = props

  return (
    <IconButton
      onClick={onClick}
      aria-label={label}
      aria-expanded={expanded}
      sx={(theme) => ({
        ml: 'auto',
        my: 0,
        transform: `rotate(${getRotation(expanded)})`,
        transition: theme.transitions.create('transform', {duration: theme.transitions.duration.shortest}),
      })}
    >
      <ExpandMoreIcon />
    </IconButton>
  )
}

export default ExpandMoreButton
