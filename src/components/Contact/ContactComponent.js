import React from 'react'
import PropTypes from 'prop-types'
import Scroll from 'react-scroll'

const Element = Scroll.Element

import ContactForm from './ContactForm'
export const ContactComponent = ({ contact, onSubmit }) => (
  <Element id='contact-container' name='contact' className='element'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <h1>Contact</h1>
          <div className='contact-body'>
            <div className='row'>
              <div className='col-md-4 col-md-offset-1 contact-left'>
                <ul id='contact-list'>
                  <li><strong>Mike DeVita</strong></li>
                  <li><strong>email:</strong> c@relative.media</li>
                  <li><strong>phone:</strong> [602] 541-4137</li>
                </ul>
                <ul id='contact-icons'>
                  <li>
                    <a href='https://github.com/RelativeMedia'>
                      <i className='fa fa-3x fa-github-square' />
                    </a>
                  </li>
                  <li>
                    <a href='https://plus.google.com/113429355531109170417' rel='publisher'>
                      <i className='fa fa-3x fa-google-plus-square' />
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/gorelative'>
                      <i className='fa fa-3x fa-twitter-square' />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.facebook.com/gorelative'>
                      <i className='fa fa-3x fa-facebook-square' />
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-md-6 pull-right'>
                {(contact.isSubmitting || contact.isSubmitted)
                  ? <p className='well'>Thanks for sending me an email, I will get back to you shortly.</p>
                  : <ContactForm contact={contact} onSubmit={onSubmit} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Element>)
ContactComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contact: PropTypes.object
}

export default ContactComponent
