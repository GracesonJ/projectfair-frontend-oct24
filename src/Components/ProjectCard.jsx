import React from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: '100%' }}>
        <Card.Img onClick={handleShow} variant="top" src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" />
        <Card.Body>
          <Card.Title className='text-center'>Project Name</Card.Title>
        </Card.Body>
      </Card>


      <Modal show={show} onHide={handleClose} centered size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Project Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <img style={{width:"100%"}} src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" alt="" />
              </div>
              <div className="col-md-6">
                <h4>Description</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, beatae! Deleniti, quisquam non ex maxime porro sit saepe minima consequatur temporibus facere earum aut placeat quo, aspernatur enim, beatae commodi.</p>
                <h4>Technologies</h4>
                <p>HTML</p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex">
            <Link><FontAwesomeIcon className='fa-2x me-3' icon={faGithub} /></Link>
            <Link><FontAwesomeIcon className='fa-2x me-3' icon={faGlobe} /></Link>
          </div>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default ProjectCard