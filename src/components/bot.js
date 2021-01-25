import React, {useState, useEffect} from 'react';
import { Container , Form , Row , Col , Button , Badge , Input} from 'reactstrap';
import './css/main.css';
import { BiMenuAltLeft } from "react-icons/bi";
import {MdArrowBack} from "react-icons/md";
import {RiSendPlane2Fill} from "react-icons/ri";
import {Link } from 'react-router-dom';


const Bot=()=>{
    //function for the bot 
    let [ask , setAsk]=useState('')
    let [hide ,setHide ]=useState('none')
    let [chaty,setChaty]=useState('')
       let run=()=>{
            setAsk(localStorage.getItem('name'))

       }
    
       window.addEventListener('load',()=>run())
    const { dat , reply ,inbox ,btn,app,res, clear }={
        dat:document.querySelector('.userMsg'),
        reply:document.querySelector('.reply'),
        inbox:document.querySelector('.inbox'),
        btn:document.querySelector('#btn'),
        app:document.querySelector('.msgs'),
        res:document.querySelector('.res'),
        clear:document.querySelector('#chat')
    }

        // the bot reply 
        const botReply=(asap)=>{
            let hello=document.createElement('p');
            let wr=document.createTextNode(asap)
             hello.appendChild(wr)
             app.appendChild(hello)
             hello.classList.add('res')
           
         }
         
         //human msg
         const  human=(chat)=>{
             let make=document.createElement('div')
             let write=document.createTextNode(chat);
             make.appendChild(write)
             //now append the msg to the div
             app.appendChild(make)
 
             make.classList.add('mess')
            
         }

    const user=()=> {
        //the msg button click
        btn.onclick= e=> {
            let val=inbox.value;
                if(val.length!==0) {
                    human(inbox.value)   
                    let mail=/[a-zA-Z0-9]\@gmail\.com/
                    //set the input box back to emptys
           
                    setTimeout(()=>{
                        
                        if(val.match(mail)) {
                            const rep=['thank you for providing your email address i have sent you a msg via email','thanks for providing your mail check you inbox']
                            const rad=rep[Math.floor(Math.random()*rep.length)];
                                botReply(rad)
                        }else if(val.match(/hi|hey|whats up/)){
                            botReply('lets get to work')
                        } else {
                            const msg=['i am very gathering some resources for you at the moment, to see it click on the buttons below ',' click the buttons   below to see some learning resources '];
                                const randi=msg[Math.floor(Math.random()*msg.length)]
                            botReply(randi)
                            setHide('none')
                        }

                    },2000)

                    //return the value of the input back to empty
                    inbox.value=''
                } else {
                    alert('this box cant be empty')
                }
        }
    }


    //handle the chat buttom 
    let clean= e => {

        
    let val=e.target.value;
      //now see the state of the form to show 
      
      setHide('block')

      //now show the message to the screen
       human('I wanna chat with you  ')
      setTimeout(()=>{
        botReply('great nice to chat with you , but before we start chatting , i will like to know your name ')
        setChaty('none')
        
        },1500)

        
 
  }
  //end of handle 
  //code resources part 
  const resource=e=>{
      human('i want some coding resources ')
      const give=['wow great , learning is always cool , place click on the kind field you want below ',' wow we both can learn together click the buttons below to choose the field you want resources on ']
        const dis=give[Math.floor(Math.random()*give.length)];
        //now display it as the bot reply 
        setTimeout(()=>botReply(dis),1500)
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
                                       <Link to="/parent">
                                          <MdArrowBack/>
                                        </Link>
                                    
                                    </h2>

                                  
                                    <h3>{ask}</h3>
                                </span>
                                <span>
                                      <BiMenuAltLeft/>
                                </span>
                            </div>
                    </header>
                    <Container>
                        <div className="botMsg">
                            <small>Hello i am Truthy your new friend , so what do you want me to do for you today?</small>
                        </div>
                            <div>
                                    <div className="msgs">
                                </div>
                                <div className="res">
                                </div>
                            </div>


                        <footer>
                                
                                <div className="ml">
                                 <span className="details">
                                        <Button className="mr-2" color="info">  Minify code  </Button>
                                        <Button className="mr-2" color="info" onClick={resource}> Code resource </Button>
                                        <Button id="chat" onClick={clean} style={{display:chaty}} color="info">Chat with me </Button>
                                    
                                </span>
                                <div>
                                    <Button>Back end resources </Button>
                                    <Button>ML R</Button>
                                </div>
                            </div>
                                
                            <Form onSubmit={e=>e.preventDefault()} style={{display:hide}}>
                                <Input className="inbox"/>          
                                <RiSendPlane2Fill/>
                                <button onClick={user} id="btn">click</button>               
                              </Form>
                        </footer>

                    </Container>

                </Col>
            </Row>
        </>
    )

}
export default Bot;