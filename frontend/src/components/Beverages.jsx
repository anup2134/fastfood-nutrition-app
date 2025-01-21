import { useEffect, useState } from "react";

const Beverages = ({ search }) => {
  const [beverages, setBeverages] = useState([]);

  useEffect(() => {
    const fetchBurgers = async () => {
      await fetch("http://localhost:4000/api/v1/items/getbeverages")
        .then((res) => res.json())
        .then(({ beverages }) => {
          setBeverages(beverages);
        });
    };
    fetchBurgers();
  }, []);

  return (
    <div>
      <h2 className="text-bold text-[20px] leading-[22px]">Beverages</h2>
      {beverages.length === 0
        ? "Loading..."
        : search === ""
        ? beverages.map((beverage) => (
            <div key={beverage._id}>{beverage.name}</div>
          ))
        : beverages
            .filter((beverage) => {
              return (
                beverage.name
                  ?.toLowerCase()
                  .includes(search?.toLowerCase() ?? "") ?? false
              );
            })
            .map((beverage) => <div key={beverage._id}>{beverage.name}</div>)}
    </div>
  );
};

export default Beverages;
