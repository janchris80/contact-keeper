import React from "react";

const footerStyle = {
  backgroundColor: '#003699',
  fontSize: "14px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: '0.7rem 2rem',
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

const Footer = (props) => {
    
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>
        <span>Copyright 2020 | Jan Chris Ogel</span>
      </div>
    </div>
  );
}


export default Footer;