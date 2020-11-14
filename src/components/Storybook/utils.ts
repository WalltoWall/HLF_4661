export interface Field {
  type: string
  fieldset?: string
  config: {
    placeholder?: string
    label: string
  }
}

export const isFieldRequired = (field: Field) => {
  const placeholder = field.config?.placeholder
  return placeholder ? !placeholder?.startsWith?.('Optional - ') : true
}

export const normalizeFieldDescription = (description?: string) =>
  description?.replace?.(/^Optional - /, '')

export const normalizeFieldType = (type: string) => {
  switch (type) {
    case 'StructuredText':
      return 'Rich Text'
    case 'Text':
      return 'Plain Text'
    case 'Select':
      return 'Dropdown'
    case 'Group':
      return 'List'
    default:
      return type
  }
}
