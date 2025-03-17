import * as React from 'react'
import Alert from '@mui/material/Alert'

interface ErrorAlertProps {
  message: string | null
}

function ErrorAlert(props: ErrorAlertProps) {
  const errorMessage = props.message
  if (errorMessage !== null) {
    return (<Alert severity="error">{errorMessage}</Alert>)
  }
  return (<React.Fragment />)
}

export default ErrorAlert
