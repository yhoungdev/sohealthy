import React, {useState} from 'react'
import './css/main.css';
import { Container , Row , Col , Button  , Badge , Card ,CardText, CardFooter , CardTitle , CardBody} from 'reactstrap'
import { Link } from 'react-router-dom';
import { HiChatAlt2 } from "react-icons/hi";
import { MdLocalHospital } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaUserNurse } from "react-icons/fa";
import {MdChatBubble} from "react-icons/md";
import {RiArticleFill} from 'react-icons/ri'

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
                        <Link to="doctor">
                        <Card className="features card-1">
                        <div>
                            <FaUserNurse/>
                            <small className="ml-2 titleName">
                              CONNECT WITH OTHER DEVELOPERS 
                            </small>
                            <br/>
                            <small>
                               Meet and connect with people with like mind around the world 
                            </small>

                        </div>
                        </Card>  
                          </Link> 
                    </Col>
                          {/* other col */}
                     <Col className="col-12 mt-3">
                        <Link to="bot">
                        <Card className="features card-2">
                            <div>
                               <MdChatBubble/>
                               <small className="titleName ml-2">
                                    CHAT WITH  BOT
                                 </small>  
                                 <br/>
                                 <small className="ml-2">
                                    chat with Bot for free learning resources and advice on coding 
                                 </small>
                            </div>
                        </Card> 
                        </Link>

                     </Col>
                      {/* third col */}
                     <Col className="col-12 mt-3 last">
                        <Card className="features card-2">
                            <div>
                               <MdChatBubble/>
                               <small className="titleName ml-2">
                                    TRENDING DEVELOPERS ARTICLES
                                 </small>  
                                 <br/>
                                 <small className="ml-2">
                                    get list of good and trending developers articles 
                                 </small>
                            </div>
                        </Card> 
                     </Col>

                     <Col className="col-12 mt-3 ">
                        <Card className="features card-1">
                        <div>
                            <Link to="share">
                              <FaUserNurse/>
                              <small className="ml-2 titleName">
                                SHARE WITH OTHERS
                              </small>
                              <br/>
                              <small>
                                Share your learning resources with others , and also see some learning resources 
                            </small>
                            </Link>

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
                      
                      <Link to="more">
                       <li> Meet</li>
                      </Link>
                       <li> Connect </li>
                        <Link to="bot">
                          <li> Chat </li>
                        </Link>
                      <Link to="share">
                        <li> Share with</li>
                      </Link>
                    
                     </ul>
                  </div>

                 
                  <header>
                      <h6 onClick={()=>setOpen('block')} className="click"><BiMenuAltLeft/></h6>
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
                            <Link to="doctor">
                              <CardTitle>
                                  <span className="emo"> 
                                    <MdLocalHospital/>
                                  </span> <br/>
                                  <small className="text-muted">Connect with other devs  </small>
                              </CardTitle>
                            </Link>
                          </CardBody>
                        </Card>
                        </Col>

                        {/* third card and col */}
                      </Row>
                      <Row>
                      <Col className="col-12 mt-3">
                          <Card>
                            <Link to="more">
                              <CardBody className="text-center">
                              <CardTitle>
                                <RiArticleFill/>
                              </CardTitle>
                              <CardText>See trending articles </CardText>
                            </CardBody>
                            </Link>

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