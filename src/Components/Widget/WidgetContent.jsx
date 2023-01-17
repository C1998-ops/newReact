import React from "react";
const widgetOptions = [
  {
    img:
      "https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80",
    title: "Mobile App Programmer",
    desc: "The best Mobile App Development Company . ",
  },
  {
    img:
      "https://images.unsplash.com/photo-1515325595179-59cd5262ca53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    title: "Quota of Quotes",
    desc: "Daily dosage of unforgettable lines from ... ",
  },
  {
    img:
      "https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=100&q=60",
    title: "Art & Artist",
    desc: "A Space retated to creating, practicing an... ",
  },
  {
    img:
      "https://images.unsplash.com/photo-1515325595179-59cd5262ca53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    title: "Friedrich Nietzche",
    desc: "A Space dedicated to great work of Friedrich...",
  },
  {
    img:
      "https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80",
    title: "Stock Market Strategies",
    desc: "Everything about investing in Stock...",
  },
  {
    img:
      "https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=100&q=60",
    title: "Architecture World",
    desc: "All about civil architecture... ",
  },
  
];
const WidgetContent = () => {
  return (
    <div className="widget_contents">
      {widgetOptions.map((data,index) => (
        <div className="widget_content" key={index}>
          <img src={data.img} alt="" />
          <div className="widget__contentTitle">
            <h5>{data.title}</h5>
            <p>{data.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WidgetContent;
