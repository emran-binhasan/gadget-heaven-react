import { CiCircleRemove } from "react-icons/ci";

const WishListProduct = ({wishlistProduct,handleRemoveList,addToCart}) => {
    const {img,title,desc,price,id} = wishlistProduct;
   
    return (
        <div className="flex items-center justify-between rounded-xl shadow-lg border p-3 gap-3">
        <div>
            <img className="w-40 h-28 object-cover" src={img} alt={title} />
        </div>
        <div className="flex items-center justify-between flex-1 px-2">
            <div className="space-y-1">
                <h2 className="text-xl font-medium">{title}</h2>
                <p>{desc}</p>
                <p className="font-medium">Price: ${price}</p>
                <button onClick={()=>addToCart(wishlistProduct)} className="px-2 py-1 bg-[#9538E2] text-sm text-white hover:bg-pink-500 rounded-xl">Add to Cart</button>

                
            </div>
            <div>
                <button onClick={()=>handleRemoveList(id)}><CiCircleRemove className="w-7 h-7 text-red-600"/></button>
            </div> 
        </div>
        </div>
    );
};

export default WishListProduct;