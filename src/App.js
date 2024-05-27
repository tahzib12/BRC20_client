import React from 'react';
import './App.css';
import Accordion from './Accordion';
import Navbar from './Navbar';
import Slider from './Slider';
import ScrollingContent from './Slider';
import Footer from './Footer';
import ImageNotebar from './notebar';

function App() {
  const faqData = [
    {
      title: 'How does Pyth work?',
      content: 'Pyth works by aggregating data from trusted sources and delivering it to smart contracts in real-time.',
    },
    {
      title: 'What is on-demand or "pull-based" oracle?',
      content: 'An on-demand or pull-based oracle allows applications to request data only when needed, reducing unnecessary costs.',
    },
    {
      title: 'What is Wormhole? Is it different than Solana?',
      content: 'Wormhole is a cross-chain messaging protocol, while Solana is a blockchain. Wormhole allows Solana to communicate with other blockchains.',
    },
    {
      title: 'How does Pyth use Wormhole?',
      content: 'Pyth uses Wormhole to transmit its price feeds across multiple blockchains, ensuring broad accessibility.',
    },
    {
      title: 'What is the latency between Pythnet and Wormhole?',
      content: 'The latency is minimal, usually within a few seconds, ensuring timely and accurate data delivery.',
    },
    {
      title: 'What is the cost structure of using Pyth Price Feeds?',
      content: 'The cost structure is designed to be affordable and is based on the frequency and type of data requested.',
    },
  ];
  return (
    <>
      <Navbar />
      <div className="App">
        <main>
          {/* section 1st*/}
          <section id='section-1' className="hero d-flex col-md-12 border-b-2 border-red-600 h-[500px]">
            <div className='col-md-6'> 
              <h1>"Empower Your Future with Decentralized Blockchain Solutions"</h1>
              <p>This heading emphasizes the transformative potential and user empowerment inherent in blockchain technology.</p>
              <span><button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... rounded-md mx-3">start integrating</button></span>             
              <span> <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... rounded-md mx-3">see the data</button></span> 
            </div>

            <div className='col-md-6 '>
              <img src='https://img.freepik.com/free-photo/3d-shape-glowing-with-bright-holographic-colors_23-2151037241.jpg?t=st=1716793974~exp=1716797574~hmac=db9a1da044d0e755a2ff81ca0aeb058ae47922e69e52b7b149d7af4ab770d7e2&w=900' alt='jhfhgf' className='w-100 h-auto circular transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ' />
            </div>
          </section>
          {/* section 1 end*/}
          {/* <ScrollingContent/> */}
          
          {/* section 2nd */}
          <section id='section-2' className="hero d-flex col-md-12 py-10 border-b-2 border-red-600 h-[600px]">
            <div className='col-md-6 py-5'> 
            <img src='https://img.freepik.com/free-photo/3d-cryptocurrency-rendering-design_23-2149074561.jpg?t=st=1716723341~exp=1716726941~hmac=017c046602e4a6af88b76b29cd70bc92c472d6289a34d7e36f3e7aeed063ab7b&w=740' alt='jhfhgf' className='w-100 h-100 circular circular transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...' />
            </div>

            <div className='col-md-6 py-5 '>
            <h1>"The Importance of Secure Price Feeds"</h1>
              <p className=''>Secure price feeds are vital for decentralized applications, ensuring accurate, tamper-proof data essential for reliable operation. They prevent manipulation, enhance trust, maintain market integrity, and mitigate risks, thus underpinning the stability and success of the DeFi ecosystem.</p>
              <div className="flex justify-center">
              <span><button class=" group inline-flex  bg-transparent pt-0"><svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" class="mr-2 transition-all group-hover:scale-110"><circle cx="20" cy="20" r="20" fill="#312F47"></circle><path d="M23.349 18.826c.868.522.868 1.826 0 2.348l-4.396 2.642c-.868.522-1.953-.13-1.953-1.174v-5.284c0-1.044 1.085-1.696 1.953-1.174l4.396 2.642Z" fill="#E6DAFE"></path></svg > <span className="underline hover:text-blue-900 pt-1">see video</span></button></span>             
              <span> <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... rounded-md mx-3">read whitepaper</button></span> 
              </div>
            </div>

          </section>
          {/* section 2nd end */}

          {/* section 3rd  */}
            <div className="market-data-stats px-10 space-x-2 py-20">
              <div className="stat">
                <h1 className='text-4xl'>450+ Data Feeds</h1>
                <p>engineered to meet the security, accuracy, and reliability standards of DeFi.</p>
              </div>
              <div className="stat">
                <h1 className='text-4xl'>300+ Apps</h1>
                <p>trust Pyth data, including DEX’s, lending protocols, and derivatives platforms.</p>
              </div>
              <div className="stat">
                <h3 className='text-4xl'>50+ Blockchain</h3>
                <p>actively receive Pyth real-time market data to power their DeFi ecosystem.</p>
              </div>
              <div className="stat">
                <h3 className='text-4xl'>90M+ Updates</h3>
                <p>per day allow for more precise and secure operations for your smart contracts.</p>
              </div>
            </div>
          {/* </section> */}
          {/* section 3rd end */}

          {/* section 4th */}
          <section id='section-4' className="hero d-flex col-md-12 bg-white text-black h-[600px]">
            <div className='flex border-2 border-slate-600'>
            <div className='col-md-6 py-20 mx-auto'> 
              <h1>"Data You Can Trust"</h1>
              <p className='text-xs leading-normal'>Major financial institutions—including some of the world’s biggest exchanges, market makers, and trading firms—publish their data directly to the network.</p>
              <p className='text-xs leading-normal'>Supercharge your application by accessing the most accurate, lowest-latency, and highest-resolution data directly from these first-party sources.</p>             
              <span> <button className="border border-zinc-600 rounded-md bg-white !text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  hover:bg-indigo-500 duration-300 ... mx-3 " >see all providers</button></span> 
            </div>
              <ImageNotebar />
           </div>
          </section>

          {/* section 4th end */}

          {/* section 5th */}

          <section id='section-5' className="hero d-flex col-md-12 h-[600px] bg-white text-black ">
          <div className='flex border-2 border-slate-600 items-center'>
            <div className='col-md-6  px-5'> 
              <h1>"Every Feed on Every Chain"</h1>
              <p>Each of Pyth's 450+ price feeds are available on 50+ supported blockchains at the same performance.</p>
              <p>Get accurate, high-frequency data no matter whether you choose to build on EVM or Cosmos. Seamlessly scale your application to additional blockchains.</p>
              
              </div>

            <div className='col-md-6 '>
              <img src='https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-bus_1258-176875.jpg?t=st=1716800015~exp=1716803615~hmac=6293df7a55a6afce50eacbbdd900c52acef4a78397818b82847970429f9a01d7&w=740' alt='jhfhgf' className='w-[550px] h-auto circular transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ' />
            </div>
           </div>
          </section>
           {/* section 5th end */}

           {/* section 6th  */}
           <section id='section-5' className="hero d-flex col-md-12 h-[600px] bg-white text-black ">
          <div className='flex border-2 border-slate-600 items-center'>
            <div className='col-md-6  px-5'> 
              <h1>"Data On-Demand"</h1>
              <p>Applications choose when real-time prices appear on-chain. Pay only for what you need, while ensuring that critical updates are delivered.</p>
              <p>Learn how Pyth's pull oracle transformed Synthetix into a highly competitive platform on par with centralized solutions.</p>
              <span> <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... rounded-md mx-3">learn more</button></span> 
              </div>

            <div className='col-md-6 '>
              <img src='https://img.freepik.com/free-photo/3d-shape-glowing-with-bright-holographic-colors_23-2151037280.jpg?t=st=1716799958~exp=1716803558~hmac=fcf43bf7594354c1fe1aa70bed686137f534fbb62ab3dc1b72c799691208663c&w=740' alt='jhfhgf' className='w-[550px] h-auto circular transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ' />
            </div>
           </div>
          </section>
          {/* section 6th end */}

           {/* section 7th */}
           <section id="section-7" className="py-10">
            <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="container mx-auto px-4 py-6">
              <Accordion questions={faqData} />
            </div>
          </section>
          {/* section 7th end */}
          
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
