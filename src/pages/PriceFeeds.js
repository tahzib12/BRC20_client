import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import PriceFeedTable from '../PriceFeedTable';

const PriceFeeds = () => {
  return (
    <>
      <Navbar />
      {/* section 1st*/}
      <section id='section-1' className="hero d-flex col-md-12 border-b-2 border-red-600 h-[500px]">
        <div className='d-flex flex-column col-md-6 text-left justify-content-center'>
          <div className='text-white text-[50px] '>Real-Time Data from</div>
          <div className='text-white text-[50px] font-bold font-'>Real-World Markets</div>
          <p className='text-white w-[350px]'>We deliver verified data from first-party sources on a sub-second timescale.</p>
        </div>

        <div className='col-md-6 '>
          <img src='https://ideogram.ai/assets/image/lossless/response/oE5cAfhOSA-XYyOAm3u4Cw' alt='jhfhgf' className='w-100 h-auto circular transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ' />
        </div>
      </section>
      {/* section 1 end*/}
      {/* section 2 */}
      <div className='mx-4 my-8'>
        <div className='text-5xl my-4 text-center'>
          Price Feeds
        </div>

     
        <div>
          <PriceFeedTable />
        </div>
      </div> 
      {/* section 2 end*/}
      <Footer />
    </>
  );
};
export default PriceFeeds;