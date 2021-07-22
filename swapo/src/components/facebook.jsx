import React from 'react';

import { Button } from "react-bootstrap";

function  FacebookLogin (){
    
    return ( 
         <a href="https://www.facebook.com/v10.0/dialog/oauth?client_id=855648615091740&redirect_uri=https%3A%2F%2Fswapo.herokuapp.com%2Foauth&state=some_random_string"> <Button variant="outline-warning">Login with Facebook</Button>{' '} </a> 
    )
}
export default FacebookLogin