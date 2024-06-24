import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import DropdownCheckbox from './DropDown';
import FlipCard from '../pages/Flipcard';
import '../flipcard.css';

function MeetPythUser() {
  const flipCardsData = [
    [
      {
        frontTextTop: 'DERIVATIVES',
        frontImage: 'https://pyth.network/_next/image?url=%2Fimages%2Fconsumers%2F100x.svg&w=256&q=75',
        frontTextBottom: 'BLOCKCHAINS',
        backText: '100x Finance',
        backParagraph: '100x is a blazing-fast perp DEX built for Blast.',
        button1Text: 'WEBSITE',
        button2Text: 'TWITTER',
      },
      {
        frontTextTop: 'Front Text 2 - Top',
        frontImage: 'https://via.placeholder.com/150',
        frontTextBottom: 'Front Text 2 - Bottom',
        backText: 'Back Text 2',
        backParagraph: 'This is a paragraph on the back of the card.',
        button1Text: 'Button 1',
        button2Text: 'Button 2',
      },
      {
        frontTextTop: 'Front Text 3 - Top',
        frontImage: 'https://via.placeholder.com/150',
        frontTextBottom: 'Front Text 3 - Bottom',
        backText: 'Back Text 3',
        backParagraph: 'This is a paragraph on the back of the card.',
        button1Text: 'Button 1',
        button2Text: 'Button 2',
      },
    ],
    [
      {
        frontTextTop: 'Front Text 4 - Top',
        frontImage: 'https://via.placeholder.com/150',
        frontTextBottom: 'Front Text 4 - Bottom',
        backText: 'Back Text 4',
        backParagraph: 'This is a paragraph on the back of the card.',
        button1Text: 'Button 1',
        button2Text: 'Button 2',
      },
      {
        frontTextTop: 'Front Text 5 - Top',
        frontImage: 'https://via.placeholder.com/150',
        frontTextBottom: 'Front Text 5 - Bottom',
        backText: 'Back Text 5',
        backParagraph: 'This is a paragraph on the back of the card.',
        button1Text: 'Button 1',
        button2Text: 'Button 2',
      },
      {
        frontTextTop: 'Front Text 6 - Top',
        frontImage: 'https://via.placeholder.com/150',
        frontTextBottom: 'Front Text 6 - Bottom',
        backText: 'Back Text 6',
        backParagraph: 'This is a paragraph on the back of the card.',
        button1Text: 'Button 1',
        button2Text: 'Button 2',
      },
    ],
    [
      {
        frontTextTop: 'Front Text 7 - Top',
        frontImage: 'https://via.placeholder.com/150',
        frontTextBottom: 'Front Text 7 - Bottom',
        backText: 'Back Text 7',
        backParagraph: 'This is a paragraph on the back of the card.',
        button1Text: 'Button 7.1',
        button2Text: 'Button 2',
      },
      {
        frontTextTop: 'Front Text 8 - Top',
        frontImage: 'https://via.placeholder.com/150',
        frontTextBottom: 'Front Text 8 - Bottom',
        backText: 'Back Text 8',
        backParagraph: 'This is a paragraph on the back of the card.',
        button1Text: 'Button 1',
        button2Text: 'Button 8.2',
      },
      {
        frontTextTop: 'Front Text 9 - Top',
        frontImage: 'https://via.placeholder.com/150',
        frontTextBottom: 'Front Text 9 - Bottom',
        backText: 'Back Text 9',
        backParagraph: 'This is a paragraph on the back of the card.',
        button1Text: 'Button 1',
        button2Text: 'Button 9.2',
      },
    ],
  ];

  const createFlipCards = (flipCardsData) => {
    return flipCardsData.map((row, rowIndex) => (
      <div className="flip-card-row d-flex justify-content-around" key={rowIndex}>
        {row.map((cardData, cardIndex) => (
          <FlipCard key={cardIndex} {...cardData} />
        ))}
      </div>
    ));
  };

  return (
    <div>
      <Navbar />
      {/* section 1st */}
      <section id='section-1' className="hero d-flex col-md-12 border-b-2 border-red-600 h-[500px]">
        <div className='col-md-6 d-flex flex-column text-left justify-content-center'>
          <div className='text-white text-6xl'>Meet the teams powered by Pyth</div>
          <p className='text-white w-[380px] pt-4'>Learn more about our growing community of consumers using Pyth's high fidelity oracle in DeFi and Web3.</p>
        </div>

        <div className='col-md-6 '>
          <img src='https://img.freepik.com/free-photo/3d-shape-glowing-with-bright-holographic-colors_23-2151037241.jpg?t=st=1716793974~exp=1716797574~hmac=db9a1da044d0e755a2ff81ca0aeb058ae47922e69e52b7b149d7af4ab770d7e2&w=900' alt='jhfhgf' className='w-100 h-auto circular transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ' />
        </div>
      </section>
      {/* section 1 end */}
      <section id='third'>
        <div className="flip-card-container bg-[#1c1c1e] py-5">
          {createFlipCards(flipCardsData)}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MeetPythUser;
