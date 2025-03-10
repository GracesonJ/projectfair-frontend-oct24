import React from 'react'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons/faPowerOff';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>

      <Navbar className="bg-success d-flex align-items-center">
        <Container>
          <Link to={'/'} style={{ textDecoration: "none" }}>
            <Navbar.Brand className='text-light mx-5'>
              <span className='fs-3'> <FontAwesomeIcon className='me-3 ' icon={faStackOverflow} />Project Fair</span>
            </Navbar.Brand>
          </Link>
          <button className='btn btn-warning ms-auto rounded-0'><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</button>
        </Container>
      </Navbar>

    </>
  )
}

export default Header