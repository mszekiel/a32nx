import { useEffect, useRef } from 'react';
import { customElement } from '../util';

// @param {} handler
export function useInteractionEvent(event: string, handler: Function) {
  // Logic based on https://usehooks.com/useEventListener/
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const wrappedHandler = (e: any) => {
      if (event === '*') {
        savedHandler.current(e.detail);
      } else {
        savedHandler.current();
      }
    };
    customElement!.addEventListener(event, wrappedHandler);

    return () => {
      customElement!.removeEventListener(event, wrappedHandler);
    };
  }, [event]);
}
