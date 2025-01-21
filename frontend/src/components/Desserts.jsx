import { useEffect, useState } from "react";

const Desserts = ({ search }) => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    const fetchBurgers = async () => {
      await fetch("http://localhost:4000/api/v1/items/getdesserts")
        .then((res) => res.json())
        .then(({ desserts }) => {
          setDesserts(desserts);
        });
    };
    fetchBurgers();
  }, []);

  return (
    <div>
      <h2 className="text-bold text-[20px] leading-[22px]">Desserts</h2>
      {desserts.length === 0
        ? "Loading..."
        : search === ""
        ? desserts.map((dessert) => <div key={dessert._id}>{dessert.name}</div>)
        : desserts
            .filter((dessert) => {
              return (
                dessert.name
                  ?.toLowerCase()
                  .includes(search?.toLowerCase() ?? "") ?? false
              );
            })
            .map((dessert) => <div key={dessert._id}>{dessert.name}</div>)}
    </div>
  );
};

export default Desserts;
