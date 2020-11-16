import React, { useContext, useState } from 'react';
import { useInteractionEvent } from '../hooks/useInteractionEvent';
import { MCDU } from '../keys';

const SCRATCHPAD_LENGTH = 23;

const Letters = [
  MCDU.Left.A,
  MCDU.Left.B,
  MCDU.Left.C,
  MCDU.Left.D,
  MCDU.Left.E,
  MCDU.Left.F,
  MCDU.Left.G,
  MCDU.Left.H,
  MCDU.Left.I,
  MCDU.Left.J,
  MCDU.Left.K,
  MCDU.Left.L,
  MCDU.Left.M,
  MCDU.Left.N,
  MCDU.Left.O,
  MCDU.Left.P,
  MCDU.Left.Q,
  MCDU.Left.R,
  MCDU.Left.S,
  MCDU.Left.T,
  MCDU.Left.U,
  MCDU.Left.V,
  MCDU.Left.W,
  MCDU.Left.X,
  MCDU.Left.Y,
  MCDU.Left.Z,
  MCDU.Left.K1,
  MCDU.Left.K2,
  MCDU.Left.K3,
  MCDU.Left.K4,
  MCDU.Left.K5,
  MCDU.Left.K6,
  MCDU.Left.K7,
  MCDU.Left.K8,
  MCDU.Left.K9,
  MCDU.Left.K0,
];

export interface ScratchpadInterface {
  content: string | null;
  error: string;
  push: (s: string) => void;
  get: () => string;
  clr: () => void;
  pushError: (s: string) => void;
}

export const ScratchpadContext = React.createContext<ScratchpadInterface>({
  content: '',
  error: '',
  push: () => { },
  clr: () => { },
  get: () => '',
  pushError: () => { },
});

export const useScratchpad = () => useContext(ScratchpadContext);

export const ScratchpadProvider = ({ children }: { children: JSX.Element }) => {
  const [scratchpad, setScratch] = useState<string | null>('');
  const [error, setError] = useState<string>('');

  const push = (s: string) => {
    if (scratchpad !== null && scratchpad.length < SCRATCHPAD_LENGTH && !error) {
      setScratch(`${scratchpad || ''}${s}`);
    }
  };

  const get = () => {
    if (scratchpad) {
      const value = scratchpad;
      setScratch('');

      return value;
    }
    return '';
  };

  const clr = () => {
    if (error) {
      setError('');
      return;
    }

    if (scratchpad === null) {
      setScratch('');
      return;
    }

    if (scratchpad && scratchpad.length > 0) {
      setScratch(`${scratchpad}`.slice(0, -1));
    } else if (scratchpad !== null) {
      setScratch(null);
    }
  };

  const pushError = (s: string) => {
    if (!error) {
      setError(s);
    }
  };

  Letters.forEach((letter) => {
    useInteractionEvent(letter, () => push(letter.slice(-1)));
  });

  useInteractionEvent(MCDU.Left.CLR, () => clr());

  useInteractionEvent(MCDU.Left.SP, () => push(' '));

  useInteractionEvent(MCDU.Left.DIV, () => push('/'));

  useInteractionEvent(MCDU.Left.DOT, () => push('.'));

  return (
    <ScratchpadContext.Provider value={{
      content: scratchpad, push, clr, pushError, error, get,
    }}
    >
      {children}
    </ScratchpadContext.Provider>
  );
};
