import React, { useEffect } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import "./VideoPlayerPlr.scss";

const VideoPlyr = () => {
  useEffect(() => {
    // Initialize Plyr when the component mounts
    const player = new Plyr("#your-video-player", {
      controls: [
        "play",
        "progress",
        "current-time",
        "download",
        "source",
        // "volume",
        // "mute",
        "isEmbed",
        "buffered",
        "settings",
        "quality",
        "fullscreen",
      ],
      settings: ["captions", "quality", "speed", "loop"],
      ratio: "9:16",
      volume: 10,
      autoplay: true,
      captions: { active: false, language: "auto", update: false },
      quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240] },
    });

    // Cleanup Plyr when the component unmounts
    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div
      className="video-container"
      style={{
        borderRadius: "15px",
        overflow: "hidden",
        backgroundColor: "white",
        paddingBottom: "20px",
      }}>
      <video id="your-video-player" playsInline controls>
        <source
          src="https://v39-jp.tiktokcdn.com/0232b2b32bafd1fa58c7b32875e1e638/656637a5/video/tos/useast2a/tos-useast2a-ve-0068c001-euttp/oQEtrSQQPfAemDbZVwRUBtbmnKnjDBDIqgkkwr/?a=1233&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=5766&bt=2883&bti=OzR2KTw6NGYpOzs5ZjM6bS82NDpkLjEwOg%3D%3D&cs=0&ds=6&ft=hltzE2O7jHL9wpMLOQIrU-AO5XQa1G0iXwcGZHmMyeF&mime_type=video_mp4&qs=0&rc=Zzk8MzVnZGc2OzgzNDo7ZEBpamR1NzM6Zjd1bDMzZjczM0AzNTMyYDAyNWMxMS9hLjMzYSM2Xm5wcjRnMm5gLS1kMWNzcw%3D%3D&l=20231128125527D09A541384CE26177297&btag=e0008d000"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoPlyr;
