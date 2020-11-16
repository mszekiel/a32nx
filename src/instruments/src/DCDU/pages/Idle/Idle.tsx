import './Idle.css';
import React, { useEffect, useState } from 'react';
import { DcduContainer } from '../../components/DcduContainer';
import { useInteractionEvent } from '../../../utils/hooks/useInteractionEvent';

export function Idle() {
  const [inop, setInop] = useState(false);

  useEffect(() => {
    if (inop) {
      setTimeout(() => {
        setInop(false);
      }, 1000);
    }
  }, [inop]);

  useInteractionEvent('A32NX_DCDU_BTN_INOP', () => {
    if (!inop) {
      setInop(true);
    }
  });

  const top = (
    <div className="dcdu-idle text-xxl">
      {inop && 'INOP.'}
    </div>
  );

  return (
    <DcduContainer top={top} />
  );
}
