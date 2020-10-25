import React from 'react'
import PropTypes from 'prop-types'
import Scroll from 'react-scroll'

const Element = Scroll.Element

import ContactForm from './ContactForm'
const ContactComponent = ({ contact, isSubmitting, onSubmit }) => (<div className='ContactComponent'>
  <div className='container'>
    <div className='row'>
        <div className='col-lg-12'>
          <h1>Contact</h1>
          <div className='contact-body'>
            <div className='row'>
              <div className='col-md-4 col-md-offset-1 contact-left'>
                <p>Hey there! If you have a non urgent question or comment feel free to fill out the form to the right and i'll get back to you as soon as I can! Otherwise, if it's an emergency feel free to give me a call for immediate help.</p>
                <hr className='contact-separator' />
                <ul id='contact-list'>
                  <li>
                    <span id='contact-name'>
                      <strong>Mike DeVita</strong>
                    </span>
                  </li>
                  <li>
                    <strong>Email:</strong> <a target='_blank' href='mailto:mike@relative.media'>mike@relative.media</a>
                  </li>
                  <li>
                    <strong>Phone:</strong> [480] 359-1902
                  </li>
                </ul>
                <ul id='contact-icons'>
                  <li>
                    <a target='_blank' href='https://github.com/RelativeMedia'>
                      <i className='fa fa-3x fa-github-square' />
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href='https://twitter.com/relativemediaaz'>
                      <i className='fa fa-3x fa-twitter-square' />
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href='https://www.facebook.com/relativemediaaz'>
                      <i className='fa fa-3x fa-facebook-square' />
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-md-6 pull-right'>
                {(isSubmitting || contact.isSubmitted)
                  ? <p className='well'>Thanks for sending me an email, I will get back to you shortly.</p>
                  : <ContactForm isSubmitting={isSubmitting} onSubmit={onSubmit} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>)
ContactComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  contact: PropTypes.object
}

export default ContactComponent
