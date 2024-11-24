
import { useLocation } from "react-router-dom";

const Banner = ({title,subtitle,showCart,showWishlist,cart,wishList}) => {

    const location = useLocation();
    

    return (
        <div className={`border w-full  ${location.pathname == '/' || location.pathname == '/phones' || location.pathname == '/laptops' || location.pathname == '/audio' || location.pathname == '/tablets' || location.pathname == '/wearables' ?'rounded-b-2xl pb-44':location.pathname.includes('product')?'pb-24':''} mx-auto banner  flex flex-col gap-6  text-center  p-12 bg-[#9538E2] text-white`}>
            <h1 className={` ${location.pathname == '/' || location.pathname == '/phones' || location.pathname == '/laptops' || location.pathname == '/audio' || location.pathname == '/tablets' || location.pathname == '/wearables' ?'text-5xl':'text-3xl'}  font-semibold w-4/5 mx-auto`}>
                {title}
            </h1>
            <p className="text-gray-100 w-2/3 mx-auto">
                {subtitle}
            </p>
            <div>
            {location.pathname == '/' || location.pathname == '/phones' || location.pathname == '/laptops' || location.pathname == '/audio' || location.pathname == '/tablets' || location.pathname == '/wearables' ?<button className="border px-5 py-2  rounded-2xl font-bold  bg-white  text-[#9538E2]">Shop Now</button>:''}
                {location.pathname == '/dashboard'?
                <div className="flex justify-center gap-5 items-center">
                    <div>
                        <button onClick={()=>showCart()} className={`${cart?'bg-white text-[#9538E2]':''} border  rounded-2xl text-xs px-4 py-2 font-semibold`}>Carts</button>
                    </div>
                    <div>
                        <button onClick={()=>showWishlist()} className={`${wishList?'bg-white text-[#9538E2]':''} border rounded-2xl text-xs px-4 py-2 font-semibold`}>Wishlist</button>
                    </div>
                </div>
                :''}
            </div>
         </div> 
    );
};

export default Banner;