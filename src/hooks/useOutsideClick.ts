import { createRef, LegacyRef, useEffect } from 'react';

import { OutsideClickCallbackType } from '../models';

export const useOutsideClick = (
  callback: OutsideClickCallbackType
): LegacyRef<HTMLTableDataCellElement> => {
  const ref = createRef<HTMLTableDataCellElement>();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref]);

  return ref;
};
