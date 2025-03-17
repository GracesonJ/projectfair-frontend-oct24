import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { serverURL } from '../services/serverUrl';

function Edit({projects}) {

  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState("")
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // console.log(projects);
    const [projectDetails, setProjectDetails] = useState({
      title: projects?.title,
      language: projects?.language,
      github: projects?.github,
      website: projects?.website,
      overview: projects?.overview,
      projectImage: ""
    })
    // console.log(projectDetails);

    const handleFile = (e)=>{
      // console.log(e.target.files);
      setProjectDetails({...projectDetails, projectImage: e.target.files[0]})
    }
    useEffect(()=>{
      if(projectDetails.projectImage){
        setPreview(URL.createObjectURL(projectDetails.projectImage))
      }
    }, [projectDetails.projectImage])
  return (
    <>
    <FontAwesomeIcon onClick={handleShow} icon={faPenToSquare} className='text-info me-3'/>
    <Modal show={show} onHide={handleClose} centered size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="projectImage">
                  <input onChange={(e)=>handleFile(e)} id='projectImage' type="file" style={{display:"none"}} />
                  <img src={preview ? preview : `${serverURL}/upload/${projects?.projectImage}`} alt="" className='img-fluid' />
                </label>
              </div>
              <div className="col-md-6">
                  <div className="mb-3">
                    <input onChange={(e)=>setProjectDetails({...projectDetails, title: e.target.value})} value={projectDetails.title} type="text" className='form-control' placeholder='Title' />
                  </div>
                  <div className="mb-3">
                    <input onChange={(e)=>setProjectDetails({...projectDetails, language: e.target.value})} value={projectDetails.language} type="text" className='form-control' placeholder='Language' />
                  </div>
                  <div className="mb-3">
                    <input onChange={(e)=>setProjectDetails({...projectDetails, github: e.target.value})} value={projectDetails.github} type="text" className='form-control' placeholder='Github' />
                  </div>
                  <div className="mb-3">
                    <input onChange={(e)=>setProjectDetails({...projectDetails, website: e.target.value})} value={projectDetails.website} type="text" className='form-control' placeholder='Website' />
                  </div>
                  <div className="mb-3">
                    <textarea onChange={(e)=>setProjectDetails({...projectDetails, overview: e.target.value})} value={projectDetails.overview} rows={5} className='form-control' placeholder='Overview'> </textarea>
                  </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning me-3" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
           Save Project
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Edit