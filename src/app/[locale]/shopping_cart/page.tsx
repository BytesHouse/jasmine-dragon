import { ChoiseForCart } from "../../../components";
import CheckForOrders from "../../../components/CheckForOrders/CheckForOrders";

const ShoppingCart = () => {
  return (
    <div className="flex flex-col col-span-12 mt-[50px] gap-[50px] relative font-[var(--Playfair-Display)] italic text-[var(--blue-light)]">
      <h1 className="text-[40px] font-[700]">Корзина</h1>
      <div className="flex flex-row  justify-between">
        <ChoiseForCart />
        <CheckForOrders />
      </div>
    </div>
  );
};

export default ShoppingCart;
