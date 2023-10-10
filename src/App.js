import React, { useRef, useState } from 'react';
import './App.css';
import Logo from './logo';

export const chatbox = () => {
  return (
    <div className="chatbox">
      <div className="rectangle" />
      <div className="frame">
      <Logo />
    </div>
    </div>
  );
};
// test 


export default chatbox;