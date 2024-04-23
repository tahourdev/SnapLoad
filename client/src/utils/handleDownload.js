// export const handleDownload = (videoUrl, selectedFormat) => {
//   window.location.href = `http://localhost:3001/download?url=${videoUrl}&quality=${selectedFormat}`;
// };

export const handleDownload = async (videoUrl, selectedFormat) => {
  try {
    // Check if the selectedFormat indicates the need for audio merging
    if (selectedFormat === "processed") {
      const response = await axios.get(`http://localhost:3001/process-video?url=${videoUrl}`, {
        responseType: "blob", // Ensure the response type is a blob
      });

      // Process the response, assuming it's a binary stream
      const blob = new Blob([response.data]);

      // Create a download link for the processed video
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", "processedVideo.mkv");
      document.body.appendChild(link);
      link.click();
    } else {
      // For other selected formats, download the video directly
      window.location.href = `http://localhost:3001/download?url=${videoUrl}&quality=${selectedFormat}`;
    }
  } catch (error) {
    console.error("Error processing or downloading the video:", error);
    // Handle the error as needed
  }
};
