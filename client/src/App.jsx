import React, { Suspense } from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
import ReactSpinner from './components/loading/ReactSpinner';

function App() {
  return (
    <div className="selection:bg-secondary">
      {/* Router configuration */}

      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <BrowserRouter basename="/">
          <Suspense fallback={<ReactSpinner />}>
            <Routes>
              {/* Base route for the homepage */}
              <Route index element={<HomePage />} />
              <Route path="/youtube-downloader" element={<HomePage />} />
              <Route path="/facebook-downloader" element={<HomePage />} />
              <Route path="/instagram-downloader" element={<HomePage />} />
              <Route path="/tiktok-downloader" element={<HomePage />} />
              {/* Add more routes as needed for other components/pages */}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </SkeletonTheme>
    </div>
  );
}

export default App;
