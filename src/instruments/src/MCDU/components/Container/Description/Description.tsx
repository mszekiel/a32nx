import './Description.css';

import React from 'react';

export interface DescriptionProps {
  children?: string | JSX.Element;
  right?: boolean;
}

export function Description({ children, right }: DescriptionProps) {
  return <div className={`mcdu-field-description${right ? '-right' : ''}`}>{children}</div>;
}
