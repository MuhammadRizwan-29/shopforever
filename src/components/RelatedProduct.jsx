import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import SingleProduct from "./SingleProduct";

export default function RelatedProduct({ category, subCategory }) {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);
  return (
    <section>
      <div className="my-12">
        <div className="text-center text-3xl py-2">
          <Title title={"RELATED"} innerTitle={"PRODUCTS"} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {related.map((item, index) => {
            return (
              <SingleProduct
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                img={item.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
