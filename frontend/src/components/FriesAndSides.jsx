import { useEffect, useState } from "react";

const FriesAndSides = ({ items, search }) => {
  const [sides, setSides] = useState([]);

  useEffect(() => {
    const fetchSides = async () => {
      await fetch("http://localhost:4000/api/v1/items/getsides")
        .then((response) => response.json())
        .then(({ sides }) => {
          setSides(sides);
        });
    };
    fetchSides();
  }, []);

  return (
    <>
      <div>
        <h2 className="text-bold text-[20px] leading-[22px]">
          Fries and Sides
        </h2>
        {sides.length === 0
          ? "Loading..."
          : search === ""
          ? sides.map((side) => <div key={side._id}>{side.name}</div>)
          : sides
              .filter((side) => {
                return (
                  side.name
                    ?.toLowerCase()
                    .includes(search?.toLowerCase() ?? "") ?? false
                );
              })
              .map((side) => <div key={side._id}>{side.name}</div>)}
      </div>
    </>
  );
};

export default FriesAndSides;
