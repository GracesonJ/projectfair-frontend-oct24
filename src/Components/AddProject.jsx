import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProjectAPI } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';

function AddProject() {

  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState("")
  console.log(preview);
  const [token, setToken] = useState("")

  const [key , setKey] = useState(1)

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
    if(key == 1){
      setKey(0)
    }else{
      setKey(1)
    }
  }

  const handleAdd = async () => {
    const { title, language, github, website, overview, projectImage } = projectDetails
    if(! title || !language || !github|| !website|| !overview || !projectImage ){
      alert(`Fill the form Completly`)
    }else{
      // append() - if the request contain uploaded content the reqBody should be created with the help of uppend method in form-data class.  in short reqBody should be a formData

      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("language", language)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("overview", overview)
      reqBody.append("projectImage", projectImage)

      if(token){
        const reqHeader = {
          "Content-Type" : "multipart/form-data",
          "Authorization" : `Bearer ${token}` 
        }
          // api call
        const result = await addProjectAPI(reqBody, reqHeader)
        console.log(result);
        if(result.status == 200){
          toast.success(`Project added successfully`)
          setTimeout(()=>{
            handleClose()
          },2000)
        }else if(result.status == 406){
          toast.warning(result.response.data)
        }else{
          toast.error(`Something went wrong`)
        }
      }  
    }
  }

useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setToken(sessionStorage.getItem("token"))
  }
},[])

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
                <label htmlFor="projectImage" className='mb-3'>
                  <input key={key} id='projectImage' type="file" onChange={(e) => handleFile(e)} style={{ display: "none" }} />
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
        <ToastContainer  position="top-center" theme="colored" autoClose={2000}/>
      </Modal>
    </>
  )
}

export default AddProject