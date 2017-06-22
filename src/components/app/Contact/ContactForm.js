import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import Form from 'components/form'
import './contact.scss'

const fields = {
  firstName: {
    name: 'firstName',
    label: 'First Name',
    type: 'text'
  },
  lastName: {
    name: 'lastName',
    label: 'Last Name',
    type: 'text'
  },
  email: {
    name: 'email',
    label: 'Email Address',
    type: 'email'
  },
  phone: {
    name: 'phone',
    label: 'Phone Number',
    type: 'number'
  },
  message: {
    name: 'message',
    label: 'Message',
    type: 'textarea'
  },
  subject: {
    name: 'subject',
    label: 'Subject',
    type: 'select'
  }
}

class ContactForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    contact: PropTypes.object,
    valid: PropTypes.bool,
    dirty: PropTypes.bool,
    pristine: PropTypes.bool,
    invalid: PropTypes.bool,
    reset: PropTypes.func,
    isSubmitting: PropTypes.bool
  }

  _handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit()
  }

  render () {
    const { valid, invalid, pristine, dirty, onSubmit, reset, isSubmitting } = this.props
    return (<div className='ContactForm'>
      <form method='post' onSubmit={this._handleSubmit}>
        <div className='row'>
          <div className='col-xs-12 col-sm-6'>
            <Field
              component={Form.TextField}
              name='firstName'
              label='First Name'
            />
          </div>
          <div className='col-xs-12 col-sm-6'>
            <Field
              component={Form.TextField}
              name='lastName'
              label='Last name'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <Field
              component={Form.EmailField}
              name='email'
              label='Email Address'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <Field
              component={Form.PhoneField}
              name='phone'
              label='Phone Number'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <Field
              component={Form.SelectField}
              name='subject'
              label='Subject'
              options={[
                { label: 'Pre Sales Inquiry' },
                { label: 'Support Inquiry' },
                { label: 'Web Development Quote' },
                { label: 'Other' }
              ]}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <Field
              component={Form.TextAreaField}
              name='message'
              label='Message'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <button
              type='submit'
              className='btn btn-lg btn-block btn-primary'
              disabled={isSubmitting || invalid}>
              {(isSubmitting)
                ? <i className='fa fa-circle-o-notch fa-spin fa-fw' />
                : 'Send an email'
              }
            </button>
          </div>
        </div>
      </form>
    </div>)
  }
}
export default reduxForm({
  form: 'ContactForm',
  touchOnChange: true,
  validate: (values) => {
    let errors = {}

    if (!values.firstName) {
      errors.firstName = 'First Name is required.'
    }

    if (!values.lastName) {
      errors.lastName = 'Last Name is required'
    }

    if (!values.phone) {
      errors.phone = 'Phone Number is required'
    }

    if (values.phone || values.phone === '') {
      const sanitizedPhone = values.phone.replace(/[^0-9]/g, '')
      if (values.phone !== '' && !/^[2-9]\d\d[2-9]\d{6}$/i.test(sanitizedPhone)) {
        errors.phone = 'Invalid Phone Number. Please only enter numbers!'
      }
    }

    if (!values.email) {
      errors.email = 'Email Address is required'
    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    if (!values.subject || values.subject === null) {
      errors.subject = 'A subject is required'
    }

    if (!values.message) {
      errors.message = 'A message is required'
    }

    return errors
  }
})(ContactForm)
