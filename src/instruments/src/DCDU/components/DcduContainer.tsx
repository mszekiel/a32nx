import React from 'react';
import './DcduContainer.css';

export interface DcduContainerProps {
  top?: JSX.Element;
  left?: JSX.Element;
  middle?: JSX.Element;
  right?: JSX.Element;
}

export function DcduContainer({
  top, left, middle, right,
}:DcduContainerProps) {
  return (
    <>
      <div className="dcdu-container">
        <div className="dcdu-container-top">{top}</div>
        <div className="dcdu-container-left">{left}</div>
        <div className="dcdu-container-middle">{middle}</div>
        <div className="dcdu-container-right">{right}</div>
      </div>
    </>
  );
}
