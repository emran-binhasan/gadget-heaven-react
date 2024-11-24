import { CiCircleRemove } from "react-icons/ci";

const CartProduct = ({cartProduct,handleRemoveCart}) => {
    const{img,title,desc,price,id} = cartProduct
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
                
            </div>
            <div>
                <button onClick={()=>handleRemoveCart(id)}><CiCircleRemove className="w-7 h-7 text-red-600"/></button>
            </div>
        </div>
        </div>
    );
};

export default CartProduct;