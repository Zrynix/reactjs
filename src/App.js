import React, { useRef, useState } from 'react';
import './App.css';
import Chatbox from './Chatbox';
import ChatButton from './ChatButton';

export const App = () => {
  const [open,setOpen] = useState(false)
  return (
  <div>
    <ChatButton onClick={() => setOpen(true)}/>
    <Chatbox setOpen={setOpen} isOpen={open}/>
  </div>
  );
};


export default App;