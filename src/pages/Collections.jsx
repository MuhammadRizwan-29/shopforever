import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "./../components/Title";
import SingleProduct from "./../components/SingleProduct";

export default function Collections() {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilters = () => {
    let productCopy = products.slice();

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProduct(productCopy);
  };

  const sortProduct = () => {
    let filterProductCopy = filterProduct.slice();

    switch (sortType) {
      case "low-high":
        setFilterProduct(filterProductCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProduct(filterProductCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilters();
        break;
    }
  };

  useEffect(() => {
    applyFilters();
  }, [category, subCategory]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <section>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 botder-t">
        {/* Filter Option */}
        <div className="min-w-60">
          <h4
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
            onClick={() => setShowFilter(!showFilter)}
          >
            FILTERS{" "}
            <img
              src={assets.dropdown_icon}
              alt="Dropdown"
              className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            />
          </h4>
          {/* Product Card */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <h6 className="mb-3 text-sm font-medium">CATEGORIES</h6>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Men"}
                  onChange={toggleCategory}
                />{" "}
                Men
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Women"}
                  onChange={toggleCategory}
                />{" "}
                Women
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Kids"}
                  onChange={toggleCategory}
                />{" "}
                Kids
              </p>
            </div>
          </div>
          <div
            className={`border border-gray-300 pl-5 py-3 my-5 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <h6 className="mb-3 text-sm font-medium">TYPE</h6>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  onChange={toggleSubCategory}
                  value={"Topwear"}
                />{" "}
                Topwear
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  onChange={toggleSubCategory}
                  value={"Bottomwear"}
                />{" "}
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  onChange={toggleSubCategory}
                  value={"Winterwear"}
                />{" "}
                Winterwear
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title title={"All"} innerTitle={"COLLECTIONS"} />
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 border-gray-300 text-sm px-2"
            >
              <option value="relavent">Sort by: Relavnet</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProduct.map((item, index) => {
              return (
                <SingleProduct
                  key={index}
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  img={item.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
