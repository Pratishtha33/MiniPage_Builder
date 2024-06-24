import React from 'react';

// Sidebar.js
const Sidebar = () => {
  const handleDragStart = (e, type) => {
    e.dataTransfer.setData('type', type);
  };

  return (
    <div className="sidebar">
       <h1> Blocks </h1>
      <div className="sidebar-item" draggable onDragStart={(e) => handleDragStart(e, 'label')}>
        Label
      </div>
      <div className="sidebar-item" draggable onDragStart={(e) => handleDragStart(e, 'input')}>
        Input
      </div>
      <div className="sidebar-item" draggable onDragStart={(e) => handleDragStart(e, 'button')}>
        Button
      </div>
    </div>
  );
};


export default Sidebar; 