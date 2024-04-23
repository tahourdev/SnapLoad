const express = require('express');
const axios = require('axios');
const cors = require('cors');
const ytdl = require('ytdl-core');
const cp = require('child_process');
const ffmpegPath = require('ffmpeg-static');
const stream = require('stream');

const app = express();
const port = 3001;

app.use(
  cors({
    origin: 'http://localhost:5173', // Replace with your client's origin
    methods: 'GET',
    optionsSuccessStatus: 204,
  })
);

app.get('/fetchVideos', async (req, res) => {
  try {
    const response = await axios.get('https://youtube-v2.p.rapidapi.com/trending/', {
      params: {
        // lang: "en",
        // section: "Now",
      },
      headers: {
        'X-RapidAPI-Key': process.env.YOUTUBE_API_KEY,
        'X-RapidAPI-Host': process.env.YOUTUBE_API_HOST,
      },
    });
    res.json(response.data.videos);
    console.log(response.data.videos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching video details');
  }
});

app.get('/searchVideos', async (req, res) => {
  const searchQuery = req.query.q;
  console.log(searchQuery);
  try {
    const response = await axios.get('nod', {
      params: {
        query: searchQuery,
        lang: 'en',
        order_by: 'this_month',
        country: 'us',
      },
      headers: {
        'X-RapidAPI-Key': process.env.YOUTUBE_API_KEY,
        'X-RapidAPI-Host': process.env.YOUTUBE_API_HOST,
      },
    });
    res.json(response.data.videos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching video details');
  }
});

// app.get("/download", async (req, res) => {
//   const url = req.query.url;
//   const requestedQuality = req.query.quality;
//   try {
//     let info = await ytdl.getInfo(url);
//     console.log(info);
//     let format;
//     console.log(format);
//     if (requestedQuality) {
//       format = ytdl.chooseFormat(info.formats, { quality: requestedQuality });
//     } else {
//       format = ytdl.chooseFormat(info.formats, { quality: "137" });
//     }

//     let videoTitle = info.videoDetails.title;

//     res.header("Content-Disposition", `attachment; filename="${videoTitle}.mp4`);

//     res.header("Content-Type", "video/mp4");

//     ytdl(url, { format: format }).pipe(res);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error downloading the video");
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// Direct Video Download Endpoint
app.get('/download', async (req, res) => {
  const url = req.query.url;
  const requestedQuality = req.query.quality;

  try {
    let info = await ytdl.getInfo(url);
    let format;

    // console.log(info);

    if (requestedQuality) {
      format = ytdl.chooseFormat(info.formats, { quality: requestedQuality });
    } else {
      format = ytdl.chooseFormat(info.formats, { quality: '137' });
    }

    let videoTitle = info.videoDetails.title;

    res.header('Content-Disposition', `attachment; filename="${videoTitle}.mp4`);
    res.header('Content-Type', 'video/mp4');

    ytdl(url, { format }).pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error downloading the video');
  }
});

// Video Processing and Merging Endpoint
app.get('/process-video', async (req, res) => {
  const url = req.query.url;

  try {
    const info = await ytdl.getInfo(url);
    let videoFormat = ytdl.chooseFormat(info.formats, { quality: 'highestvideo' });
    let audioFormat = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });

    const hasAudio = audioFormat && audioFormat.itag;
    console.log(hasAudio);
    const hasVideo = videoFormat && videoFormat.itag;

    if (!hasAudio || !hasVideo) {
      res.status(400).send('Video or audio not available for processing.');
      return;
    }

    const videoStream = ytdl(url, {
      quality: videoFormat.itag,
    });

    let audioStream;
    if (!hasAudio) {
      audioFormat = ytdl.chooseFormat(info.formats, { filter: 'audioonly' });
      audioStream = ytdl(url, {
        quality: audioFormat.itag,
      });
    } else {
      audioStream = ytdl(url, {
        quality: audioFormat.itag,
      });
    }

    const ffmpegProcess = cp.spawn(
      ffmpegPath,
      [
        '-loglevel',
        '8',
        '-hide_banner',
        '-i',
        'pipe:3',
        '-i',
        'pipe:4',
        '-map',
        '0:a?',
        '-map',
        '1:v?',
        '-c',
        'copy',
        '-f',
        'matroska',
        'pipe:5',
      ],
      {
        windowsHide: true,
        stdio: ['inherit', 'inherit', 'inherit', 'pipe', 'pipe', 'pipe'],
      }
    );

    audioStream.pipe(ffmpegProcess.stdio[3]);
    videoStream.pipe(ffmpegProcess.stdio[4]);
    ffmpegProcess.stdio[5].pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing the video');
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
