import { useEffect, useRef } from 'react';

export const renderTarget = document.getElementById('A32NX_REACT_MOUNT');
export const customElement = renderTarget!.parentElement;

// @param {(deltaTime: number) => void} handler
export function useUpdate(handler: (_deltaTime: number) => void) {
  // Logic based on https://usehooks.com/useEventListener/
  const savedHandler = useRef(handler);
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const wrappedHandler = (event: any) => {
      savedHandler.current(event.detail);
    };
    customElement!.addEventListener('update', wrappedHandler);
    return () => {
      customElement!.removeEventListener('update', wrappedHandler);
    };
  });
}

const SIMVAR_TYPES = {
  __proto__: 'null',
  'GPS POSITION LAT': 'degrees latitude',
  'L:APU_GEN_ONLINE': 'Bool',
  'EXTERNAL POWER AVAILABLE:1': 'Bool',
  'EXTERNAL POWER ON': 'Bool',
  'L:A32NX_COLD_AND_DARK_SPAWN': 'Bool',
};

// type SimvarKeys = keyof typeof SIMVAR_TYPES;

// const SIMVAR_CACHE = new Map();
// customElement!.addEventListener('update', () => {
//   SIMVAR_CACHE.clear();
// });

// export function getSimVar(name:SimvarKeys, type =SIMVAR_TYPES[name]) {
//   if (!SIMVAR_CACHE.has(name)) {
//     SIMVAR_CACHE.set(name, SimVar.GetSimVarValue(name, type || SIMVAR_TYPES[name]));
//   }
//   return SIMVAR_CACHE.get(name);
// }

// export function setSimVar(name:SimvarKeys, value:number, type:NumberSimVarUnit):void;
// export function setSimVar(name:SimvarKeys, value:string, type:TextSimVarUnit): void;
// export function setSimVar(name:string , value: string|number, type:NumberSimVarUnit|TextSimVarUnit) {
//   SIMVAR_CACHE.delete(name);
//   return SimVar.SetSimVarValue(name, type, value);
// }

export function getSimVar(name: string, type: NumberSimVarUnit): number;
export function getSimVar(name: string, type: TextSimVarUnit): string;
export function getSimVar(name: string, type: any): number | string {
  return SimVar.GetSimVarValue(name, type);
}
