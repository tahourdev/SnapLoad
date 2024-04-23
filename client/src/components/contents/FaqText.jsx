import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import FaqAnswer from './FaqAnswer';

const FaqText = ({ question, answer }) => {
  const [showFaq, setShowFaq] = useState(false);
  const handleShowFaq = () => {
    setShowFaq((prev) => !prev);
  };
  return (
    <>
      <div
        onClick={handleShowFaq}
        className="text-sm relative z-50 bg-secondary text-white font-semibold shadow rounded-md w-full">
        <div className="px-6 py-3 flex justify-between items-center cursor-pointer">
          {question}
          {/* <div>{showFaq ? <IoIosArrowDown size={23} /> : <IoIosArrowUp size={23} />}</div> */}
          <IoIosArrowUp
            size={23}
            className={`${
              showFaq ? 'rotate-180' : 'rotate-0'
            } transform transition-transform duration-300 ease-in-out`}
          />
        </div>
      </div>
      <FaqAnswer showFaq={showFaq} answer={answer} />
    </>
  );
};

export default FaqText;
