import * as React from 'react'

const DebugContext = React.createContext([false, () => {}] as [
  boolean,
  () => void,
])

export const DebugProvider = ({ children }: { children?: React.ReactNode }) => {
  const [state, setState] = React.useState(false)
  const toggle = () => setState((state) => !state)

  return (
    <DebugContext.Provider value={[state, toggle]}>
      {children}
    </DebugContext.Provider>
  )
}

export const useDebug = () => {
  const [state] = React.useContext(DebugContext)
  return state
}

export const useDebugController = () => React.useContext(DebugContext)
