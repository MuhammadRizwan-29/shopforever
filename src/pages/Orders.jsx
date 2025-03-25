import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

export default function Orders() {
  const { products, currency } = useContext(ShopContext);
  return (
    <section className="border-t pt-16">
      <div className="text-2xl">
        <Title title={"MY"} innerTitle={"ORDER"} />
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => {
          return (
            <div
              className="py-4 border-t text-gray-700 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
              key={index}
            >
              <div className="flex items-start gap-6 text-sm">
                <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
                <div>
                  <h6 className="sm:text-base font-medium">{item.name}</h6>
                  <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                    <p className="text-lg">
                      {currency}
                      {item.price}
                    </p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className="mt-2">
                    Date: <span className="text-gray-400">25, Jul 2025</span>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <h6 className="text-sm md:text-base">Ready to ship</h6>
                </div>
                <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                  Track Order
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
