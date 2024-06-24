import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CryptoTable from '../CryptoTable';

function Benchmark() {
  return (
    <div>
        <Navbar/> 
        {/* section 1st*/}
        <section id='section-1' className="hero d-flex col-md-12 border-b-2 border-red-600 h-[500px]">
        <div className='col-md-6 d-flex flex-column text-left justify-content-center'> 
          <div className='text-white text-7xl '>Benchmarks</div>
          <p className='text-white w-[380px]'>Get historical market data from any Pyth feed for use in both on- and off-chain applications.</p>
          <span><button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... rounded-md mx-3">start integrating</button></span>             
        </div>

        <div className='col-md-6 '>
          <img src='https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252458.jpg?t=st=1719133009~exp=1719136609~hmac=51436d4f79899b59f0d9e08a31bdde77b84abb112106de84b512fdc3c21a81f4&w=826' alt='jhfhgf' className='w-100 h-auto circular transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ' />
        </div>
      </section>
      {/* section 1 end*/}
      <div className="bg-gray-900 min-h-screen px-24  ">
        <CryptoTable />
      </div>
        <Footer />
    </div>
  );
}

export default Benchmark;
