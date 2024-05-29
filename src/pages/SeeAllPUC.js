import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

function SeeAllPUC () {
  return (
    <div>
        <Navbar/> 
        {/* section 1st*/}
        <section id='section-1' className="hero d-flex col-md-12 border-b-2 border-red-600 h-[500px]">
        <div className='col-md-6'> 
          <h1 className='text-white'>"Empower Your Future with Decentralized Blockchain Solutions"</h1>
          <p className='text-white'>This heading emphasizes the transformative potential and user empowerment inherent in blockchain technology.</p>
          <span><button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... rounded-md mx-3">start integrating</button></span>             
          <span> <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... rounded-md mx-3">see the data</button></span> 
        </div>

        <div className='col-md-6 '>
          <img src='https://img.freepik.com/free-photo/3d-shape-glowing-with-bright-holographic-colors_23-2151037241.jpg?t=st=1716793974~exp=1716797574~hmac=db9a1da044d0e755a2ff81ca0aeb058ae47922e69e52b7b149d7af4ab770d7e2&w=900' alt='jhfhgf' className='w-100 h-auto circular transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ' />
        </div>
      </section>
      {/* section 1 end*/}
        <Footer />
    </div>
  );
}

export default SeeAllPUC ;
