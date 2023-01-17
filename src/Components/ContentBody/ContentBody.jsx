import { Avatar } from '@mui/material';
import React from 'react';
import "./Quorabody.css";
import QuoraBox from "./QuoraBox";
const ContentBody = () => {
  return (
    <main>
    {/* <div className="QuoraBox">
      <img  className='QuoraUserImg' src="../.././history.avif" width={"50px"} height="50px" style={{borderRadius:'50%'}} alt="images" />
      <input type="text" name="user_input" placeholder='What is your Question or Link ? ' />
    </div> */}
    
    
      <QuoraBox/>
    <div className="QuoraBoxMainContainer">
      <header className="QBMCheader">
        <img src="../.././history.avif" width={"50px"} height="50px" style={{borderRadius:'50%'}}  alt="" />
        <span className='QBMCuser'>user</span>
        <span className='QBMCtime'>time</span>
      </header>
      <section className='QBMCbody'>
        <p>text apperas here</p>
        <button>Answer</button>
      </section>
      <footer className="QBMCfooter">
        <div className="QBMCLeft_btns">1</div>
        <div className="QBMCRight_btns">2</div>
      </footer>
      <p>1 Answer</p>
    </div>
    </main>
  )
}

export default ContentBody