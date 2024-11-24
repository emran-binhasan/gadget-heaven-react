import React, { useEffect, useState } from 'react';
import Banner from '../../banner/Banner';
import CartProduct from './CartProduct';
import WishListProduct from './WishListProduct';
import { TbArrowsSort } from "react-icons/tb";
import { addToCart,getOldCartData,removeFromCart } from '../../utilities/addingCart';
import { addToWishlist,getOldListData,removeFromWishList } from '../../utilities/addingWishlist';
import { Helmet } from 'react-helmet';
import purchaseImg from '../../../assets/Group.png'
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {

    // Load Cart Items
    const [cartProduct,setCardProduct] = useState([])
    useEffect(()=>{
    const loadedCartProduct = getOldCartData();
    setCardProduct(loadedCartProduct)
    },[])

    // Load Wishlist Items
    const [wishlistProduct,setWishListProduct] = useState([])
    useEffect(()=>{
        const loadWishList = getOldListData();
        setWishListProduct(loadWishList)
    },[])

    const totalPrice = cartProduct.reduce((sum,cart) => sum + cart.price ,0)
    
    // Remove Cart Items
    const handleRemoveCart = (id) =>{
        removeFromCart(id);
        const loadedCartProduct = getOldCartData();
        setCardProduct(loadedCartProduct)
    }
    
    // Remove Wishlist Items
    const handleRemoveList = (id) =>{
        removeFromWishList(id);
        const loadWishList = getOldListData();
        setWishListProduct(loadWishList)
    }



    // sort by price
    const sortByPrice = (data) =>{
       const sorted = [...data].sort((a,b)=>b.price - a.price);
       setCardProduct(sorted)
    }


    // default value for dashboard
    const [cart,setCart] = useState(true);
    const[wishList,setWishList] = useState(false);

    const showCart =() => {
        setCart(true);
        setWishList(false);
        const loadedCartProduct = getOldCartData();
        setCardProduct(loadedCartProduct)
    }

    const showWishlist =() => {
        setWishList(true)
        setCart(false)
    }

    const navigate = useNavigate()

    const handleClosePurchase = () =>{
        localStorage.setItem('Products',[])
        navigate('/')
    }
  
    
    return (
    <div className='mx-auto'>
        <Helmet>
            <title>Dashboard | Gadget Heaven</title>
        </Helmet>
            <Banner title={'Dashboard'} showCart={showCart} showWishlist={showWishlist} cart={cart} wishList={wishList}
            subtitle={'Keep track of your favorite products and manage your cart in one place, ensuring an effortless and enjoyable shopping experience.'}/>

    {cart?<div className='max-w-7xl mx-auto'>
                <div className={` flex items-center justify-between my-4 `}>
                            <div>
                                <h3 className='text-xl font-medium'>Cart</h3>
                            </div>
                            <div  className='flex justify-between items-center gap-2'>
                                <p>Total cost {totalPrice.toFixed(2)}</p>
                                <button onClick={()=>sortByPrice(cartProduct)} className='border rounded-2xl text-sm border-[#9538E2] px-3 py-1'>Sort by price <TbArrowsSort className='inline w-4 h-4'/></button>
                                <button onClick={()=>{document.getElementById('open_modal').showModal();
                                }} className='border rounded-2xl text-sm bg-[#9538E2] px-3 py-1 text-white'  disabled={cartProduct.length >0 ?false:true} >Purchase</button>
                            </div>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <dialog id="open_modal" className="modal">
                                    <div className="modal-box">
                                        <div className='flex flex-col items-center gap-2'>
                                            <div>
                                                <img src={purchaseImg}/>
                                            </div>
                                            <div>
                                                <h2 className='font-semibold my-2 text-lg'>Payment Succesful</h2>
                                            </div>
                                            <div className='border-t-2 mt-1 pb-2 w-3/4 mx-auto'></div>
                                            <p>Thanks for purchasing</p>
                                            <p>Total : ${totalPrice.toFixed(2)}</p>
                                            <form method="dialog">
                                           <div>
                                           <button onClick={()=>handleClosePurchase()} className="px-3 py-1 my-1 rounded-lg bg-gray-100 shadow">Close</button>
                                           </div>
                                        </form>
                                        </div>
                                    </div>
                                    </dialog>
                    </div>
                    <div className='flex flex-col p-2 gap-4 '>
                {
                    cartProduct.map(cartProduct => <CartProduct key={cartProduct.id} cartProduct={cartProduct} handleRemoveCart={handleRemoveCart}/>)
                }
                </div>
            </div>
                    :
                    
            <div className='max-w-7xl mx-auto'>
                <div className={`flex items-center justify-between my-4`}>
                        <div>
                            <h3 className='text-xl font-medium'>Wishlist</h3>
                        </div>

                    </div>
                <div className='flex flex-col p-2 gap-4'>
                {
                    wishlistProduct.map(wishlistProduct => <WishListProduct
                         addToCart={addToCart}
                         key={wishlistProduct.id} 
                         wishlistProduct={wishlistProduct} 
                         handleRemoveList={handleRemoveList}/>)
                }
                </div>
            </div> }
            
           
    </div>
        );
};

export default Dashboard;