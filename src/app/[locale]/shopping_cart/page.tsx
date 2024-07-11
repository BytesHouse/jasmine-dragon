import { ChoiseForCart, Header } from "@/components";
import CheckForOrders from "@/components/CheckForOrders/CheckForOrders";
import Footer from "@/components/Footer/Footer";

const ShoppingCart = () => {
  return (
    <>
      {/* <div className="flex flex-col col-span-12 mt-[50px] gap-[50px] relative font-[var(--Playfair-Display)] italic text-[var(--blue-light)]"> */}
      <main className="container !py-[50px]">
        <h4 className="font-medium col-span-full">Корзина</h4>

        {/* <div className="flex flex-row  justify-between"> */}
        <ChoiseForCart />
        <CheckForOrders />
        {/* </div> */}
      </main>
      {/* </div> */}
    </>
  );
};

export default ShoppingCart;
