import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import { FormTextAreaField } from './FormField'

export const TextAreaInput = ({ field }) => {
  return (
    <Field
      component={FormTextAreaField}
      className='form-control'
      field={field}
      name={field.name}
      type={field.type}
      placeholder={field.placeholder || field.label}
    />
  )
}

TextAreaInput.propTypes = {
  field: PropTypes.object.isRequired,
  help: PropTypes.object,
  inputProps: PropTypes.object,
  onChange: PropTypes.func
}

export default TextAreaInput
