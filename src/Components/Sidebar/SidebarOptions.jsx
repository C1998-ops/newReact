import React from "react";
import { Add } from "@mui/icons-material";
import "./sideMenu.css";

const sideMenu = [
  {
    img: `https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80`,
    p: "History",
  },
  {
    img:
      "https://images.unsplash.com/photo-1515325595179-59cd5262ca53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    p: "Bussiness",
  },
  {
    img:
      "https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=100&q=60",
    p: "Psychology",
  },
  {
    img:
      "https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=100&q=60",
    p: "Cooking",
  },
  {
    img:
      "https://plus.unsplash.com/premium_photo-1658506770646-e76e130607a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    p: "Music",
  },
  {
    img:
      "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=100&q=60",
    p: "Science",
  },
  {
    img:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=100&q=60",
    p: "Health",
  },
];
const SidebarOptions = () => {
  return (
    <div className="Sidebar_options">
      {sideMenu.map((list, index) => (
        <div className="Sidebar_option">
          <img src={list.img} alt="menu_images" />
          <p>{list.p}</p>
        </div>
      ))}
    </div>
  );
};

export default SidebarOptions;
