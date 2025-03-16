import React, { useEffect, useState } from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import photo from '../assets/image.svg'
import ProjectCard from '../Components/ProjectCard'
import { getHomeProjectAPI } from '../services/allApi'

function Home() {

  const [isLogin, setIsLogin] = useState(false)
  const [homeProjects, SetHomeProjects] = useState([])

  const getHomeProjects = async () => {
    const result = await getHomeProjectAPI()
    // console.log(result);
    SetHomeProjects(result.data)

  }
  console.log(homeProjects);


  useEffect(() => {
    getHomeProjects()
    if (sessionStorage.getItem("token")) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])

  return (
    <>
      <div style={{ height: "100vh" }} className='bg-success p-5'>
        <div className="container-fluid mt-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <h1 style={{ fontSize: "70px" }}>Project Fair</h1>
              <p>One stop destination for all software development Projects</p>

              {isLogin == false ? <Link to={'/login'}><button className='btn text-light p-1 mt-3'>Get Started <FontAwesomeIcon icon={faArrowRight} /></button></Link> :
                <Link to={'/dashboard'}><button className='btn text-light p-1 mt-3'>Manage Projects <FontAwesomeIcon icon={faArrowRight} /></button></Link>}

            </div>
            <div className="col-md-6 mt-5 mt-md-0 d-flex justify-content-center">
              <img src={photo} alt="no img" className='w-75' />
            </div>
          </div>
        </div>
      </div>

      {/* Explore our Project */}

      <div>
        <h1 className='text-center mt-5'>Explore our Projects</h1>
        <div className="container mt-5">
          <div className="row">

            {homeProjects?.map((item) => (
              <div className="col-md-4">
                <ProjectCard  projects={item} />
              </div>
            ))
            }

          </div>
        </div>
        <Link to={'/projects'} className='text-danger'><p className='text-center my-5'>See more Projects...</p></Link>
      </div>

    </>
  )
}

export default Home