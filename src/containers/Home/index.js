import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import { connect } from 'react-redux';
const Element = Scroll.Element;

import Splash from 'components/Splash';
// import Contact from 'components/Contact'
// import Project from 'components/Project'
// import About from 'components/About'
// import Services from 'components/Services'
import Services from 'services';

export class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      height: window.innerHeight - 90
    }
  }

  static propTypes = {
    isLoading: PropTypes.any,
    hasResults: PropTypes.any,
    form: PropTypes.object.isRequired,
    contact: PropTypes.object.isRequired
  }

  componentDidMount () {
    const height = window.innerHeight
    this.setState({ height })
    // const { getProjects } = this.props
    // getProjects({ active: true, limit: 6 })
  }

  // _getMoreProjects = () => {
  //   const { getProjects, project } = this.props
  //   getProjects({
  //     active: true,
  //     limit: 6,
  //     page: project.get('pager').page + 1
  //   })
  // }

  handleContactSubmit = () => {
    const {
      contactSubmit,
      form: {
        ContactForm: {
          values
        }
      }
    } = this.props;

    contactSubmit(values);
  }

  render () {
    const {
      contact,
      project
    } = this.props;

    const {
      height
    } = this.state;

    return (<div className='HomeContainer'>
      <div className='container-fluid'>
        <div className='row'>
          <Element id='splash-container' name='home' className='element' style={{ height }}>
            <Splash id={1} />
          </Element>
        </div>
        <div className='row'>
          <Element id='about-container' name='about' className='element' />
        </div>
        <div className='row'>
          <Element id='contact-container' name='contact' className='element' />
        </div>
      </div>
    </div>)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  contactSubmit: (form) => dispatch(Services.Contact.submit(form))
})

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  hasResults: state.hasResults,
  contact: state.contact,
  form: state.form
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
