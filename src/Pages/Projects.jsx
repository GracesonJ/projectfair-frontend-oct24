import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'
import ProjectCard from '../Components/ProjectCard'
import { getAllProjectsAPI } from '../services/allApi'

function Projects() {
  const [token, setToken] = useState("")
  const [allProjects, setAllProjects] = useState([])
  const [searchKey, setSearchKey] = useState("")

  const getAllProjects = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await getAllProjectsAPI(searchKey, reqHeader)
      // console.log(result.data);
      setAllProjects(result.data)

    }
  }
  console.log(allProjects);
  console.log(searchKey);

  useEffect(() => {
    getAllProjects()
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [searchKey])

  return (
    <>
      <Header />
      {token ?
        <div className="my-5 container">
          <h1 className='text-center'>All Projects</h1>
          <div className="mt-5">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 d-flex">
                <input onChange={(e) => setSearchKey(e.target.value)} type="text" className='form-control shadow' placeholder='Technoligies' />
                <FontAwesomeIcon style={{ color: "lightgrey", marginTop: "11px", marginLeft: "-30px" }} icon={faSearchengin} />
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
          <div className="container mt-5 p-4">
            <div className="row mt-5">
              {
                allProjects?.map((item) => (
                  <div className="col-md-3"><ProjectCard projects={item} /></div>
                ))
              }
            </div>
          </div>
        </div>
        :
        <h1 className='text-danger text-center'>Please Login to See more Projects</h1>}
    </>
  )
}

export default Projects