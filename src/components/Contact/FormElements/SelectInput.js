import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { FormSelectField } from './FormField'

export const SelectInput = ({ field }) => {
  return (
    <Field
      component={FormSelectField}
      className='form-control'
      field={field}
      name={field.name}
      type={field.type}
      placeholder={field.placeholder || field.label}
    />
  )
}

SelectInput.propTypes = {
  field: PropTypes.object.isRequired
}

export default SelectInput
