import React from 'react'
import './css/main.css';
import { Container , Row , Col , Buuton  , Badge , Card ,CardText, CardFooter , CardTitle , CardBody} from 'reactstrap'
import { Link } from 'react-router-dom';
import { HiChatAlt2 } from "react-icons/hi";
import { MdLocalHospital } from "react-icons/md";
const Main_page=()=>{
    return(
        <>
          <Row>
             <Col className="col-12 col-md-4 col-lg-4">
                left
            </Col>
            {/* second row */}
             <Col className="col-12 col-md-4 col-lg-4">
                <div className="middles">
                  <header>
                    header part
                  </header>
                  <Container className="mt-5">
                      <Row>
                        <Col className="col-6">
                          <Card>
                            <Link to="bot">
                                <CardBody className="text-center">
                                <CardTitle>
                                  <span className="emo">
                                   <HiChatAlt2/>
                                  </span>
                                </CardTitle>
                                <CardText><small className="text-muted">Chat with bot</small></CardText>
                              </CardBody>
                            </Link>
                        </Card>
                        </Col>

                          {/* second col */}
                          <Col className="col-6">
                          <Card>
                          <CardBody className="text-center">
                            <CardTitle>
                                <span className="emo"> 
                                  <MdLocalHospital/>
                                </span>
                            </CardTitle>
                            <CardText>connect with a Doctor </CardText>
                          </CardBody>
                        </Card>
                        </Col>

                        {/* third card and col */}
                      </Row>
                      <Row>
                      <Col className="col-12 mt-3">
                          <Card>
                          <CardBody className="text-center">
                            <CardTitle>
                              Chat bot
                            </CardTitle>
                            <CardText>chat with bot</CardText>
                          </CardBody>
                        </Card>
                        </Col>
                      </Row>
             
                  </Container>
                </div>
              </Col>
             {/* third col */}
             <Col className="col-12 col-md-4 col-xl-4">
                  right
              </Col>
          </Row>
          

        </>
    )
}
export default Main_page;