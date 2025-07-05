import React from 'react';

export const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark">
      <div className="h-16 w-16 rounded-full border-8 border-t-brand border-gray-200 loader-spin"></div>
    </div>
  );
};
