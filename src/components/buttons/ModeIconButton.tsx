import * as React from 'react'
import {IconButtonPropsColorOverrides, IconButtonPropsSizeOverrides} from '@mui/material/IconButton/IconButton'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import IconButton from '@mui/material/IconButton'
import {IconButtonClasses} from '@mui/material/IconButton/iconButtonClasses'
import LightModeIcon from '@mui/icons-material/LightMode'
import {OverridableStringUnion} from '@mui/types'
import {SxProps} from '@mui/system'
import {Theme} from '@mui/material'
import {useColorScheme} from '@mui/material/styles'

interface ModeIconProps {
  mode: string | undefined
}

function ModeIcon(props: ModeIconProps) {
  if (props.mode === 'dark') {
    return (<LightModeIcon />)
  }
  return (<DarkModeIcon />)
}

interface ModeIconButtonProps {
  classes?: Partial<IconButtonClasses>
  color?: OverridableStringUnion<
    'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    IconButtonPropsColorOverrides
  >
  disabled?: boolean
  disableFocusRipple?: boolean
  edge?: 'start' | 'end' | false
  loading?: boolean | null
  loadingIndicator?: React.ReactNode
  size?: OverridableStringUnion<'small' | 'medium' | 'large', IconButtonPropsSizeOverrides>
  sx?: SxProps<Theme>
}

function ModeIconButton(props: ModeIconButtonProps) {
  const {mode, setMode} = useColorScheme()

  function switchMode() {
    if (mode === 'dark') {
      setMode('light')
    } else {
      setMode('dark')
    }
  }

  return (
    <IconButton {...props} onClick={switchMode}>
      <ModeIcon mode={mode} />
    </IconButton>
  )
}

export default ModeIconButton
