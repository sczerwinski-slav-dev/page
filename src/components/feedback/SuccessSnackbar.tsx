import Alert from '@mui/material/Alert'
import {Grow} from '@mui/material'
import Snackbar from '@mui/material/Snackbar'

interface SuccessSnackbarProps {
  message: string
  open: boolean
  onClose: () => void
}

function SuccessSnackbar(props: SuccessSnackbarProps) {
  return (
    <Snackbar
      open={props.open}
      onClose={props.onClose}
      key='success-snackbar'
      autoHideDuration={1500}
      slots={{ transition: Grow }}
    >
      <Alert
        severity='success'
        variant='filled'
        sx={{ width: '100%' }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  )
}

export default SuccessSnackbar
