import './FullWidth.css';
import React from 'react';
import { Description } from '../../Description/Description';

export interface FullWidthProps {
  description?: string;
  children?: JSX.Element | JSX.Element[];
  onClick?: Function;
}

export function FullWidth({ description, children }: FullWidthProps) {
  return (
    <div className="mcdu-field-fullWidth">
      <Description>{description}</Description>
      <div className="mcdu-field-fullWidth-content">{children}</div>
    </div>
  );
}
