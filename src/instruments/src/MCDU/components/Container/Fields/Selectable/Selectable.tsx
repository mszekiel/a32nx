import './Selectable.css';

import React from 'react';
import { Color, Colors } from '../../../Color/Color';
import { useInteractionEvent } from '../../../../../utils/hooks/useInteractionEvent';
import { Description } from '../../Description/Description';

export interface SelectableProps {
  children?: string | JSX.Element;
  selected?: boolean;
  color?: Colors;
  description?: string;
  selector?: 'arrow' | 'sign';
  small?: boolean;
  right?: boolean;
  onSelect: {
    event: string,
    callback: Function,
  }
}

const Arrows = {
  arrow: {
    left: '{',
    right: '}',
  },
  sign: {
    left: '<',
    right: '>',
  },
};

export function Selectable({
  description, children = '', selected, color = Colors.Blue, right, small, selector = 'arrow', onSelect,
}: SelectableProps) {
  useInteractionEvent(onSelect.event, () => {
    onSelect.callback();
  });

  const getArrow = () => {
    const arrow = Arrows[selector][right ? 'right' : 'left'];
    return (
      <span className={right ? 'mcdu-field-selectable-arrow-right' : 'mcdu-field-selectable-arrow'}>
        {arrow}
      </span>
    );
  };

  const getContent = () => {
    if (right) {
      return (
        <div className={`mcdu-field-selectable-right ${small ? 'mcdu-field-selectable-small-right' : ''}`}>
          {!selected && getArrow()}
          {children}
        </div>
      );
    }
    return (
      <div className={`mcdu-field-selectable ${small ? 'mcdu-field-selectable-small' : ''}`}>
        {!selected && getArrow()}
        {children}
      </div>
    );
  };

  return (
    <Color color={color}>
      {description ? <Description right={right}>{description}</Description> : <></>}
      {getContent()}
    </Color>
  );
}
