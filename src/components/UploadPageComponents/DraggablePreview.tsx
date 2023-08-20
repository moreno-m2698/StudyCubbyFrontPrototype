import React from 'react';

const DraggablePreview = ({ id, text, index, inputName, setInputName, handleDragStart, handleDragOver, handleDrop }) => {
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
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Track Title"
        />
      </div>
    </div>
  );
};

export default DraggablePreview;