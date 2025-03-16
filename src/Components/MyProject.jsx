import React, { useDebugValue, useEffect, useState } from 'react'
import AddProject from '../Components/AddProject'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import Edit from '../Components/Edit'
import { getUserProjectsAPI } from '../services/allApi'
import { Link } from 'react-router-dom'

function MyProject() {

  const [userProject, setUserProject] = useState([])

  const getUserProject = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await getUserProjectsAPI(reqHeader)
      console.log(result.data);
      setUserProject(result.data)

    }
  }
  console.log(userProject);

  useEffect(() => {
    getUserProject()
  }, [])

  return (
    <>
      <div className="p-5 shadow w-100">
        <div className="d-flex justify-content-between mt-4">
          <h3>My Projects</h3>
          <AddProject />
        </div>

        {userProject ?
          userProject?.map((item) => (
            <div className="p-3 bg-light mt-4 rounded d-flex align-items-center justify-content-between">
              <h5>{item?.title}</h5>
              <div className="d-flex mt-2">
                <Edit />
                <Link target='_blank' to={item?.github}><FontAwesomeIcon icon={faGithub} className='me-4 text-warning' /></Link>
                <Link target='_blank' to={item?.website}> <FontAwesomeIcon icon={faGlobe} className='me-4 text-success' /></Link>
                <FontAwesomeIcon icon={faTrash} className='me-4 text-danger' />
              </div>
            </div>
          ))

          :
          <h1 className='text-danger text-center mt-3'>No Projects Added</h1>}

      </div>

    </>
  )
}

export default MyProject