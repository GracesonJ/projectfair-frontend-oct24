import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Edit() {
  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                  <input id='projectImage' type="file" style={{display:"none"}} />
                  <img src="https://m.media-amazon.com/images/I/71sKzRQtXtL.png" alt="" className='img-fluid' />
                </label>
              </div>
              <div className="col-md-6">
                  <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Title' />
                  </div>
                  <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Language' />
                  </div>
                  <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Github' />
                  </div>
                  <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Website' />
                  </div>
                  <div className="mb-3">
                    <textarea rows={5} className='form-control' placeholder='Overview'> </textarea>
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