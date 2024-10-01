import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import rec from './data/reciepes.json';

const Receipes = () => {
  const recipes = rec.recipes;

  return (
    <section>
      <div className="md:flex justify-between items-center mb-4">
        <h1 className="text-2xl font-roboto text-[#00723f]">
          <span className="font-bold">RECIPES </span>
          TO LOVE
        </h1>
        <p className="md:flex items-center text-[#00723f]">
          <ArrowForwardIosIcon className="mr-2" />
          <a href="#" className="hover:underline">View All</a>
        </p>
      </div>
      <div>
        <Slide arrows={false} duration={5000} 
              autoplay={true}>
          {recipes.map((recipe, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(/assets/${recipe.image})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '60vh',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgb(255,255,255)',
                  width: '100%',
                  color: 'white',
                  padding: '10px',
                  textAlign: 'center',
                }}
              >
                <div className='flex gap-20 text-center'>
                  <div>
                    <h2 className='text-black text-xl font-roboto font-bold text-center'>{recipe.title}</h2>
                  </div>
                  <div className='bg-[#00723f] rounded-xl p-1'>
                    <ArrowForwardIosIcon size={8}/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
};

export default Receipes;
