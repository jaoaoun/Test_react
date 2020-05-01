import React from 'react'
import { Col, Row, Container } from 'reactstrap'
import '../../css/indexApp.css'

export const AboutUs = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img src={require('../../img/kmi.jpg')} alt="logo" className="kmitl-logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <img src={require('../../img/Por.jpg')} alt="logo" className="dev" />
              <p className="NameDev">NITHI SEMANUANG</p>
              <p className="NameDev">Hardware Developer</p>
            </div>
          </Col>
          <Col>
            <div>
              <img src={require('../../img/Nine.jpg')} alt="logo" className="dev" />
              <p className="NameDev">PAPON PROMMOOL</p>
              <p className="NameDev">Administration / Document Controller</p>
            </div>
          </Col>
          <Col>
            <div>
              <img src={require('../../img/O.jpg')} alt="logo" className="dev" />
              <p className="NameDev">SORAYUTH CHAROENSRISAN</p>
              <p className="NameDev">Software Developer</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutUs
