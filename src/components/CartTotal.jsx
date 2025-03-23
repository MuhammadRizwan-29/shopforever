import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

export default function CartTotal() {
  const { currency, delievery_fee, getCartAmount } = useContext(ShopContext);
  return (
    <section className="w-full">
      <div className="text-2xl">
        <Title title={"CART"} innerTitle={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <h6>Subtotal</h6>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <h6>Shipping Fee</h6>
          <p>
            {currency} {delievery_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <p>
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delievery_fee}.00
          </p>
        </div>
        <hr />
      </div>
    </section>
  );
}
