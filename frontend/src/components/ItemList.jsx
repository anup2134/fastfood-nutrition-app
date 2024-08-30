// import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const ItemList = ({ data }) => {
  return data.length ? (
    <div className="flex flex-col items-center border-2 border-black w-[75vw]">
      <ul>
        {data.map((item) => (
          <Link
            to={`/item/${item._id}`}
            className="text-center py-1 block"
            key={item._id}
            state={item}
          >
            {item.size === "No options"
              ? item.name
              : `${item.name} - ${item.size}`}
          </Link>
        ))}
      </ul>
    </div>
  ) : (
    <div></div>
  );
};

export default ItemList;
