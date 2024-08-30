import { useLocation } from "react-router-dom";

const DisplayItem = () => {
  const { state: item } = useLocation();
  return (
    <div>
      <h1>{item.name}</h1>
      <h2>{item.company}</h2>
      {item.size === "No options" ? null : <h2>{item.size}</h2>}
      <h2>{item.dietary}</h2>
      <h2>{item.category}</h2>
      <ul>
        Item Nutrional Value
        <li>Calories: {item.nutrition.calories}</li>
        <li>Fats: {item.nutrition.fats}</li>
        <li>Carbs: {item.nutrition.carbs}</li>
        <li>Protein: {item.nutrition.protein}</li>
        <li>Sugar: {item.nutrition.sugar}</li>
        <li>Sodium: {item.nutrition.sodium}</li>
        <li>Trans Fat: {item.nutrition.trans}</li>
        <li>Cholesterol: {item.nutrition.cholesterol}</li>
        <li>Carbohydrate Content: {item.nutrition.carbs}</li>
        <li>Saturated Fat Content: {item.nutrition.fats}</li>
      </ul>
    </div>
  );
};

export default DisplayItem;
