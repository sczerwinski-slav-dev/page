import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

interface ErrorSnackbarProps {
  message: string
  open: boolean
  onClose: () => void
}

function ErrorSnackbar(props: ErrorSnackbarProps) {
  return (
    <Snackbar
      open={props.open}
      onClose={props.onClose}
      key='error-snackbar'
    >
      <Alert
        severity='error'
        variant='filled'
        sx={{ width: '100%' }}
        onClose={props.onClose}
      >
        {props.message}
      </Alert>
    </Snackbar>
  )
}

export default ErrorSnackbar
