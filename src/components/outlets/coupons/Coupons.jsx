import React from 'react';
import Banner from '../../banner/Banner';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Coupon from './Coupon';

const Coupons = () => {
    const data = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>Coupons | Gadget Heaven</title>
            </Helmet>
            <Banner title={'Coupons'} subtitle={'Explore a variety of coupons and special offers tailored just for you. Enjoy discounts on our top selections.Don’t miss out on amazing deals!'}/>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col items-center  mt-5 gap-3'>
                    <h2 className='text-3xl font-medium text-pink-600'>Special Offer !</h2>
                    <p className='text-xl text-slate-800'>Will be available for use from 21 November</p>
                   <div className="grid grid-cols-3 gap-5">
                    {
                        data.map(coupon => <Coupon coupon={coupon} />)
                    }
                   </div>
                </div>

            </div>
        </div>
    );
};

export default Coupons;