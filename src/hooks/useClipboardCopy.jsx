import { useEffect, useState } from 'react';

function useClipboardCopy() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timerId = null;

    if (copied === true) {
      timerId = setTimeout(() => {
        setCopied((copied) => !copied);
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [copied]);

  return [copied, setCopied];
}

export default useClipboardCopy;
