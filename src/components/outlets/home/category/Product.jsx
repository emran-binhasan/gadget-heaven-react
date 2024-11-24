import { useNavigate } from "react-router-dom";
const Product = ({product}) => {
    const navigate = useNavigate()
    const{title,img,cat,price,specs,desc,rating,available,id} = product || {}
    return (
        <div className="border p-3 rounded-xl">
            <div>
                <img className="w-full h-56 object-cover rounded-lg" src={img} alt="title"/>
            </div>
            <div className="space-y-1 py-3">
                <h3>{title}</h3>
                <p>$ {price}</p>
                <button onClick={()=>navigate(`/product/${id}`)} className="border border-[#9538E2] border-b-orange-500 to-  px-3 rounded-xl text-[#9538E2] py-1.5 text-sm font-medium">View Details</button>
            </div>
        </div>
    );
};

export default Product;