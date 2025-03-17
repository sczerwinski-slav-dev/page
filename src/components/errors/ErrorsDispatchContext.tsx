import * as React from 'react'

const ErrorsDispatchContext = React.createContext<(error: string) => void>(
  () => {
    // Do nothing
  }
)

export default ErrorsDispatchContext
