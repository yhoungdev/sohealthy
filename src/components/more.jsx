import React, { useState, useEffect } from 'react';
import {MdArrowBack} from "react-icons/md";
import {Link} from 'react-router-dom'
import { Container , Button , Card , Badge ,CardBody,BreadcrumbItem,Breadcrumb, Form} from 'reactstrap'
const More=()=> {
    return (
        <>
         <header>
             <div className="upper">
                 <span>
                        <Link to="parent">
                          <MdArrowBack/>
                        </Link>
                 </span>
                 <span>
                     icon
                 </span>
             </div>

            
         </header>

         <Container>
             <Breadcrumb>
                <Breadcrumb>
                    <BreadcrumbItem>
                         Meet new people and connect on twitter with them
                    </BreadcrumbItem>
                </Breadcrumb>
             </Breadcrumb>
             <form>
                <input type="text" className="form-control"/>
             </form>
             <br/>
             <Card>
                 <CardBody>
                     card 
                 </CardBody>
             </Card>
             
         </Container>
   

        </>
    )
}
export default More;