import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import SingleProduct from "./SingleProduct";

export default function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);
  return (
    <section className="my-10">
      <div className="text-center text-3xl py-8">
        <Title title={"BEST"} innerTitle={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus culpa
          dolorem sit mollitia nihil accusamus sequi earum cumque vero adipisci
          nisi atque saepe at qui repudiandae, eligendi magni.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => {
          return (
            <SingleProduct
              key={index}
              id={item._id}
              name={item.name}
              img={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </section>
  );
}
