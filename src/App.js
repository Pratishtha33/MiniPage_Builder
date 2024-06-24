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
 import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DroppableArea from './components/DroppableArea';

function App() {
  const [elements, setElements] = useState([]);

  const handleDrop = (newElements) => {
    setElements(newElements);
    console.log('Updated elements in App:', newElements);
  };

  return (
    <div className="App">
      <DroppableArea onDrop={handleDrop} elements={elements} />
      <Sidebar />
    </div>
  );
}

export default App;

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

