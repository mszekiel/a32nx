import React from 'react';

export enum Colors {
  White = '--mcduWhite',
  Grey = '--mcduGrey',
  Green = '--mcduGreen',
  Amber = '--mcduAmber',
  Blue = '--mcduBlue',
  Red = '--mcduRed',
  Magenta = '--mcduMagenta',
}

export interface ColorProps {
  color?: Colors;
  children: JSX.Element | JSX.Element[] | string;
}

export function Color({ color = Colors.Green, children }: ColorProps) {
  return <div style={{ color: `var(${color})` }}>{children}</div>;
}

Color.Colors = Colors;
