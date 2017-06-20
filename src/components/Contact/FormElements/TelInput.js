import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import renderInput from './FormField'

export const TelInput = ({ field }) => {
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

TelInput.propTypes = {
  field: PropTypes.object.isRequired,
  help: PropTypes.object,
  inputProps: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

export default TelInput
