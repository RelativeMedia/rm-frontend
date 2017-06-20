import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import renderInput from './FormField'

export const TextInput = (props) => {
  const { field } = props
  return (
    <Field
      field={field}
      component={renderInput}
      name={field.name}
      type={field.type}
      label={field.placeholder || field.label}
    />
  )
}

TextInput.propTypes = {
  field: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

export default TextInput
