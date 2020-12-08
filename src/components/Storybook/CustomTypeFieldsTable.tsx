import * as React from 'react'

import schemas from '../../schemas'

import { FieldsTable, FieldsTableRowProps } from './FieldsTable'
import {
  normalizeFieldType,
  normalizeFieldDescription,
  isFieldRequired,
  Field,
} from './utils'

type CustomTypeFieldsTableProps = {
  customTypeId: keyof typeof schemas
  tab: string
  overrides?: Record<string, Partial<FieldsTableRowProps> & { hide?: boolean }>
}

export const CustomTypeFieldsTable = ({
  customTypeId,
  tab,
  overrides,
}: CustomTypeFieldsTableProps) => {
  const customTypeSchema = schemas[customTypeId]
  const tabSchema = customTypeSchema[
    tab as keyof typeof customTypeSchema
  ] as any
  const fields = Object.entries(tabSchema) as [string, Field][]

  return (
    fields.length > 0 && (
      <FieldsTable>
        {fields.map(([apiId, field]) => {
          const fieldOverrides = overrides?.[apiId]

          return (
            !fieldOverrides?.hide && (
              <FieldsTable.Row
                key={apiId}
                name={
                  fieldOverrides?.name ?? field.config.label ?? field.fieldset
                }
                type={fieldOverrides?.type ?? normalizeFieldType(field.type)}
                description={
                  fieldOverrides?.description ??
                  normalizeFieldDescription(field.config.placeholder)
                }
                isRequired={
                  fieldOverrides?.isRequired ?? isFieldRequired(field)
                }
              />
            )
          )
        })}
      </FieldsTable>
    )
  )
}
