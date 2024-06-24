// Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            Products
            <ul className="navdropdown ">
              <li className="navdropdown-item"><Link to="/PriceFeeds"><h3>Price Feed</h3></Link>
                <p > Real-time prices for smart contracts</p>
              </li>
              <li className="navdropdown-item"><Link to="/Benchmark"><h3>Benchmark</h3></Link>
                <p>Historical PYTH market data</p>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            Ecosystem
            <ul className="navdropdown drop">
              <div className='d-flex'>
                <div>
                  <li className="navdropdown-item"><Link to="/MeetPythUser">Meet Pyth Users</Link></li>
                  <li className="navdropdown-item"><Link to="/DataProviders">See data providers</Link></li>
                  <li className="navdropdown-item"><a href="https://docs.pyth.network/home/metrics/kpi" target="_blank" rel="noopener noreferrer">Pyth KPI Metrics</a></li>
                  <li className="navdropdown-item">DAO Forum</li>
                  <li className="navdropdown-item"><Link to="/PythStats">Pyth Stats</Link></li>
                </div>
                <div>
                  <li className="navdropdown-item"><Link to="/CommunityHub">Community Hub</Link></li>
                  <li className="navdropdown-item">Become a Data Provider</li>
                  <li className="navdropdown-item"><Link to="/GrantsProgram">Grants Programs</Link></li>
                  <li className="navdropdown-item"><a href="https://dune.com/cctdaniel" target="_blank" rel="noopener noreferrer">Dune Dashboard</a></li>
                </div>
              </div>
            </ul>
          </li>
          <li className="nav-item">
            Developers
            <ul className="navdropdown ">
              <div className='text-center border-b-2 border-black py-4' >
                <h3 ><a href="https://docs.pyth.network/home/metrics/kpi" target="_blank" rel="noopener noreferrer">Documentation</a></h3>
                <p className="">Start integrating Pyth Data Feeds</p>
              </div>
              <div className='d-flex'>
                <div>
                  <li className="navdropdown-item">Get Started Here</li>
                  <li className="navdropdown-item">What is a Pull Oracle?</li>
                  <li className="navdropdown-item">How to use Pyth Price Feeds</li>
                  <li className="navdropdown-item">Create Your First Pyth App</li>
                  <li className="navdropdown-item">Create Charts With Trading View</li>
                </div>
                <div>
                  <li className="navdropdown-item">EVM</li>
                  <li className="navdropdown-item">Solana</li>
                  <li className="navdropdown-item">Aptos</li>
                  <li className="navdropdown-item">Sui</li>
                  <li className="navdropdown-item">CosmWasm</li>
                  <li className="navdropdown-item">Near</li>
                </div>
              </div>
              <div className='flex justify-center border-t-2 border-black'>
                <div className='p-4'><Link to="/PriceFeedsIDs">Price Feed IDs</Link></div>
                <div className='p-4'>Supported Chains</div>
                <div className='p-4'>API reference</div>
              </div>
            </ul>
          </li>
          <li className="nav-item">
            Resources
            <ul className="navdropdown drop">
              <div className='d-flex'>
                <div>
                  <li className="navdropdown-item"><Link to="/MediaRoom">Media Room</Link></li>
                  <li className="navdropdown-item"><Link to="/News">News</Link></li>
                  <li className="navdropdown-item"><Link to="/Podcast">Podcast</Link></li>
                  <li className="navdropdown-item"><Link to="/DropDvideo">Video</Link></li>
                  <li className="navdropdown-item"><Link to="/Careers">Careers</Link></li>
                  <li className="navdropdown-item"><Link to="/DataDriven">Data Driven</Link></li>
                </div>
                <div>
                  <li className="navdropdown-item"><Link to="/BorrowLending">Borrowing and Lending</Link></li>
                  <li className="navdropdown-item"><Link to="/Perpetual">Perpetual Futures</Link></li>
                  <li className="navdropdown-item"><Link to="/SPVaults">structured Product Vaults</Link></li>
                  <li className="navdropdown-item"><Link to="/StablecoinPro">Stablecoin Protocols</Link></li>
                  <li className="navdropdown-item"><Link to="/SeeAllPUC">SEE All PYTH Use Cases</Link></li>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
