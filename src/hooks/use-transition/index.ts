import { useEffect, useState } from 'react';
import { TransitionState } from './types';

export type { TransitionState };

const useTransition = ({ showing, ms }: { showing: boolean; ms: number }) => {
  const [state, setState] = useState<TransitionState>('closed');

  useEffect(() => {
    setState(showing ? 'opening' : 'closing');

    const timeout = setTimeout(() => {
      if (showing) setState('open');
      if (!showing) setState('closed');
    }, ms);

    return () => {
      setState('closed');
      clearTimeout(timeout);
    };
  }, [showing, ms]);

  return state;
};

export default useTransition;
