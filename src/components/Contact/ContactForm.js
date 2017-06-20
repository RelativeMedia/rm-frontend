import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'

import log from 'middleware/logger'

import { TextInput, TextAreaInput, EmailInput, SelectInput } from './FormElements'
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
    type: 'num'
  },
  message: {
    name: 'message',
    label: 'Message',
    type: 'textarea'
  },
  subject: {
    name: 'subject',
    label: 'Subject',
    type: 'select',
    options: [
      { label: 'Pre Sales Inquiry' },
      { label: 'Support Inquiry' },
      { label: 'Web Development Quote' },
      { label: 'Other' }
    ]
  }
}

export class ContactForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSubmitting: false,
      isSubmitted: false
    }
  }
  static propTypes = {
    onSubmit: PropTypes.func,
    contact: PropTypes.object,
    valid: PropTypes.bool,
    dirty: PropTypes.bool,
    pristine: PropTypes.bool,
    invalid: PropTypes.bool,
    reset: PropTypes.func
  }

  _handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit()
  }

  render () {
    const { valid, invalid, pristine, dirty, onSubmit, reset, contact } = this.props
    return (<div className='ContactForm'>
      <form method='post' onSubmit={this._handleSubmit}>
        <div className='row'>
          <div className='col-xs-12 col-sm-6'>
            <TextInput field={fields.firstName} />
          </div>
          <div className='col-xs-12 col-sm-6'>
            <TextInput field={fields.lastName} />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <EmailInput field={fields.email} />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <TextInput field={fields.phone} />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <SelectInput field={fields.subject} />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <TextAreaInput field={fields.message} />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <button
              className='btn btn-lg btn-block btn-primary'
              onClick={this._handleSubmit}
              disabled={contact.get('isSubmitting') || invalid}>
              {(contact.get('isSubmitting'))
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
    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(values.email)) {
      errors.phone = 'Invalid Phone Number'
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
