// import React from 'react';
// import Sidebar from './components/Sidebar';
// import DroppableArea from "./components/DroppableArea";

// function App() {
//   const handleDrop = (formState) => {
//     // Handle the formState data here, e.g., save it to state or perform other actions
//     console.log('Form state received in App:', formState);
//   };

//   return (
//     <div className="App">
//       <DroppableArea onDrop={handleDrop} /> 
//       <Sidebar />
      
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import React, {useState} from 'react';
//  import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import DroppableArea from './components/DroppableArea';

// function App() {
//   const [elements, setElements] = useState([]);

//   const handleDrop = (newElements) => {
//     setElements(newElements);
//     console.log('Updated elements in App:', newElements);
//   };

//   return (
//     <div className="App">
//       <DroppableArea onDrop={handleDrop} elements={elements} />
//       <Sidebar />
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import Sidebar from './components/Sidebar';
// import DroppableArea from './components/DroppableArea';

// function App() {
//   const [elements, setElements] = useState([]);

//   // Load elements from local storage when the component mounts
//   useEffect(() => {
//     const storedElements = localStorage.getItem('elements');
//     if (storedElements) {
//       setElements(JSON.parse(storedElements));
//     }
//   }, []);

//   // Save elements to local storage whenever they change
//   useEffect(() => {
//     localStorage.setItem('elements', JSON.stringify(elements));
//   }, [elements]);

//   const handleDrop = (newElements) => {
//     setElements(newElements);
//   };

//   return (
//     <div className="App">
//       <DroppableArea onDrop={handleDrop} elements={elements} />
//       <Sidebar />
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import Sidebar from './components/Sidebar';
// import DroppableArea from './components/DroppableArea';
// import './App.css';

// function App() {
//   const [elements, setElements] = useState(() => {
//     const savedElements = localStorage.getItem('elements');
//     return savedElements ? JSON.parse(savedElements) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('elements', JSON.stringify(elements));
//   }, [elements]);

//   const handleDrop = (newElements) => {
//     setElements(newElements);
//     console.log('Updated elements in App:', newElements);
//   };

//   const handleExport = () => {
//     const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(elements, null, 2));
//     const downloadAnchorNode = document.createElement('a');
//     downloadAnchorNode.setAttribute("href", dataStr);
//     downloadAnchorNode.setAttribute("download", "page_configuration.json");
//     document.body.appendChild(downloadAnchorNode);
//     downloadAnchorNode.click();
//     downloadAnchorNode.remove();
//   };

//   return (
//     <div className="App">
//       <DroppableArea onDrop={handleDrop} elements={elements} />
//       <Sidebar />
//       <button onClick={handleExport} className="export-button">Export Configuration</button>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import DroppableArea from './components/DroppableArea';
import './App.css';

function App() {
  const [elements, setElements] = useState(() => {
    const savedElements = localStorage.getItem('elements');
    return savedElements ? JSON.parse(savedElements) : [];
  });

  useEffect(() => {
    localStorage.setItem('elements', JSON.stringify(elements));
  }, [elements]);

  const handleDrop = (newElements) => {
    setElements(newElements);
    console.log('Updated elements in App:', newElements);
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(elements, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "page_configuration.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="App">
      <DroppableArea onDrop={handleDrop} elements={elements} />
      <Sidebar />
      <button onClick={handleExport} className="export-button">Export Configuration</button>
    </div>
  );
}

export default App;
