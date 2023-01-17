import { Avatar } from '@mui/material';
import React from 'react';
import "./Quorabody.css";
import QuoraBox from "./QuoraBox";
import PostBody from './PostBody';
const ContentBody = () => {
  return (
    <main>
    {/* <div className="QuoraBox">
      <img  className='QuoraUserImg' src="../.././history.avif" width={"50px"} height="50px" style={{borderRadius:'50%'}} alt="images" />
      <input type="text" name="user_input" placeholder='What is your Question or Link ? ' />
    </div> */}
    
    
      <QuoraBox input="What is your Question?"/>
      <PostBody/>
    </main>
  )
}

export default ContentBody