import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import VideoPlayer from './pages/VideoPlayer';
import Search from './pages/Search';
import Watchlist from './pages/Watchlist';
import SubscriptionPlans from './pages/SubscriptionPlans';
import AnimatedLoadingScreen from './components/AnimatedLoadingScreen';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedLoadingScreen />
      <Routes>
        {/* Full screen video player (no sidebar) */}
        <Route path="/watch/:id" element={<VideoPlayer />} />
        
        {/* Layout wrapped routes */}
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/search" element={<Search />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/categories" element={<Search />} />
              <Route path="/discover" element={<Home />} />
              <Route path="/plans" element={<SubscriptionPlans />} />
              <Route path="/settings" element={<SubscriptionPlans />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

