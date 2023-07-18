import React from "react";
import { StyleText } from "./styleText";
import "../css/success.css";
export const Success = () => 
{
  return (
    <div className="success">
      <img src="/assets/check.svg" alt="success" width="60vw" />
      <StyleText text="Your payment is successful" className="success-text" />
    </div>
  );
};
