import { useParams } from 'react-router-dom';
import AssistantPhotoSharpIcon from '@mui/icons-material/AssistantPhotoSharp';
import CakeSharpIcon from '@mui/icons-material/CakeSharp';
import LocalDiningSharpIcon from '@mui/icons-material/LocalDiningSharp';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import rec from './data/reciepes.json';

const Recipe = () => {
  const { id } = useParams();
  const recipes = rec.recipes;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  return (
    <section id="recipe">
      <div className="text-2xl font-bold font-roboto ml-4 mt-8">
        {recipe ? <h1>{recipe.title}</h1> : <h1>Recipe not found</h1>}
      </div>
      <div>
        <p className="mb-8 mt-4">
          <a href="/">
            <ArrowBackIosNewSharpIcon className="text-[#00723f]" /> Back to recipe
          </a>
        </p>
      </div>

      <section className="md:flex md:gap-8">
       
        <div className="md:w-1/2">
          <img src={recipe.image} alt={recipe.title} className="w-full h-auto" />
        </div>

        
        <div className="md:w-1/2">
         
          <h2 className="ml-4 font-bold font-roboto">Tags</h2>
          <div className="flex gap-4 mt-2 p-2 ml-4 w-full md:w-96 h-10 bg-gray-300">
            <div className="flex gap-1">
              <LocalDiningSharpIcon className="text-green-700" />
              <p>{recipe.tags[1]}</p>
            </div>
            <div className="flex">
              <CakeSharpIcon className="text-green-700" />
              <p>{recipe.prepared}</p>
            </div>
            <div className="flex">
              <AssistantPhotoSharpIcon className="text-green-700" />
              <p>{recipe.country}</p>
            </div>
          </div>

          
          <div className="ml-4 mt-8">
            <p>{recipe.description}</p>
          </div>

          <div className="flex mt-8 mb-2 gap-4 ml-4">
            <div>
              <h2 className="font-bold">Prep time</h2>
              <p>{recipe.prep_time}</p>
            </div>
            <div>
              <h2 className="font-bold">Cooking time</h2>
              <p>{recipe.cooking_time}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Recipe;
