import React from 'react';

const ImageWithNote = ({ src, alt, header, paragraph }) => {
  return (
    <div className="relative flex justify-center mx-4 group">
      <img
        src={src}
        alt={alt}
        className="w-[100px] h-[50px] circular transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-64 bg-white p-4 shadow-lg rounded-md z-10">
        <h3 className="text-lg font-semibold mb-2">{header}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

const ImageNotebar = () => {
  return (
    <div className='col-md-6 py-20'>
      <div className='flex justify-center px-10 mx-auto mb-5'>
        <ImageWithNote
          src='https://pyth.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcboe.ba13b829.svg&w=96&q=75'
          alt='CBOE'
          header='CBOE'
          paragraph='Description for CBOE'
        />
        <ImageWithNote
          src='https://pyth.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjane.a5dda43b.svg&w=128&q=75'
          alt='Jane'
          header='Jane'
          paragraph='Description for Jane'
        />
        <ImageWithNote
          src='https://pyth.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fokx.b08aa372.svg&w=96&q=75'
          alt='OKX'
          header='OKX'
          paragraph='Description for OKX'
        />
      </div>
      <div className='flex justify-center px-10 mx-auto my-5'>
        <ImageWithNote
          src='https://pyth.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbinance.3d941c03.svg&w=128&q=75'
          alt='Binance'
          header='Binance'
          paragraph='Description for Binance'
        />
        <ImageWithNote
          src='https://pyth.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fokx.b08aa372.svg&w=96&q=75'
          alt='OKX'
          header='OKX'
          paragraph='Description for OKX'
        />
        <ImageWithNote
          src='https://pyth.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflow.2d261a8b.svg&w=256&q=75'
          alt='Flow'
          header='Flow'
          paragraph='Description for Flow'
        />
      </div>
      <div className='flex justify-center px-10 mx-auto my-5'>
        <ImageWithNote
          src='https://pyth.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwosigma.ee19a286.svg&w=128&q=75'
          alt='Two Sigma'
          header='Two Sigma'
          paragraph='Description for Two Sigma'
        />
        <ImageWithNote
          src='https://pyth.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcms.6d524768.svg&w=96&q=75'
          alt='CMS'
          header='CMS'
          paragraph='Description for CMS'
        />
        <ImageWithNote
          src='https://pyth.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimc.8cd55597.svg&w=128&q=75'
          alt='IMC'
          header='IMC'
          paragraph='Description for IMC'
        />
      </div>
      <div className='flex justify-center px-10 mx-auto my-5'>
        <ImageWithNote
          src='https://pyth.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fakuna.3f331d2a.svg&w=128&q=75'
          alt='Akuna'
          header='Akuna'
          paragraph='Description for Akuna'
        />
        <ImageWithNote
          src='https://pyth.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftower.51f4ee20.svg&w=128&q=75'
          alt='Tower'
          header='Tower'
          paragraph='Description for Tower'
        />
        <ImageWithNote
          src='https://pyth.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwintermute.e02b59e6.svg&w=256&q=75'
          alt='Wintermute'
          header='Wintermute'
          paragraph='Description for Wintermute'
        />
      </div>
    </div>
  );
};

export default ImageNotebar;
