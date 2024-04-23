// extract videoId from youtube link
export const extractYtVideoId = (url) => {
  // Regular expression to match YouTube video URL patterns
  const regex =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  // Try to match the URL with the regular expression
  const match = url.match(regex);

  // If there is a match, return the video ID (the captured group)
  // If there is no match, return null
  return match ? match[1] : null;
};

// extract videoId from tiktok link
export const extractTikTokVideoId = (url) => {
  // Match the video ID using a regular expression
  const match = url.match(/\/video\/(\d+)/);
  // Check if a match is found
  if (match && match[1]) {
    // Return the video ID
    return match[1];
  } else {
    // Return null if no match is found
    return null;
  }
};
