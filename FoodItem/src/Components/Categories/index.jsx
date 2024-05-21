import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../api";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories()
      .then(setCategories)
      .catch(console.log);
  }, []);

  const onCategoryClick = (category) => navigate(`/meal/category/${category}`);

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-8">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {categories.map(({ strCategory, idCategory, strCategoryThumb }) => (
          <div
            key={idCategory}
            className="cursor-pointer p-4 bg-gray-800 text-white rounded-lg transform transition duration-300 hover:scale-105"
            onClick={() => onCategoryClick(strCategory)}
          >
            <img 
              src={strCategoryThumb} 
              alt={strCategory} 
              className="w-full h-48 object-cover rounded-t-lg" 
            />
            <p className="mt-2 text-center text-lg font-semibold">{strCategory}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
