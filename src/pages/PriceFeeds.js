import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

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
          <img src='https://img.freepik.com/free-photo/3d-shape-glowing-with-bright-holographic-colors_23-2151037241.jpg?t=st=1716793974~exp=1716797574~hmac=db9a1da044d0e755a2ff81ca0aeb058ae47922e69e52b7b149d7af4ab770d7e2&w=900' alt='jhfhgf' className='w-100 h-auto circular transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ' />
        </div>
      </section>
      {/* section 1 end*/}
        <Footer />
        </>
    );
};
export default PriceFeeds;