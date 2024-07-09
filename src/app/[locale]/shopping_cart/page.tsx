import { ChoiseForCart, Header } from "@/components";
import CheckForOrders from "@/components/CheckForOrders/CheckForOrders";
import Footer from "@/components/Footer/Footer";

const ShoppingCart = () => {
  return (
    <>
      <Header />
      {/* <div className="flex flex-col col-span-12 mt-[50px] gap-[50px] relative font-[var(--Playfair-Display)] italic text-[var(--blue-light)]"> */}
      <div className="container">
        <h4 className="font-medium col-span-full">Корзина</h4>

        {/* <div className="flex flex-row  justify-between"> */}
        <ChoiseForCart />
        <CheckForOrders />
        {/* </div> */}
      </div>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default ShoppingCart;
