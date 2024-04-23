import React from "react";
import { FadeLoader, ScaleLoader } from "react-spinners";

const ReactSpinner = () => {
  return (
    <div className="pt-10 w-full flex justify-center">
      <ScaleLoader color="#36d7b7" />
    </div>
  );
};

export default ReactSpinner;
