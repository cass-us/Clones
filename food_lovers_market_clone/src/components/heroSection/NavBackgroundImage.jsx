import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import backgroundData from './Data/background.json'; 

const NavBackgroundImage = () => {
  const images = backgroundData.background_images;

  return (
    <section className='relative'>
      <Slide arrows={false} indicators>
        {images.map((imageData, index) => (
          <div
            key={index} 
            style={{
              backgroundImage: `url(${imageData.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '60vh',
            }}
          >
            <h2 style={{ color: 'white', textAlign: 'center', padding: '20px' }}></h2>
            <p style={{ color: 'white', textAlign: 'center' }}></p>
          </div>
        ))}
      </Slide>
    </section>
  );
};

export default NavBackgroundImage;
