import { Header } from "@/components";
import DirectionForProfile from "./components/DirectionForProfile/DirectionForProfile";
import UserProfile from "./components/UserProfile/UserProfile";
import RecentlyOrders from "./components/RecentlyOrders/RecentlyOrders";
import { orders } from "@/config/constants";

const Profiles = () => {
  return (
    <div className="container">
      <div className="col-span-full">
        <Header />
        <DirectionForProfile />
        <UserProfile />
        <RecentlyOrders array={orders} />
      </div>
    </div>
  );
};

export default Profiles;
