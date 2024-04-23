import React from "react";
import FaqText from "./FaqText";
// import FaqAnswer from "./FaqAnswer";

const FAQ = () => {
  return (
    <div className="space-y-2">
      <FaqText
        question="How does the video downloader work?"
        answer=" Our YouTube video downloader simplifies the process. Paste the YouTube video URL into the provided
      field, and the downloader will enable you to download the video without any watermarks."
      />
      <FaqText
        question="How does the video downloader work?"
        answer="Because of Apple's privacy policy, from IOS 12 and IPAD OS 12 and below you cannot download any videos, music or movies to your iPhone. You should update to the latest iOS to be able to use Safari to download Tiktok videos From SnapTik. If you still can't download please follow the tutorial How to download tiktok videos without watermark on iPhone"
      />
      <FaqText
        question="How does the video downloader work?"
        answer=" Our YouTube video downloader simplifies the process. Paste the YouTube video URL into the provided
      field, and the downloader will enable you to download the video without any watermarks."
      />
    </div>
  );
};

export default FAQ;
