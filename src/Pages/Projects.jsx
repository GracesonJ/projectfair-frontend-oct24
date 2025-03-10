import React from 'react'
import Header from '../Components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (

    <>
      <Header />
      <div className="my-5">
        <h1 className='text-center'>All Projects</h1>
        <div className="mt-5">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 d-flex">
              <input type="text" className='form-control shadow' placeholder='Technoligies' />
              <FontAwesomeIcon style={{ color: "lightgrey", marginTop: "11px", marginLeft: "-30px" }} icon={faSearchengin} />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
        <div className="container mt-5 p-5">
          <div className="row mt-5">
            <div className="col-md-3"><ProjectCard /></div>
            <div className="col-md-3"><ProjectCard /></div>
            <div className="col-md-3"><ProjectCard /></div>
            <div className="col-md-3"><ProjectCard /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects