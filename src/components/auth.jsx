import React from 'react';
import {Container} from 'reactstrap'
const Auth=()=>{
    return(
        <div>
           <Container>
               <div className="content">
                {/* Google Oauth button */}
                <button>sign in with google </button>
               </div>
           </Container>
        </div>
    )
}
export default Auth;