import React from 'react';

const FaqAnswer = ({ showFaq, answer }) => {
  return (
    <div
      className={`${
        showFaq ? 'max-h-96 py-3' : 'max-h-0 py-0'
      } overflow-hidden w-full transition-all duration-300 ease-in-out text-sm text-slate-600 px-6 -z-50 bg-white shadow-md rounded-md`}>
      {answer}
    </div>
  );
};

export default FaqAnswer;
