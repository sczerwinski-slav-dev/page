import * as React from 'react'
import ErrorsContext from './ErrorsContext.tsx'
import ErrorsDispatchContext from './ErrorsDispatchContext.tsx'

function ErrorsStateProvider(props: React.PropsWithChildren) {
  const [errors, dispatchError] = React.useReducer(
    (oldErrors: string[], newError: string) => {
      if (oldErrors.includes(newError)) {
        return oldErrors
      }
      return [...oldErrors, newError]
    },
    []
  )
  return (
    <ErrorsContext.Provider value={errors}>
      <ErrorsDispatchContext.Provider value={dispatchError}>
        {props.children}
      </ErrorsDispatchContext.Provider>
    </ErrorsContext.Provider>
  )
}

export default ErrorsStateProvider
