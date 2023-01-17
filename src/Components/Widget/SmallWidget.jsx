import React from "react";
import WidgetContent from "./WidgetContent";
import "./Widget.css";
function SmallWidget() {
  return (
    <div className="widget">
      <div className="widget_header">
        <h4>Space to Follow</h4>
      </div>
      <div className="widget_body">
        <WidgetContent />
      </div>
    </div>
  );
}

export default SmallWidget;
