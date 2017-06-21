import React from 'react'
import PropTypes from 'prop-types'

import './project.scss'
const ProjectComponent = ({ isLoading, projects, loadMoreProjects }) => {
  const _projects = projects.map((project, index) => {
    return (<div key={index} className='ProjectItem col-lg-4 text-center'>
      <div className='ProjectItemThumbnailImage'>
        <img src={project.thumbnailImage.src || null} className='thumbnailImage img-responsive' />
      </div>
      <div className='ProjectDetailsContainer'>
        <div className='ProjectDetails'>
          <h4>{project.name}</h4>
          <p>{project.shortDesc}</p>
        </div>
      </div>
    </div>)
  })

  const _loadMoreProjects = (event) => {
    event.preventDefault()
    loadMoreProjects()
  }

  return (<div className='ProjectComponent'>
    <div className='container'>
      <div className='row'>
        <h1>Projects</h1>
      </div>
      <div className='row'>
        {_projects}
      </div>
      <div className='row'>
        <div className='LoadMore text-center'>
          {(!isLoading)
          ? <a onClick={_loadMoreProjects}>
              <strong>Load More</strong>
            </a>
          : <i className='fa fa-circle-o-notch fa-spin fa-fw' />
        }
        </div>
      </div>
    </div>
  </div>)
}

ProjectComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  hasResults: PropTypes.bool.isRequired,
  projects: PropTypes.object.isRequired,
  loadMoreProjects: PropTypes.func.isRequired
}
export default ProjectComponent
