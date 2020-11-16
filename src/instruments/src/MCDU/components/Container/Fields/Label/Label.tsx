import './Label.css';

import React from 'react';
import { Color } from '../../../Color/Color';
import { Description } from '../../Description/Description';

export interface LabelProps {
  description?: string;
  children?: string | JSX.Element;
}

export function Label({ description, children = '' }: LabelProps) {
  return (
    <div className="mcdu-field-label">
      <Description>{description}</Description>
      <div className="mcdu-field-label-content">
        <Color>{children}</Color>
      </div>
    </div>
  );
}
