import React from 'react';
import HomePageImage from './ph.jpg'; 

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-full">
    <div style={{ paddingTop: '30px', paddingRight: '50px', paddingBottom: '50px', paddingLeft: '50px' }}>
      <img src={HomePageImage} alt="Description of the image" style={{ width: '100%', height: '20%' }} />
    </div>
  </div>
  );
};

export default HomePage;
