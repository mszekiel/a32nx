import './Input.css';

import React, { useState } from 'react';
import { useScratchpad } from '../../../../../utils/contexts/ScratchpadContext';
import { useInteractionEvent } from '../../../../../utils/hooks/useInteractionEvent';
import { Description } from '../../Description/Description';
import { Color } from '../../../Color/Color';

export interface InputProps {
  description?: string;
  placeholder?: 'brackets' | string;
  insertOn: string;
  validator: RegExp;
  length?: number;
}

export function Input({
  description = '', placeholder = 'brackets', insertOn, length = 3, validator,
}: InputProps) {
  const [value, setValue] = useState('');
  const scratchpad = useScratchpad();

  useInteractionEvent(insertOn, () => {
    if (scratchpad.content) {
      const validation = validator.test(scratchpad.content);
      if (validation) {
        const get = scratchpad.get();
        if (get) {
          setValue(get);
        }
      } else {
        scratchpad.pushError('ERROR');
      }
    } else if (scratchpad.content === null) {
      setValue('');
      scratchpad.clr();
    }
  });

  const getPlaceholder = () => {
    if (placeholder === 'brackets') {
      return `[${'  '.repeat(length - 1)}]`;
    }
    return placeholder;
  };

  return (
    <div>
      <Description>{description}</Description>
      <Color color={Color.Colors.Blue}>
        <div className="mcdu-input">{value || getPlaceholder()}</div>
      </Color>
    </div>
  );
}
