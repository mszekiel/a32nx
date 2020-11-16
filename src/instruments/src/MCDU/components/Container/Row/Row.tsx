import './Row.css';

import React from 'react';

export interface RowProps {
  children?: JSX.Element | JSX.Element[];
}

export function Row({ children }: RowProps) {
  return <div className="mcdu-row">{children}</div>;
}
