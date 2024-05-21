import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryMeals from "../pages/CategoryMeals";
import Homepage from "../pages/HomePage";
import ResipeDetails from "../pages/ResipeDetails";
import Header from "../Components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/meal/category/:category" element={<CategoryMeals />} />
        <Route path="/meal/:mealId" element={<ResipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;