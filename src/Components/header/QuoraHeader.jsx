import {React,useState} from "react";
import "./Qheader.css";
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, Button, Icon, Input } from "@mui/material";
import Modal from "react-modal";
import "react-modal/dist/react-modal";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
const icons = [HomeIcon,FeaturedPlayListOutlinedIcon,AssignmentTurnedInOutlinedIcon,PeopleAltOutlinedIcon, NotificationsOutlinedIcon];
Modal.setAppElement("#root");
const QuoraHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState('');
  const [inputUrl,setInputUrl]=useState("");
  const [input,setInput]=useState("");
  const handleQuestion=(e)=>{
    e.preventDefault();
    setIsModalOpen(false);
  }
  return (
    <header className="Qheader">
      <div className="Qheader_container">
        <div className="Qheader_logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
            alt="Quora_logo"
            srcset=""
          />
        </div>
        <div className="Qheader_Icons">
          {icons.map((icon,index) => {
            const Icon = icons[index];
          return (
              <div className="Qheader_Icon" key={index}>
               <Icon />
              </div>
          );
          })}
        </div>
        <div className="qHeader__input">
        <SearchIcon />
        <Button type="submit" className="AddQuestionBtn" onClick={()=>setIsModalOpen(true)}>What is Your Question?</Button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        
        >
        <CloseIcon className="close_modal" onClick={()=>setIsModalOpen(false)}/>
              <ReactQuill value={value} theme={"snow"}></ReactQuill>   
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar
              className="avatar"
              src={
               
                   "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
              }
            />
            <p>user.disPlayName ? user.disPlayName : user.email asked</p>
            <div className="modal__scope">
              <PeopleAltOutlinedIcon />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div className="modal__fieldLink">
              {/* <Link /> */}
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder="Optional: inclue a link that gives context"
              ></input>
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="sumbit" onClick={handleQuestion} className="add">
              Add Question
            </button>
          </div>
        </Modal>
             
         
      </div>
      <div className="QheaderRemaining">
        <Avatar/>
        <LanguageIcon/>
      </div>
      </div>
    </header>
  );
};

export default QuoraHeader;
