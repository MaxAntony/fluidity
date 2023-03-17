import React, { useState } from 'react';

import { images } from '../data/data';
import { LinkContainer } from './LinkContainer/LinkContainer';
import { Searchbar } from './Searchbar/Searchbar';
import { Settings } from './Settings/Settings';
import { Design as DesignSettings } from './Settings/settingsHandler';

export const Startpage = () => {
  const [img, setImg] = useState(DesignSettings.getWithFallback().image);

  return (
    <div className='relative m-auto h-full max-w-[1920px]'>
      <div
        style={{ height: 'calc(100% - 100px)' }}
        className='flex flex-row items-center justify-start py-0 px-[100px]'
      >
        <div>
          <img
            style={{
              border: '2px solid var(--default-color)',
              animation: 'circling-shadow 4s ease 0s infinite normal',
            }}
            className='h-[400px] w-[400px] object-cover p-[10px]'
            src={img}
            onError={() => setImg(images[0].value)}
            alt='img'
          />
        </div>
        <LinkContainer />
      </div>
      <Searchbar />
      <Settings />
    </div>
  );
};
