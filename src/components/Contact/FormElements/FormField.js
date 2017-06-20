import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const FormTextAreaField = ({ field, input, type, label, meta }) => {
  const _error = meta.touched && meta.error || false
  const _success = meta.touched && !meta.error || false
  return (<div className={classNames('form-group', { 'has-error': _error, 'has-success': _success })}>
    <label>{field.label}</label>
    <div>
      <textarea
        {...input}
        className='form-control'
        label={label}
        placeholder={label}
        >{field.value}
      </textarea>
      {meta.touched && ((meta.error && <span>{meta.error}</span>))}
    </div>
  </div>)
}
FormTextAreaField.propTypes = {
  field: PropTypes.object,
  help: PropTypes.object,
  input: PropTypes.any,
  type: PropTypes.any,
  label: PropTypes.any,
  meta: PropTypes.object,
  children: PropTypes.any
}

export const FormSelectField = ({ field, input, type, label, meta }) => {
  const _options = field.options.map((option, index) => {
    return (<option
      key={index}
      value={option.label || index}
      >
      {option.label}
    </option>)
  })
  const _error = meta.touched && meta.error || false
  const _success = meta.touched && !meta.error || false
  return (<div className={classNames('form-group', { 'has-error': _error, 'has-success': _success })}>
    <label>{field.label}</label>
    <div>
      <select
        {...input}
        className='form-control'
        label={label}
        placeholder={label}
        onBlur={() => input.onBlur(input.value)}
        >
        <option>--- PICK A SUBJECT ---</option>
        {_options}
      </select>
      {meta.touched && ((meta.error && <span>{meta.error}</span>))}
    </div>
  </div>)
}
FormSelectField.propTypes = {
  field: PropTypes.object,
  help: PropTypes.object,
  input: PropTypes.any,
  type: PropTypes.any,
  label: PropTypes.any,
  meta: PropTypes.object,
  children: PropTypes.any
}

const FormField = ({ field, input, type, label, meta }) => {
  const _error = meta.touched && meta.error || false
  const _success = meta.touched && !meta.error || false
  return (<div className={classNames('form-group', { 'has-error': _error, 'has-success': _success })}>
    <label>{field.label}</label>
    <div>
      <input {...input} className='form-control' label={label} placeholder={label} type={type} />
      {meta.touched && ((meta.error && <span>{meta.error}</span>))}
    </div>
  </div>)
}
FormField.propTypes = {
  field: PropTypes.object,
  help: PropTypes.object,
  input: PropTypes.any,
  type: PropTypes.any,
  label: PropTypes.any,
  meta: PropTypes.object,
  children: PropTypes.any
}

export default FormField
