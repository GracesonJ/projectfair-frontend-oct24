import React from 'react'
import { faFacebook, faInstagram, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <>

      <div className="p-5 bg-success mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h3 className='text-light'>Project Fair <FontAwesomeIcon icon={faStackOverflow} className='me-5' /></h3>
              <p className='mt-3' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eveniet aliquam harum! Veniam ipsum voluptatibus consequuntur dolorem aspernatur. Aliquam reiciendis dolores dignissimos aperiam praesentium suscipit harum! Qui nisi aut consectetur?</p>
            </div>
            <div className="col-md-2 d-md-flex justify-content-center">
              <div>
                <h3 className='text-light'>Guides</h3>
                <p className='mt-5'>Home</p>
                <p>Project</p>
                <p>Dashboard</p>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2 d-md-flex justify-content-center">
              <div>
                <h3 className='text-light'>Links</h3>
                <p className='mt-5'>React</p>
                <p>React Bootstrap</p>
                <p>Bootstrap</p>
              </div>
            </div>
            <div className="col-md-3">
              <h3 className='text-light'>Contact Us</h3>
              <div className='d-flex mt-3'>
                <input type="text" placeholder='Email Id' className='form-control rounded-0' />
                <button className='btn btn-warning ms-3 rounded-0'>Subscribe</button>
              </div>
              <div className="d-flex mt-4 justify-content-between">
                <FontAwesomeIcon icon={faInstagram} className='fa-2x text-light' />
                <FontAwesomeIcon icon={faTwitter} className='fa-2x text-light' />
                <FontAwesomeIcon icon={faFacebook} className='fa-2x text-light' />
                <FontAwesomeIcon icon={faLinkedinIn} className='fa-2x text-light' />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer