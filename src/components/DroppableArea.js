// import React, { useState } from 'react';

// const DroppableArea = ({ onDrop }) => {
//   const [showForm, setShowForm] = useState(false);
//   const [formState, setFormState] = useState({
//     type: '',
//     x: 0,
//     y: 0,
//     text: '',
//     fontSize: '',
//     fontWeight: ''
//   });

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const type = e.dataTransfer.getData('type');
//     setShowForm(true);
//     setFormState({ ...formState, type });
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormState({ ...formState, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Pass formState to parent component to handle saving changes
//     onDrop(formState); // Call onDrop prop with formState
//     setShowForm(false); // Close the form after saving changes
//     // Optionally, reset formState if needed
//     setFormState({
//       type: '',
//       x: 0,
//       y: 0,
//       text: '',
//       fontSize: '',
//       fontWeight: ''
//     });
//   };

//   return (
//     <div className="droppable-area"
//       onDrop={handleDrop}
//       onDragOver={handleDragOver}
//     >
//       Droppable Area
//       {showForm && (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Text:
//             <input type="text" name="text" value={formState.text} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             X Coordinate:
//             <input type="number" name="x" value={formState.x} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             Y Coordinate:
//             <input type="number" name="y" value={formState.y} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             Font Size:
//             <input type="text" name="fontSize" value={formState.fontSize} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             Font Weight:
//             <input type="text" name="fontWeight" value={formState.fontWeight} onChange={handleChange} required />
//           </label>
//           <br />
//           <button type="submit">Save Changes</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default DroppableArea;
// import React, { useState, useEffect } from 'react';
//  import React, { useState, useEffect, useCallback } from 'react';

// const DroppableArea = ({ onDrop, elements }) => {
//   const [showForm, setShowForm] = useState(false);
//   const [formState, setFormState] = useState({
//     type: '',
//     x: 0,
//     y: 0,
//     text: '',
//     fontSize: '',
//     fontWeight: ''
//   });
//   const [selectedElementIndex, setSelectedElementIndex] = useState(null);

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const type = e.dataTransfer.getData('type');
//     setShowForm(true);
//     setFormState({ ...formState, type });
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormState({ ...formState, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (selectedElementIndex !== null) {
//       const updatedElements = [...elements];
//       updatedElements[selectedElementIndex] = formState;
//       onDrop(updatedElements);
//     } else {
//       onDrop([...elements, formState]);
//     }
//     setShowForm(false);
//     setFormState({
//       type: '',
//       x: 0,
//       y: 0,
//       text: '',
//       fontSize: '',
//       fontWeight: ''
//     });
//     setSelectedElementIndex(null);
//   };

//   const handleClick = (index) => {
//     setSelectedElementIndex(index);
//   };

//   const handleKeyDown = useCallback((e) => {
//     if (e.key === 'Enter' && selectedElementIndex !== null) {
//       const selectedElement = elements[selectedElementIndex];
//       setFormState(selectedElement);
//       setShowForm(true);
//     }
//   }, [selectedElementIndex, elements]);

//   useEffect(() => {
//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [handleKeyDown]);

//   return (
//     <div className="droppable-area" onDrop={handleDrop} onDragOver={handleDragOver}>
//       Droppable Area
//       {showForm && (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Text:
//             <input type="text" name="text" value={formState.text} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             X Coordinate:
//             <input type="number" name="x" value={formState.x} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             Y Coordinate:
//             <input type="number" name="y" value={formState.y} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             Font Size:
//             <input type="text" name="fontSize" value={formState.fontSize} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             Font Weight:
//             <input type="text" name="fontWeight" value={formState.fontWeight} onChange={handleChange} required />
//           </label>
//           <br />
//           <button type="submit">Save Changes</button>
//         </form>
//       )}
//       {elements.map((element, index) => (
//         <div
//           key={index}
//           onClick={() => handleClick(index)}
//           style={{
//             position: 'absolute', // Changed from relative to absolute for correct positioning
//             left: `${element.x}px`,
//             top: `${element.y}px`,
//             fontSize: `${element.fontSize}px`,
//             fontWeight: element.fontWeight,
//             border: selectedElementIndex === index ? '2px solid red' : 'none',
//             cursor: 'pointer'
//           }}
//         >
//           {`This is a ${element.type}`}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DroppableArea;
// import React, { useState, useEffect, useCallback } from 'react';

// const DroppableArea = ({ onDrop, elements }) => {
//   const [showForm, setShowForm] = useState(false);
//   const [formState, setFormState] = useState({
//     type: '',
//     x: 0,
//     y: 0,
//     text: '',
//     fontSize: '',
//     fontWeight: ''
//   });
//   const [selectedElementIndex, setSelectedElementIndex] = useState(null);

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const type = e.dataTransfer.getData('type');
//     setShowForm(true);
//     setFormState({ ...formState, type });
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormState({ ...formState, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (selectedElementIndex !== null) {
//       const updatedElements = [...elements];
//       updatedElements[selectedElementIndex] = formState;
//       onDrop(updatedElements);
//     } else {
//       onDrop([...elements, formState]);
//     }
//     setShowForm(false);
//     setFormState({
//       type: '',
//       x: 0,
//       y: 0,
//       text: '',
//       fontSize: '',
//       fontWeight: ''
//     });
//     setSelectedElementIndex(null);
//   };

//   const handleClick = (index) => {
//     setSelectedElementIndex(index);
//   };

//   const handleKeyDown = useCallback((e) => {
//     if (e.key === 'Enter' && selectedElementIndex !== null) {
//       const selectedElement = elements[selectedElementIndex];
//       setFormState(selectedElement);
//       setShowForm(true);
//     }
//   }, [selectedElementIndex, elements]);

//   useEffect(() => {
//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [handleKeyDown]);

//   return (
//     <div className="droppable-area" onDrop={handleDrop} onDragOver={handleDragOver}>
//       Droppable Area
//       {showForm && (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Text:
//             <input type="text" name="text" value={formState.text} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             X Coordinate:
//             <input type="number" name="x" value={formState.x} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             Y Coordinate:
//             <input type="number" name="y" value={formState.y} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             Font Size:
//             <input type="text" name="fontSize" value={formState.fontSize} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             Font Weight:
//             <input type="text" name="fontWeight" value={formState.fontWeight} onChange={handleChange} required />
//           </label>
//           <br />
//           <button type="submit">Save Changes</button>
//         </form>
//       )}
//       {elements.map((element, index) => (
//         <div
//           key={index}
//           onClick={() => handleClick(index)}
//           style={{
//             position: 'absolute', // Changed from relative to absolute for correct positioning
//             left: `${element.x}px`,
//             top: `${element.y}px`,
//             fontSize: `${element.fontSize}px`,
//             fontWeight: element.fontWeight,
//             border: selectedElementIndex === index ? '2px solid red' : 'none',
//             cursor: 'pointer'
//           }}
//         >
//           {`This is a ${element.type}`}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DroppableArea;

// import React, { useState, useEffect, useCallback } from 'react';

// const DroppableArea = ({ onDrop, elements }) => {
//   const [showForm, setShowForm] = useState(false);
//   const [formState, setFormState] = useState({
//     type: '',
//     x: 0,
//     y: 0,
//     text: '',
//     fontSize: '',
//     fontWeight: ''
//   });
//   const [selectedElementIndex, setSelectedElementIndex] = useState(null);

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const type = e.dataTransfer.getData('type');
//     setShowForm(true);
//     setFormState({ ...formState, type });
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormState({ ...formState, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (selectedElementIndex !== null) {
//       const updatedElements = [...elements];
//       updatedElements[selectedElementIndex] = formState;
//       onDrop(updatedElements);
//     } else {
//       onDrop([...elements, formState]);
//     }
//     setShowForm(false);
//     setFormState({
//       type: '',
//       x: 0,
//       y: 0,
//       text: '',
//       fontSize: '',
//       fontWeight: ''
//     });
//     setSelectedElementIndex(null);
//   };

//   const handleClick = (index) => {
//     setSelectedElementIndex(index);
//   };

//   const handleKeyDown = useCallback((e) => {
//     if (e.key === 'Enter' && selectedElementIndex !== null) {
//       const selectedElement = elements[selectedElementIndex];
//       setFormState(selectedElement);
//       setShowForm(true);
//     }
//   }, [selectedElementIndex, elements]);

//   useEffect(() => {
//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [handleKeyDown]);

//   return (
//     <div className="droppable-area" onDrop={handleDrop} onDragOver={handleDragOver}>
//       Droppable Area
//       {showForm && (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Text:
//             <input type="text" name="text" value={formState.text} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             X Coordinate:
//             <input type="number" name="x" value={formState.x} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             Y Coordinate:
//             <input type="number" name="y" value={formState.y} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             Font Size:
//             <input type="text" name="fontSize" value={formState.fontSize} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             Font Weight:
//             <input type="text" name="fontWeight" value={formState.fontWeight} onChange={handleChange} required />
//           </label>
//           <br />
//           <button type="submit">Save Changes</button>
//         </form>
//       )}
//       {elements.map((element, index) => (
//         <div
//           key={index}
//           onClick={() => handleClick(index)}
//           style={{
//             position: 'absolute', // Changed from relative to absolute for correct positioning
//             left: `${element.x}px`,
//             top: `${element.y}px`,
//             fontSize: `${element.fontSize}px`,
//             fontWeight: element.fontWeight,
//             border: selectedElementIndex === index ? '2px solid red' : 'none',
//             cursor: 'pointer'
//           }}
//         >
//           {`This is a ${element.type}`}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DroppableArea;


// import React, { useState, useEffect, useCallback } from 'react';

// const DroppableArea = ({ onDrop, elements }) => {
//   const [showForm, setShowForm] = useState(false);
//   const [formState, setFormState] = useState({
//     type: '',
//     x: 0,
//     y: 0,
//     text: '',
//     fontSize: '',
//     fontWeight: ''
//   });
//   const [selectedElementIndex, setSelectedElementIndex] = useState(null);

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const type = e.dataTransfer.getData('type');
//     setShowForm(true);
//     setFormState({ ...formState, type });
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormState({ ...formState, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (selectedElementIndex !== null) {
//       const updatedElements = [...elements];
//       updatedElements[selectedElementIndex] = formState;
//       onDrop(updatedElements);
//     } else {
//       onDrop([...elements, formState]);
//     }
//     setShowForm(false);
//     setFormState({
//       type: '',
//       x: 0,
//       y: 0,
//       text: '',
//       fontSize: '',
//       fontWeight: ''
//     });
//     setSelectedElementIndex(null);
//   };

//   const handleClick = (index) => {
//     setSelectedElementIndex(index);
//   };

//   const handleKeyDown = useCallback((e) => {
//     if (selectedElementIndex === null) return;

//     if (e.key === 'Enter') {
//       const selectedElement = elements[selectedElementIndex];
//       setFormState(selectedElement);
//       setShowForm(true);
//     } else if (e.key === 'Delete') {
//       const updatedElements = elements.filter((_, index) => index !== selectedElementIndex);
//       onDrop(updatedElements);
//       setSelectedElementIndex(null);
//     }
//   }, [selectedElementIndex, elements, onDrop]);

//   useEffect(() => {
//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [handleKeyDown]);

//   return (
//     <div className="droppable-area" onDrop={handleDrop} onDragOver={handleDragOver}>
//       Droppable Area
//       {showForm && (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Text:
//             <input type="text" name="text" value={formState.text} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             X Coordinate:
//             <input type="number" name="x" value={formState.x} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             Y Coordinate:
//             <input type="number" name="y" value={formState.y} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             Font Size:
//             <input type="text" name="fontSize" value={formState.fontSize} onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             Font Weight:
//             <input type="text" name="fontWeight" value={formState.fontWeight} onChange={handleChange} required />
//           </label>
//           <br />
//           <button type="submit">Save Changes</button>
//         </form>
//       )}
//       {elements.map((element, index) => (
//         <div
//           key={index}
//           onClick={() => handleClick(index)}
//           style={{
//             position: 'absolute', // Changed from relative to absolute for correct positioning
//             left: `${element.x}%`,
//             top: `${element.y}%`,
//             fontSize: `${element.fontSize}px`,
//             fontWeight: `${element.fontWeight}px`,
//             border: selectedElementIndex === index ? '2px solid red' : 'none',
//             cursor: 'pointer'
//           }}
//         >
//           {`This is a ${element.type}`}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DroppableArea;


import React, { useState, useEffect, useCallback } from 'react';
import './DroppableArea.css';

const DroppableArea = ({ onDrop, elements }) => {
  const [showForm, setShowForm] = useState(false);
  const [formState, setFormState] = useState({
    type: '',
    x: 0,
    y: 0,
    text: '',
    fontSize: '',
    fontWeight: ''
  });
  const [selectedElementIndex, setSelectedElementIndex] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('type');
    setShowForm(true);
    setFormState({ ...formState, type });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedElementIndex !== null) {
      const updatedElements = [...elements];
      updatedElements[selectedElementIndex] = formState;
      onDrop(updatedElements);
    } else {
      onDrop([...elements, formState]);
    }
    setShowForm(false);
    setFormState({
      type: '',
      x: 0,
      y: 0,
      text: '',
      fontSize: '',
      fontWeight: ''
    });
    setSelectedElementIndex(null);
  };

  const handleClick = (index) => {
    setSelectedElementIndex(index);
  };

  const handleKeyDown = useCallback((e) => {
    if (selectedElementIndex === null) return;

    if (e.key === 'Enter') {
      const selectedElement = elements[selectedElementIndex];
      setFormState(selectedElement);
      setShowForm(true);
    } else if (e.key === 'Delete') {
      const updatedElements = elements.filter((_, index) => index !== selectedElementIndex);
      onDrop(updatedElements);
      setSelectedElementIndex(null);
    }
  }, [selectedElementIndex, elements, onDrop]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="droppable-area" onDrop={handleDrop} onDragOver={handleDragOver}>
      
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <label>
                Text:
                <input type="text" name="text" value={formState.text} onChange={handleChange} required />
              </label>
              <br />
              <label>
                X Coordinate:
                <input type="number" name="x" value={formState.x} onChange={handleChange} required />
              </label>
              <br />
              <label>
                Y Coordinate:
                <input type="number" name="y" value={formState.y} onChange={handleChange} required />
              </label>
              <br />
              <label>
                Font Size:
                <input type="text" name="fontSize" value={formState.fontSize} onChange={handleChange} required />
              </label>
              <br />
              <label>
                Font Weight:
                <input type="text" name="fontWeight" value={formState.fontWeight} onChange={handleChange} required />
              </label>
              <br />
              <button type="submit">Save Changes</button>
            </form>
          </div>
        </div>
      )}
      {elements.map((element, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          style={{
            position: 'absolute',
            left: `${element.x}%`,
            top: `${element.y}%`,
            fontSize: `${element.fontSize}px`,
            fontWeight: `${element.fontWeight}px`,
            border: selectedElementIndex === index ? '2px solid red' : 'none',
            cursor: 'pointer'
          }}
        >
          {`This is a ${element.type}`}
        </div>
      ))}
    </div>
  );
};

export default DroppableArea;



