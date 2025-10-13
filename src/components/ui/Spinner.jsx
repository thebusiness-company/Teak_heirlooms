import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center mt-2 min-h-screen">
      <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-b-4 border-[#9C0300]"></div>
    </div>
  );
}

export default Spinner;