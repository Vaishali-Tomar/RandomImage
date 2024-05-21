import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { search } from "../../api";

const Header = () => {
  const [searchKey, setSearchKey] = useState("");
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  const onSearchClick = () => {
    // navigate to home page
    navigate("/");

    // make search call
    search(searchKey).then(setMeals).catch(console.log);
  };

  const renderMealsSection = () => {
    if (meals.length === 0) return;

    return (
      <div className="mt-6 p-4">
        {meals.map(({ strMeal, idMeal }) => (
          <p key={idMeal} className="text-lg font-medium text-gray-700">{strMeal}</p>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="min-h-96 flex flex-col gap-4 justify-center bg-green-300 items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
        <h1 className="text-4xl text-white p-6 bg-black bg-opacity-50 rounded">Recipe App</h1>
        <div className="flex gap-3">
          <input
            type="search"
            placeholder="Search for a meal..."
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            className="p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={onSearchClick}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            🔎
          </button>
        </div>
      </div>
      {renderMealsSection()}
    </div>
  );
};

export default Header;
