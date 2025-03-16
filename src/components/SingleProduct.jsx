import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

export default function SingleProduct({ id, img, name, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={img[0]}
          alt={name}
        />
        <h4 className="pt-3 pb-1 text-sm">{name}</h4>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </div> 
    </Link>
  );
}
