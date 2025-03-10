import React from 'react'
import AddProject from '../Components/AddProject'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import Edit from '../Components/Edit'

function MyProject() {
  return (
    <>
      <div className="p-5 shadow w-100">
        <div className="d-flex justify-content-between mt-4">
          <h3>My Projects</h3>
          <AddProject />
        </div>

        <div className="p-3 bg-light mt-4 rounded d-flex align-items-center justify-content-between">
          <h5>Project Name</h5>
          <div className="d-flex mt-2">
            <Edit/>
            <FontAwesomeIcon icon={faGithub} className='me-4 text-warning' />
            <FontAwesomeIcon icon={faGlobe} className='me-4 text-success' />
            <FontAwesomeIcon  icon={faTrash} className='me-4 text-danger' />
          </div>
        </div>
      </div>

    </>
  )
}

export default MyProject