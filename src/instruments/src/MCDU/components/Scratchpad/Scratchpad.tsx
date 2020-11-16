import './Scratchpad.css';

import React from 'react';
import { useScratchpad } from '../../../utils/contexts/ScratchpadContext';

export function Scratchpad() {
  const scratchpad = useScratchpad();

  const getContent = () => {
    if (scratchpad.error) {
      return scratchpad.error;
    }

    if (scratchpad.content === null) {
      return '  CLR';
    }
    return scratchpad.content;
  };

  return <div className="mcdu-scratchpad">{getContent()}</div>;
}
