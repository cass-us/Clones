import { useState } from 'react';
import { useParams } from 'react-router-dom';
import AssistantPhotoSharpIcon from '@mui/icons-material/AssistantPhotoSharp';
import CakeSharpIcon from '@mui/icons-material/CakeSharp';
import LocalDiningSharpIcon from '@mui/icons-material/LocalDiningSharp';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import rec from './data/reciepes.json';

const Recipe = () => {
  const { id } = useParams();
  const [showIngredients, setShowIngredients] = useState(true); 
  const recipes = rec.recipes;
  const recipe = recipes.find(r => r.id === parseInt(id));

  return (
    <section id="recipe">
      <div className='text-2xl font-bold font-roboto ml-4 mt-8'>
        {recipe ? <h1>{recipe.title}</h1> : <h1>Recipe not found</h1>}
      </div>
      <div>
        <p className='mb-8 mt-4'><a href="/"><ArrowBackIosNewSharpIcon className='text-[#00723f] '/> Back to recipe</a></p> 
      </div>
      <section className='md:flex'>

        <div>
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <div className=''>
          <h2 className='ml-4 font-bold font-roboto mt-4 mb-2'>Tags</h2>
            <div className='flex gap-4 mt-2 p-2 ml-4 w-96 h-10'>
            <div className='flex gap-1'>
              <LocalDiningSharpIcon className='text-green-700'/>
              <p>{recipe.tags[1]}</p>
            </div>
            <div className='flex '>
              <CakeSharpIcon className='text-green-700'/>
              <p>{recipe.prepared}</p>
            </div>
            <div className='flex '>
              <AssistantPhotoSharpIcon className='text-green-700'/>
              <p>{recipe.country}</p>
            </div>
          </div>
        </div>
        <div className='ml-4 mt-8 '>
          <p>{recipe.description}</p>
        </div>
        <div className='flex mt-8 mb-2 gap-2 ml-4'>
          <div className=''>
            <h2 className='font-bold '>Prep time</h2>
            <p>{recipe.prep_time}</p>
          </div>
          <div className=''>
            <h2 className='font-bold '>Cooking time</h2>
            <p>{recipe.cooking_time}</p>
          </div>
        </div>
      </section>

     
      <div className="mt-8">
        <div className="flex justify-center  mb-4">
          <button 
            className={`px-4 py-2 font-bold ${showIngredients ? 'bg-green-500' : 'bg-gray-300'}`}
            onClick={() => setShowIngredients(true)}
          >
            Ingredients
          </button>
          <button 
            className={`px-4 py-2 font-bold ${!showIngredients ? 'bg-green-500' : 'bg-gray-300'}`}
            onClick={() => setShowIngredients(false)}
          >
            Directions
          </button>
        </div>

       
        <div className="flex justify-center">
          {showIngredients ? (
            <div className="w-full max-w-md bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="font-bold text-lg mb-4">Ingredients</h2>
              <ul className="list-disc ml-5">
                {Object.keys(recipe.ingredients).map(section => (
                  <li key={section}>
                    <h3 className="font-bold">{section}</h3>
                    <ul className="ml-5">
                      {recipe.ingredients[section].map((item, index) => (
                        <li key={index}>
                          {item.quantity} {item.ingredient} {item.unit ? item.unit : ''}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="w-full max-w-md bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="font-bold text-lg mb-4">Directions</h2>
              <p>{recipe.directions}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Recipe;
