import React from 'react'
import MyProject from '../Components/MyProject'
import Profile from '../Components/Profile'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../Components/Header'

function Dashboard() {
  return (
    <>
      <Header />
      <div className="p-4">
        <h3>Welcome <span className='text-warning'>User</span></h3>
        <Container>
          <Row>
            <Col sm={12} md={8}>
              <MyProject />
            </Col>
            <Col sm={12} md={4}>
              <Profile />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Dashboard