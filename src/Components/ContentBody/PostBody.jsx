import { Avatar } from "@mui/material";
import React from "react";
import "./PostBody.css";
import {
  ArrowUpwardOutlined,
  ChatBubbleOutlineOutlined,
  MoreHorizOutlined,
  RepeatOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { ArrowDownwardOutlined } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import "react-responsive-modal/styles.css";
import Modal from "react-modal";
import "react-modal/dist/react-modal";
import { useState } from "react";

import Timestamp from "react-timestamp";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const PostBody = ({imageUrl}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleAnswer = (e) => {
    e.preventDefault();

    setAnswer("");
  };
  const timestamp=new Date().toLocaleDateString();
  

  return (
    <div className="post">
      {/* <div className="QuoraBoxMainContainer">
        <header className="QBMCheader">
          <Avatar src="../.././history.avif" style={{ borderRadius: "50%" }} />
          <h4 className="QBMCuser">user</h4>
          <span className="QBMCtime">time</span>
        </header>
        <section className="QBMCbody">
          <article>text apperas here</article>
          <button>Answer</button>
        </section>
        <footer className="QBMCfooter" style={{display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'space-between'}}>
          <div className="QBMCLeft_btns">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined  />
          </div>
          <div className="QBMCRight_btns">2</div>
        </footer>
        <p>1 Answer</p>
      </div> */}
      <div className="post__info">
        <Avatar
          src={
            "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
          }
        />
        <h4></h4>
        <small></small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p>question</p>
          <button
            className="post__btnAnswer"
            onClick={() => setIsModalOpen(true)}
          >
            Answer
          </button>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            shouldCloseOnOverlayClick={false}
            shouldCloseOnEsc={true}
            style={{
              overlay: {
                width: 680,
                height: 550,
                backgroundColor: "rgba(0,0,0,1)",
                zIndex: "1000",
                top: "50%",
                left: "50%",
                marginTop: "-250px",
                marginLeft: "-350px",
              },
            }}
          >
          <CloseIcon className="close_modal" onClick={()=>setIsModalOpen(false)}/>
            <div className="modal__question">
              <h1>question from user</h1>
              <p>
                asked by <span className="name">users.displayName</span> {""}
                on <span className="name"></span>
              </p>
              <Timestamp  date={new Date().getDate().toLocaleString()}  /> 
              
            </div>
            <div className="modal__answer">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Answer"
                type="text"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="sumbit" className="add" onClick={handleAnswer}>
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        <div className="post__answer"></div>
        <img src={answer} alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>

        <RepeatOutlined />
        <ChatBubbleOutlineOutlined />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
    </div>
  );
};

export default PostBody;
