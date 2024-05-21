import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMealsBasedOnCategories } from "../../api";

const CategoryMeals = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMealsBasedOnCategories(category)
      .then(setMeals)
      .catch(console.log);
  }, [category]);

  const onMealClick = (idMeal) => navigate(`/meal/${idMeal}`);

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-8">Meals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {meals.map(({ strMeal, idMeal, strMealThumb }) => (
          <div
            key={idMeal}
            className="cursor-pointer p-4 bg-gray-800 text-white rounded-lg transform transition duration-300 hover:scale-105"
            onClick={() => onMealClick(idMeal)}
          >
            <img 
              src={strMealThumb} 
              alt={strMeal} 
              className="w-full h-48 object-cover rounded-t-lg" 
            />
            <p className="mt-2 text-center text-lg font-semibold">{strMeal}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryMeals;
