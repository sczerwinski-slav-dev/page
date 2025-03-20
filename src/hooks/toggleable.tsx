import * as React from 'react'

function useToggleable(initialState: boolean): [boolean, React.Dispatch<void>] {
  const [state, setState] = React.useState(initialState)

  function toggleState() {
    setState((oldState) => !oldState)
  }

  return [state, toggleState]
}

export default useToggleable
