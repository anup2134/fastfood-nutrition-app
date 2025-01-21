import BurgerAndWraps from "./BurgerAndWraps";
import FriesAndSides from "./FriesAndSides";
import Beverages from "./Beverages";
import Desserts from "./Desserts";
import { useState } from "react";

const Menu = ({ search }) => {
  const [selectedItems, setSelectedItems] = useState(new Array());
  const [activeMenu, setActiveMenu] = useState(1);
  return (
    <div className="max-w-[1100px]">
      <ul className="flex gap-x-8 mb-10">
        <button
          className={`pb-4 ${
            activeMenu === 1
              ? " border-black border-b-4 font-bold rounded-md"
              : ""
          }}`}
          onClick={() => {
            setActiveMenu(1);
          }}
        >
          Burgers and Wraps
        </button>
        <button
          className={`pb-4 ${
            activeMenu === 2
              ? " border-black border-b-4 font-bold rounded-md"
              : ""
          }}`}
          onClick={() => {
            setActiveMenu(2);
          }}
        >
          Fries and Sides
        </button>
        <button
          className={`pb-4 ${
            activeMenu === 3
              ? " border-black border-b-4 font-bold rounded-md"
              : ""
          }}`}
          onClick={() => {
            setActiveMenu(3);
          }}
        >
          Desserts
        </button>
        <button
          className={`pb-4 ${
            activeMenu === 4
              ? " border-black border-b-4 font-bold rounded-md"
              : ""
          }}`}
          onClick={() => {
            setActiveMenu(4);
          }}
        >
          Beverages
        </button>
      </ul>

      <BurgerAndWraps search={search} activeTab={activeMenu} />
      {/* <FriesAndSides search={search} />
        <Beverages search={search} />
        <Desserts search={search} /> */}
    </div>
  );
};

export default Menu;
