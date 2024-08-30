import { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "../components/ItemList";
const HomePage = () => {
  const [itemName, setItemName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const encodedItem = encodeURIComponent(itemName);
        const { data } = await axios.get(
          `http://localhost:4000/api/v1/items/searchItem/${encodedItem}`
        );
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (itemName) {
      const timer = setTimeout(() => {
        fetchData();
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [itemName]);
  return (
    <div className="flex flex-col items-center">
      <form className="flex justify-center mt-10">
        <input
          className="border-2 border-black rounded-md p-2 w-[80vw]"
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </form>
      <ItemList data={data} />
    </div>
  );
};

export default HomePage;
