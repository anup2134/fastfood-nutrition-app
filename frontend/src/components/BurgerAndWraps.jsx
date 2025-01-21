import { useEffect, useState } from "react";

const BurgerAndWraps = ({ search }) => {
  const [burgers, setBurgers] = useState([]);
  const [viewMore, setViewMore] = useState({});

  useEffect(() => {
    const fetchBurgers = async () => {
      await fetch("http://localhost:4000/api/v1/items/getburgers")
        .then((res) => res.json())
        .then(({ burgers }) => {
          setBurgers(burgers);
          const temp = {};
          for (const burger of burgers) {
            temp[burger._id] = false;
          }
          setViewMore(temp);
        });
    };
    fetchBurgers();
  }, []);

  const handleViewMore = (buttonKey) => {
    setViewMore((prevViewMore) => ({
      ...prevViewMore,
      [buttonKey]: !prevViewMore[buttonKey],
    }));
  };

  return (
    <div>
      <h2 className="font-bold text-xl leading-[22px] pb-8">
        Burgers and Wraps
      </h2>
      <div className="flex flex-wrap gap-x-6 gap-y-8">
        {burgers.length === 0
          ? "Loading..."
          : search === ""
          ? burgers.map((burger) => (
              <div
                key={burger._id}
                className="w-64 border border-[#e6e6e6] rounded-md bg-[#f5f7fa]"
              >
                <h3 className="text-[16px] leading-[18px] text-center font-[500] py-3">
                  {burger.name}
                </h3>
                <ul className="flex flex-col gap-y-1 pl-4">
                  <li>Calories: {burger.nutrition.calories}</li>
                  <li>Fat: {burger.nutrition.fat}</li>
                  <li>Carbs: {burger.nutrition.carbs}</li>
                  <li>Protein: {burger.nutrition.protein}</li>
                  <button
                    className="rounded-md py-1 flex items-center justify-center bg-[#08398380] gap-x-2 w-full"
                    key={burger._id}
                    onClick={() => handleViewMore(burger._id)}
                  >
                    <p>View Nutrition</p>
                    <div className="h-[20px] w-[20px] border-[3px] border-black rounded-full flex items-center justify-center">
                      <div className="h-[7px] w-[7px] border-r-[2px] border-b-[2px] border-black rotate-45"></div>
                    </div>
                  </button>
                  {viewMore[burger._id] && (
                    <ul>
                      <li>Saturated Fat: {burger.nutrition.saturated}</li>
                      <li>Trans Fat: {burger.nutrition.trans}</li>
                      <li>Cholesterol: {burger.nutrition.cholesterol}</li>
                      <li>Sugar: {burger.nutrition.sugar}</li>
                      <li>Sodium: {burger.nutrition.sodium}</li>
                    </ul>
                  )}
                </ul>
              </div>
            ))
          : burgers
              .filter((burger) => {
                return (
                  burger.name
                    ?.toLowerCase()
                    .includes(search?.toLowerCase() ?? "") ?? false
                );
              })
              .map((burger) => (
                <div
                  key={burger._id}
                  className="w-64 border border-[#e6e6e6] rounded-md bg-[#f5f7fa]"
                >
                  <h3 className="text-[16px] leading-[18px] text-center font-[500] py-3">
                    {burger.name}
                  </h3>
                  <div className="flex flex-col gap-y-1">
                    <ul className="pl-4">
                      <li>Calories: {burger.nutrition.calories}</li>
                      <li>Fat: {burger.nutrition.fat}</li>
                      <li>Carbs: {burger.nutrition.carbs}</li>
                      <li>Protein: {burger.nutrition.protein}</li>
                    </ul>
                    <button
                      className="rounded-md py-1 flex items-center justify-center bg-[#08398380] gap-x-2 w-[100%]"
                      onClick={() => handleViewMore(burger._id)}
                    >
                      <p>View Nutrition</p>
                      <div className="h-[20px] w-[20px] border-[3px] border-black rounded-full flex items-center justify-center">
                        <div className="h-[7px] w-[7px] border-r-[2px] border-b-[2px] border-black rotate-45"></div>
                      </div>
                    </button>
                    {viewMore[burger._id] && (
                      <ul className="pl-4">
                        <li>Saturated Fat: {burger.nutrition.saturated}</li>
                        <li>Trans Fat: {burger.nutrition.trans}</li>
                        <li>Cholesterol: {burger.nutrition.cholesterol}</li>
                        <li>Sugar: {burger.nutrition.sugar}</li>
                        <li>Sodium: {burger.nutrition.sodium}</li>
                      </ul>
                    )}
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
};

export default BurgerAndWraps;
