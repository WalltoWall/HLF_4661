declare module 'react-html-renderer' {
  import React from 'react'

  export interface HTMLRendererProps {
    html?: string
    components?: Record<string, React.ComponentType<any>>
    componentOverrides?: Record<
      string,
      (originalComponent: React.ComponentType<any>) => React.ComponentType<any>
    >
  }

  class HTMLRenderer extends React.Component<HTMLRendererProps, any> {}

  export default HTMLRenderer
}
