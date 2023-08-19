import React from 'react';

const DraggablePreview = ({ id, text, index, inputText, setInputText, handleDragStart, handleDragOver, handleDrop }) => {
  return (
    <div
      className="draggable-element"
      draggable="true"
      onDragStart={(e) => handleDragStart(e, id)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e, id)}
    >
      <div className="element-header">
        <span>{text}</span>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Additional data"
        />
      </div>
    </div>
  );
};

export default DraggablePreview;