import React from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import Product from '../Product';
const AllProducts = () => {
    const products = useOutletContext()
    return (
        <>
        <div className="border sm:grid grid-cols-2 md:grid-cols-3 col-span-9 gap-2 " id='shop'>
            {
            products.map((product) => <Product product={product} key={product.id}/>)
            }
        </div>
        </>
    );
};

export default AllProducts;