import React from "react";
import "../css/styleText.css";
export const StyleText = ({ text, className }) => 
{
  return <div className={`${className} text`}>{text}</div>;
};
