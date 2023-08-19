import React, { useState } from 'react';
import DraggablePreview from './DraggablePreview';


const DragTest = () => {
  const [elements, setElements] = useState([
    { id: 1, text: 'Element 1', inputText: '' },
    { id: 2, text: 'Element 2', inputText: '' },
    { id: 3, text: 'Element 3', inputText: '' },
  ]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    const sourceId = e.dataTransfer.getData('text/plain');

    const updatedElements = [...elements];
    const sourceIndex = elements.findIndex((el) => el.id === Number(sourceId));
    const targetIndex = elements.findIndex((el) => el.id === targetId);

    const [movedElement] = updatedElements.splice(sourceIndex, 1);
    updatedElements.splice(targetIndex, 0, movedElement);

    setElements(updatedElements);
  };

  const handleInputTextChange = (id, value) => {
    const updatedElements = elements.map((el) =>
      el.id === id ? { ...el, inputText: value } : el
    );
    setElements(updatedElements);
  };

  return (
    <div className="app">
      <h1>Draggable Elements with Inputs</h1>
      <div className="draggable-container">
        {elements.map((element, index) => (
          <DraggablePreview
            key={element.id}
            id={element.id}
            text={element.text}
            index={index}
            inputText={element.inputText}
            setInputText={(value) => handleInputTextChange(element.id, value)}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />
        ))}
      </div>
    </div>
  );
};

export default DragTest;