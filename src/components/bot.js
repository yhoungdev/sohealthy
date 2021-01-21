import React from 'react';
import { Container , Form , Row , Col , Button , Badge } from 'reactstrap';
import './css/main.css';
import { BiMenuAltLeft } from "react-icons/bi";


const Bot=()=>{
    return (
        <>
            <Row>
                <Col className="col-12 col-md-6 col-xl-6">

                </Col>
                <Col className="col-12 col-md-6 col-xl-6">

                        {/* the chat space */}
                    <header className="top">
                            <div>
                                <span>
                                    <h2>
                                    <BiMenuAltLeft/>
                                    
                                    </h2>
                                </span>
                                <span>
                                    Left
                                </span>
                            </div>
                    </header>
                    <Container>
                        <div className="botMsg">
                            <small>hello i am soHealthy , your health chatbot</small>
                        </div>



                    </Container>

                </Col>
            </Row>
        </>
    )

}
export default Bot;