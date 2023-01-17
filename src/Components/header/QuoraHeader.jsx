import React from "react";
import "./Qheader.css";
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import { Avatar, Icon } from "@mui/material";

const icons = [HomeIcon,FeaturedPlayListOutlinedIcon,AssignmentTurnedInOutlinedIcon,PeopleAltOutlinedIcon, NotificationsOutlinedIcon];
const QuoraHeader = () => {
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
        <input type="text" placeholder="Search Quora" />
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
