// import { orders } from '../../../../config/constants';

const RecentlyOrders = ({ array }) => {
  return (
    <div className="flex col-span-full flex-col gap-[25px] font-[var(--Nunito-sans)] text-[var(--blue-light)]">
      <h4 className="simple font-bold">Предыдущие заказы</h4>
      <div className="flex flex-row w-full justify-between border bg-[var(--green-light)]">
        {array.map((item) => (
          <div
            key={Math.random()}
            className="py-[20px] pr-[70px] pl-[20px] border-l "
          >
            <h5 className="simple font-semibold">{item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyOrders;
