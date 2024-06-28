import React from 'react';
import { orders } from '../../../../config/constants';

const RecentlyOrders = ()  => {

    return (
        <div className='flex col-span-12 flex-col gap-[25px] font-[var(--Nunito-sans)] text-[var(--blue-light)] mt-[50px]'>
            <h1 className='text-[40px] font-[700]'>Предыдущие заказы</h1>
            <div className='flex flex-row w-full justify-between border bg-[var(--green-light)]'>
            {orders.map((item) => <div key={Math.random()} className='py-[20px] pr-[70px] pl-[20px] border-l ' >
                <h1 className='text-[20px] font-[500]'>{item.title}</h1>
            </div>)}
            </div>
        </div>
    );
};

export default RecentlyOrders;