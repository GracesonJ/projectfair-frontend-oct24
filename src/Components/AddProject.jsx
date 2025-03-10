import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProject() {

  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState("")
  console.log(preview);

  const [projectDetails, setProjectDetails] = useState({
    title: "",
    language: "",
    github: "",
    website: "",
    overview: "",
    projectImage: ""
  })
  console.log(projectDetails);

  const handleFile = (e) => {
    // console.log(e.target.files[0]);
    setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })
  }

  useEffect(() => {
    if (projectDetails.projectImage) {
      setPreview(URL.createObjectURL(projectDetails.projectImage))
    }
  }, [projectDetails.projectImage])

  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);
  const handleCancel = () => {
    setProjectDetails({
      title: "",
      language: "",
      github: "",
      website: "",
      overview: "",
      projectImage: ""
    })
    setPreview("")
  }

  const handleAdd = () => {
    const { title, language, github, website, overview, projectImage } = projectDetails
    if(! title || !language || !github|| !website|| !overview || !projectImage ){
      alert(`Fill the form Completly`)
    }else{
      // api call
      alert(`succesfull`)
    }
  }
  return (
    <>
      <button onClick={handleShow} className='btn btn-success rounded-0 px-4'>Add Project</button>
      <Modal show={show} onHide={handleClose} centered size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Add Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="projectImage">
                  <input id='projectImage' type="file" onChange={(e) => handleFile(e)} style={{ display: "none" }} />
                  <img src={preview ? preview : "https://m.media-amazon.com/images/I/71sKzRQtXtL.png"} alt="" className='img-fluid' />
                </label>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <input type="text" value={projectDetails.title} onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} className='form-control' placeholder='Title' />
                </div>
                <div className="mb-3">
                  <input type="text" value={projectDetails.language} onChange={(e) => setProjectDetails({ ...projectDetails, language: e.target.value })} className='form-control' placeholder='Language' />
                </div>
                <div className="mb-3">
                  <input type="text" value={projectDetails.github} onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })} className='form-control' placeholder='Github' />
                </div>
                <div className="mb-3">
                  <input type="text" value={projectDetails.website} onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })} className='form-control' placeholder='Website' />
                </div>
                <div className="mb-3">
                  <textarea rows={5} value={projectDetails.overview} onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })} className='form-control' placeholder='Overview'> </textarea>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning me-3" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAdd}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProject