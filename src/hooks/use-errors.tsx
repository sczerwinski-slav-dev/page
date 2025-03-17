import * as React from 'react'
import ErrorsContext from '../components/errors/ErrorsContext.tsx'
import ErrorsDispatchContext from '../components/errors/ErrorsDispatchContext.tsx'

export function useErrors(): [string[], (error: string) => void] {
  return [
    React.useContext(ErrorsContext),
    React.useContext(ErrorsDispatchContext)
  ]
}
