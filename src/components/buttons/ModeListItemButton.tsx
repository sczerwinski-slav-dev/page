import ListItemButton from '@mui/material/ListItemButton'
import {ListItemButtonClasses} from '@mui/material/ListItemButton/listItemButtonClasses'
import ListItemText from '@mui/material/ListItemText'
import {SxProps} from '@mui/system'
import {Theme} from '@mui/material'
import {useColorScheme} from '@mui/material/styles'

const buttonLabels = new Map<string, string>([
  ['dark', 'Light mode'],
  ['light', 'Dark mode'],
])

interface ModeButtonProps {
  alignItems?: 'flex-start' | 'center';
  autoFocus?: boolean;
  classes?: Partial<ListItemButtonClasses>;
  dense?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
  divider?: boolean;
  selected?: boolean;
  sx?: SxProps<Theme>;
}

function ModeListItemButton(props: ModeButtonProps) {
  const {mode, setMode} = useColorScheme()

  function switchMode() {
    if (mode === 'dark') {
      setMode('light')
    } else {
      setMode('dark')
    }
  }

  return (
    <ListItemButton {...props} onClick={switchMode}>
      <ListItemText primary={buttonLabels.get(mode ?? 'dark')}/>
    </ListItemButton>
  )
}

export default ModeListItemButton
