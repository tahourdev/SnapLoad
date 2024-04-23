import React from "react";
// import { TbPointFilled } from "react-icons/tb";

const Features = () => {
  const featureList = [
    "No watermark for better quality, a feature missing in most available tools.",
    "Download TikTok or Musically videos on any device: mobile, PC, or tablet. Other tools typically include watermarks when downloading TikTok videos via their applications.",
    "Browser-based download: Simplifying the process for you. No need to download or install any software. While there's an application available, you can install it at your convenience.",
    "Always free: We support our services and further development through non-intrusive ads.",
    "New SnapTik offers the ability to download TikTok photo slideshows as MP4 video formats. SnapTik automatically merges images and music in the slideshow. Additionally, you can directly download each image in the slideshow to your computer.",
  ];
  return (
    <div className="space-y-4 mb-10">
      <div className="space-y-2">
        <p className="font-semibold text-slate-900">Key features:</p>
        <ul className="text-xs text-slate-600 space-y-2">
          {/* Mapping through the featureList array */}
          {featureList.map((feature, index) => (
            <div key={index} className="flex gap-1">
              &#x2022; <li key={index}>{feature}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
