import * as React from 'react'

import schemas from '../../schemas'

import { FieldsTable, FieldsTableRowProps } from './FieldsTable'
import {
  normalizeFieldType,
  normalizeFieldDescription,
  isFieldRequired,
  Field,
} from './utils'

const getSliceSchema = (
  customTypeId: keyof typeof schemas,
  sliceZoneId: string,
  sliceId: string,
) => {
  try {
    const rawSchema = schemas[customTypeId]
    const schema = Object.assign({}, ...Object.values(rawSchema))
    const sliceZone = schema[sliceZoneId]

    return sliceZone.config.choices[sliceId]
  } catch (_error) {
    throw new Error(
      'A slice schema could not be found for the given custom type, slice zone, and slice IDs.',
    )
  }
}

type SliceFieldsTableProps = {
  customTypeId: keyof typeof schemas
  sliceZoneId: string
  sliceId: string
  fieldset: 'repeat' | 'non-repeat'
  overrides?: Record<string, Partial<FieldsTableRowProps>>
}

export const SliceFieldsTable = ({
  customTypeId,
  sliceZoneId,
  sliceId,
  fieldset,
  overrides,
}: SliceFieldsTableProps) => {
  const slice = getSliceSchema(customTypeId, sliceZoneId, sliceId)
  const fields = Object.entries(slice[fieldset]) as [string, Field][]

  return (
    fields.length > 0 && (
      <FieldsTable>
        {fields.map(([apiId, field]) => {
          const fieldOverrides = overrides?.[apiId]

          return (
            <FieldsTable.Row
              key={apiId}
              name={fieldOverrides?.name ?? field.config.label}
              type={fieldOverrides?.type ?? normalizeFieldType(field.type)}
              description={
                fieldOverrides?.description ??
                normalizeFieldDescription(field.config.placeholder)
              }
              isRequired={fieldOverrides?.isRequired ?? isFieldRequired(field)}
            />
          )
        })}
      </FieldsTable>
    )
  )
}
