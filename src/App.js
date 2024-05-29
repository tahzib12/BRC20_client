import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import PriceFeeds from './pages/PriceFeeds';
import Benchmark from './pages/Bechmark';
import MeetPythUser from './pages/MeetPythUser';
import DataProviders from './pages/DataProviders';
import PythStats from './pages/PythStats';
import CommunityHub from './pages/CommunityHub';
import GrantsProgram from './pages/GrantsProgram';
import PriceFeedsIDs from './pages/PriceFeedsIDs';
import MediaRoom from './pages/MediaRoom';
import News from './pages/News';
import Podcast from './pages/Podcast';
import Careers from './pages/Careers';
import DataDriven from './pages/DataDriven';
import BorrowLending from './pages/BorrowLending';
import SPVaults from './pages/SPVaults';
import StablecoinPro from './pages/StableCoinProtocol';
import SeeAllPUC from './pages/SeeAllPUC';
import Perpetual from './pages/PerpetualFutures';
import DropDvideo from './pages/DropDvideo';


function App() {
  return (
    <Router>
      <Routes>dropDVideo
        <Route path="/" element={<Home />} />
        <Route path="/PriceFeeds" element={<PriceFeeds />} />
        <Route path="/Benchmark" element={<Benchmark />} />
        <Route path="/MeetPythUser" element={<MeetPythUser />} />
        <Route path="/DataProviders" element={<DataProviders />} />
        <Route path="/PythStats" element={<PythStats />} />
        <Route path="/CommunityHub" element={<CommunityHub />} />
        <Route path="/GrantsProgram" element={<GrantsProgram />} />
        <Route path="/PriceFeedsIDs" element={<PriceFeedsIDs />} />
        <Route path="/MediaRoom" element={<MediaRoom />} />
        <Route path="/News" element={<News />} />
        <Route path="/Podcast" element={<Podcast />} />
        <Route path="/DropDvideo" element={<DropDvideo />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/DataDriven" element={<DataDriven />} />
        <Route path="/BorrowLending" element={<BorrowLending />} />
        <Route path="/Perpetual" element={<Perpetual />} />
        <Route path="/SPVaults" element={<SPVaults />} />
        <Route path="/StablecoinPro" element={<StablecoinPro />} />
        <Route path="/SeeAllPUC" element={<SeeAllPUC />} />
      </Routes>
    </Router>
  );
}

export default App;
