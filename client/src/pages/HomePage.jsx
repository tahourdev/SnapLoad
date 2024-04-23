import React, { useState, createContext, lazy } from 'react';
import Header from '../components/header/Header';
import { useLocation } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import axios from 'axios';
import DownloaderDiscover from '../components/header/DownloaderDiscover';
import YoutubeFeed from './YoutubeFeed';

// Adding lazy loading to optimize an application
const YoutubeDownloader = lazy(() => import('./YoutubeDownloader'));
const FacebookDownloader = lazy(() => import('./FacebookDownloader'));
const InstagramDownloader = lazy(() => import('./InstagramDownloader'));
const TiktokDownloader = lazy(() => import('./TiktokDownloader'));

export const HomeContext = createContext();

const HomePage = () => {
  const urlName = useLocation();
  const [ytData, setYtData] = useState(null);
  const [tikData, setTikData] = useState(null);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  const getDownloaderProps = () => {
    if (urlName.pathname === '/youtube-downloader') {
      return {
        placeholder: 'Paste Youtube link here...',
        title: 'Youtube Video Downloader',
      };
    } else if (urlName.pathname === '/facebook-downloader') {
      return {
        placeholder: 'Paste Facebook link here...',
        title: 'Facebook Video Downloader',
      };
    } else if (urlName.pathname === '/instagram-downloader') {
      return {
        placeholder: 'Paste Instagram link here...',
        title: 'Instagram Video Downloader',
      };
    } else if (urlName.pathname === '/tiktok-downloader') {
      return {
        placeholder: 'Paste Tiktok link here...',
        title: 'Tiktok Video Downloader',
      };
    } else {
      return {
        placeholder: 'Paste Youtube link here...',
        title: 'Youtube Video Downloader',
      };
    }
  };

  const downloaderProps = getDownloaderProps();

  const showOfHandle = () => {
    if (show === true) return setShow(false);
  };

  const fetchData = async (videoUrl) => {
    setShowLoading(true);
    setError(null);

    let apiOptions = {};

    if (urlName.pathname === '/youtube-downloader' || urlName.pathname === '/') {
      apiOptions = {
        method: 'GET',
        url: 'https://youtube-media-downloader.p.rapidapi.com/v2/video/details',
        params: {
          videoId: videoUrl,
        },
        headers: {
          'X-RapidAPI-Key': 'cf66aadd2dmsh70752d5eb26c343p116dacjsn0851e3ddcfab',
          'X-RapidAPI-Host': 'youtube-media-downloader.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(apiOptions);
        setYtData(response.data); // Set YouTube data
        setShowLoading(false);
      } catch (error) {
        console.error(error);
        setShowLoading(false);
        setError('Failed to fetch YouTube data. Please check the URL and try again.');
      }
    } else if (urlName.pathname === '/tiktok-downloader') {
      apiOptions = {
        method: 'GET',
        url: 'https://tiktok-download-video1.p.rapidapi.com/getVideo',
        params: {
          url: videoUrl,
          hd: '1',
        },
        headers: {
          'X-RapidAPI-Key': 'cf66aadd2dmsh70752d5eb26c343p116dacjsn0851e3ddcfab',
          'X-RapidAPI-Host': 'tiktok-download-video1.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(apiOptions);
        setTikData(response.data); // Set TikTok data
        setShowLoading(false);
      } catch (error) {
        console.error(error);
        setShowLoading(false);
        setError('Failed to fetch TikTok data. Please check the URL and try again.');
      }
    }
  };

  return (
    <HomeContext.Provider
      value={{
        ...downloaderProps,
        setShow,
        show,
        setShowLoading,
        showLoading,
        ytData,
        setYtData,
        tikData,
        setTikData,
        error,
        fetchData,
      }}>
      <div onClick={showOfHandle} className="w-full">
        <div className="w-full bg-primary pt-4 pb-14">
          <div className="5xl:max-w-screen-3xl max-w-screen-2xl 3xl:mx-auto sm:mx-10 mx-4">
            <Header />
            <DownloaderDiscover />
          </div>
        </div>

        <div className="5xl:max-w-screen-3xl max-w-screen-2xl 3xl:mx-auto sm:mx-10 mx-4">
          {urlName.pathname === '/' && <YoutubeFeed />}
          {urlName.pathname === '/youtube-downloader' && <YoutubeDownloader />}
          {urlName.pathname === '/facebook-downloader' && <FacebookDownloader />}
          {urlName.pathname === '/instagram-downloader' && <InstagramDownloader />}
          {urlName.pathname === '/tiktok-downloader' && <TiktokDownloader />}
        </div>

        <div className="5xl:max-w-screen-3xl max-w-screen-2xl 3xl:mx-auto sm:mx-10 mx-4 mb-10">
          <Footer />
        </div>
      </div>
    </HomeContext.Provider>
  );
};

export default HomePage;
