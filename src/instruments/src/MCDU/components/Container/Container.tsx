import './Container.css';

import React from 'react';
import { Row } from './Row/Row';
import { Title } from './Title/Title';
import { Label } from './Fields';
import { FullWidth } from './Fields/FullWidth/FullWidth';
import { Selectable } from './Fields/Selectable/Selectable';
import { Input } from './Fields/Input/Input';

export interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

interface ContainerComposition {
  Title: typeof Title;
  Row: typeof Row;
  Fields: {
    Label: typeof Label;
    FullWidth: typeof FullWidth;
    Selectable: typeof Selectable;
    Input: typeof Input;
  };
}

const Container: React.FC<ContainerProps> & ContainerComposition = ({ children }) => (
  <div className="mcdu-container">
    {children}
  </div>
);

Container.Row = Row;
Container.Title = Title;
Container.Fields = {
  Label, FullWidth, Selectable, Input,
};

export { Container };
