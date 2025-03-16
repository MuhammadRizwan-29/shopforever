import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import SingleProduct from "./SingleProduct";

export default function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, []);
  return (
    <section className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title title={"LATEST"} innerTitle={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-base md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          repellat odio corrupti error fugiat libero quisquam? Quae voluptas
          ipsum veritatis aut sed molestiae eius impedit at, beatae consectetur
          repellat eum!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {latestProduct.map((item, index) => {
          return (
            <SingleProduct
              key={index}
              id={item._id}
              img={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </section>
  );
}
