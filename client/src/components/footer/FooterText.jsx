import React from "react";

const FooterText = ({ texts, textHead }) => {
  return (
    <div className="lg:flex-1 w-[50%] transition-all duration-[.4s] ease-linear">
      <div className="space-y-4">
        <h1 className="text-base font-bold text-slate-600">{textHead}</h1>
        <div className="space-y-1">
          {texts.map((item, index) => (
            <p key={index} className="text-sm text-slate-600">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterText;
