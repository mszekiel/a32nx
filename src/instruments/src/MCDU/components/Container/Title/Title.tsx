import './Title.css';

import React from 'react';
import { Color, Colors } from '../../Color/Color';

export interface TitleProps {
  children: string;
  color?: Colors;
}

export function Title({ children, color = Color.Colors.White }: TitleProps) {
  return (
    <div className="mcdu-title">
      <Color color={color}>{children}</Color>
    </div>
  );
}
