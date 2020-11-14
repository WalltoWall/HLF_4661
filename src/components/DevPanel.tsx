import React from 'react'
import clsx from 'clsx'

import { useDebugController } from '../hooks/useDebug'

import { ReactComponent as AssetIconRefreshSVG } from '../assets/_icon-refresh.svg'
import { ReactComponent as AssetIconDebugSVG } from '../assets/_icon-debug.svg'
import { ReactComponent as AssetIconEditSVG } from '../assets/_icon-edit.svg'
import { ReactComponent as AssetIconGraphQLSVG } from '../assets/_icon-graphql.svg'
import { ReactComponent as AssetIconHelpSVG } from '../assets/_icon-help.svg'

import * as styleRefs from './DevPanel.treat'

const refreshData = () => fetch('/__refresh', { method: 'post' })
const openAdmin = () => window.open('/admin')
const openDocs = () => window.open('/docs')
const openGraphiQL = () => window.open('/__graphql')

const icons = {
  refresh: AssetIconRefreshSVG,
  debug: AssetIconDebugSVG,
  edit: AssetIconEditSVG,
  graphql: AssetIconGraphQLSVG,
  help: AssetIconHelpSVG,
} as const

type DevButtonProps = {
  icon: keyof typeof icons
  onClick: () => void
  isActive?: boolean
  title: string
}

const DevButton = ({
  icon: iconName,
  onClick,
  isActive = false,
  title,
}: DevButtonProps) => {
  const IconSVG = icons[iconName]

  return (
    <button
      tabIndex={-1}
      onClick={onClick}
      title={title}
      className={clsx(styleRefs.button, isActive && styleRefs.activeColor)}
    >
      <IconSVG className={styleRefs.icon} />
    </button>
  )
}

export const DevPanel = () => {
  const [debug, toggleDebug] = useDebugController()

  return (
    <div className={styleRefs.panel}>
      <DevButton onClick={openAdmin} icon="edit" title="Open admin" />
      <DevButton onClick={openGraphiQL} icon="graphql" title="Open GraphiQL" />
      <DevButton onClick={openDocs} icon="help" title="Open docs" />
      <DevButton onClick={refreshData} icon="refresh" title="Refresh data" />
      <DevButton
        onClick={toggleDebug}
        icon="debug"
        isActive={debug}
        title={debug ? 'Disable debug mode' : 'Enable debug mode'}
      />
    </div>
  )
}
