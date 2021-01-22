import React, {useState} from 'react'
import './css/main.css';
import { Container , Row , Col , Button  , Badge , Card ,CardText, CardFooter , CardTitle , CardBody} from 'reactstrap'
import { Link } from 'react-router-dom';
import { HiChatAlt2 } from "react-icons/hi";
import { MdLocalHospital } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaUserNurse } from "react-icons/fa";
import {MdChatBubble} from "react-icons/md"

const Main_page=()=>{
  //get the element of sidebar and show it 
    let [open , setOpen]=useState('none')
    //now mute the sidebar
    const close=()=>{
      document.querySelector('.sidebar').style.display='none'
      setOpen('none')
    }

    

    return(
        <div className="parent">
          <Row>
             <Col className="col-12 col-md-4 col-lg-4 first">
                <Container>
                    <h4 className="text-center">FEATURES</h4>
                  <Row>
                     <Col className="col-12 ">
                        <Card className="features card-1">
                        <div>
                            <FaUserNurse/>
                            <small className="ml-2 titleName">
                              CONNECT WITH S DOCTOR
                            </small>
                            <br/>
                            <small>
                               You can connect with a doctor , to make your complains 
                            </small>

                        </div>
                        </Card>

                        
                    </Col>
                          {/* other col */}
                     <Col className="col-12 mt-3">
                        <Card className="features card-2">
                            <div>
                               <MdChatBubble/>
                               <small className="titleName ml-2">
                                    CHAT WITH HEALTH BOT
                                 </small>  
                                 <br/>
                                 <small className="ml-2">
                                    You can socialise with our health bot to learn more health tips 
                                 </small>
                            </div>
                         

                        </Card> 

                     </Col>
                      {/* third col */}
                     <Col className="col-12 mt-3 last">
                        <Card className="features card-2">
                            <div>
                               <MdChatBubble/>
                               <small className="titleName ml-2">
                                    CHAT WITH HEALTH BOT
                                 </small>  
                                 <br/>
                                 <small className="ml-2">
                                    You can socialise with our health bot to learn more health tips 
                                 </small>
                            </div>
                         

                        </Card> 
                     </Col>
                  </Row>


                </Container>

            </Col>
            {/* second row */}
             <Col className="col-12 col-md-4 col-lg-4">
                <div className="middles">
                  <div className="sidebar" style={{display:open}}>
                    <h3 onClick={close}>&times;</h3>
                     <ul>
                      
                       <li> Meet</li>
                       <li> Connect </li>
                       <li> Chat </li>
                       <li> About</li>
                     </ul>
                  </div>
                  <header>
                      <h6 onClick={()=>setOpen('block')}><BiMenuAltLeft/></h6>
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
                                  <br/>
                                  <small className="text-muted">Chat with bot</small>
                                </CardTitle>
                               
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
                                </span> <br/>
                                <small className="text-muted">Connect with a Doctor </small>
                            </CardTitle>
                        
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
          

        </div>
    )
}
export default Main_page;