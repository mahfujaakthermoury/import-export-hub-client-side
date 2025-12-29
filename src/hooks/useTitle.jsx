import React from 'react';

import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Import Export Hub`;
  }, [title]);
};

export default useTitle;