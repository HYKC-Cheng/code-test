import React from 'react';
import Trending from './components/Trending';

const App: React.FC = () => {

  return (
    <div className='min-w-[1348px] w-full h-screen bg-custom-black font-book'>
      <div className='w-[1348px] mx-auto overflow-hidden'>
        <Trending />
      </div>
    </div>
  );
};

export default App;
