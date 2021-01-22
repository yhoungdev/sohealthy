import React from 'react';
import { Container , Form , Row , Col , Button , Badge , Input} from 'reactstrap';
import './css/main.css';
import { BiMenuAltLeft } from "react-icons/bi";
import {MdArrowBack} from "react-icons/md"
import {RiSendPlane2Fill} from "react-icons/ri"


const Bot=()=>{
    //function for the bot 

    const user=()=> {
        //get the user reply 
        var action;
        const { user , reply ,inbox ,btn,app,res }={
            user:document.querySelector('.userMsg'),
            reply:document.querySelector('.reply'),
            inbox:document.querySelector('.inbox'),
            btn:document.querySelector('button'),
            app:document.querySelector('.msgs'),
            res:document.querySelector('.res')
        }
        

        // the bot reply 
        const botReply=(bt)=>{
           let hello=document.createElement('p');
           let wr=document.createTextNode('ooh my butiful lova this song na you i sing am for i cant explain how i feel deep inside ooh my love is real my beautiful gitl ')
            hello.appendChild(wr)
            app.appendChild(hello)
            hello.classList.add('res')
          
        }
        
        //human msg
        btn.onclick= e=> {
            let make=document.createElement('div')
            let write=document.createTextNode(inbox.value);
            make.appendChild(write)
            //now append the msg to the div
            app.appendChild(make)

            make.classList.add('mess')
            botReply()
        
           
        }
        
       
        
    }
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
                                    <MdArrowBack/>
                                    
                                    </h2>
                                </span>
                                <span>
                                      <BiMenuAltLeft/>
                                </span>
                            </div>
                    </header>
                    <Container>
                        <div className="botMsg">
                            <small>hello i am soHealthy , your health chatbot</small>
                        </div>
                            <div>
                                    <div className="msgs">
                                </div>
                                <div className="res">
                                </div>
                            </div>


                        <footer>
                            <Form onSubmit={e=>e.preventDefault()}>
                                <Input className="inbox"/>          
                                <RiSendPlane2Fill/>
                                <button onClick={user}>click</button>               
                              </Form>
                        </footer>

                    </Container>

                </Col>
            </Row>
        </>
    )

}
export default Bot;