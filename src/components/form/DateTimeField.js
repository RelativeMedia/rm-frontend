import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
import DateTime from 'react-datetime'

const DateTimeField = ({ tooltip, tooltipPlacement, disabled, input, label, placeholder, meta: {valid, touched, error} }) => {
  const classes = classNames('form-group', {
    'has-error': (touched && !valid),
    'has-success': (touched && valid)
  })

  return (<div className={classes}>
    {label &&
        <label htmlFor={input.name}>{label}</label>
    }
    {
      (tooltip)
        ? <OverlayTrigger placement={tooltipPlacement || 'right'} overlay={<Tooltip id={`tooltip-${input.name}`}>{tooltip}</Tooltip>}>
            <DateTime
              name={input.name}
              placeholder={placeholder || label}
              inputProps={{
                name: input.name,
                placeholder: placeholder || label
              }}
              onChange={param => input.onChange(param)}
              disabled={disabled}
            />
          </OverlayTrigger>
        : <DateTime
            name={input.name}
            placeholder={placeholder || label}
            inputProps={{
              name: input.name,
              placeholder: placeholder || label
            }}
            onChange={param => input.onChange(param)}
            disabled={disabled}
          />
    }
    {(!valid && touched) &&
      <p className='help-block'>{error}</p>
    }
  </div>)
}

DateTimeField.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  tooltip: PropTypes.string,
  tooltipPlacement: PropTypes.string
}
export default DateTimeField
