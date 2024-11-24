import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { BsCart3 } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { addToCart } from "../../../utilities/addingCart";
import { addToWishlist } from "../../../utilities/addingWishlist";

const ProductDetails = () => {

    const {id} = useParams();
    const productId = parseInt(id)
    const data = useLoaderData();
    const product = data.find(dat => dat.id == productId)

    const{title,img,price,specs,desc,rating,available} = product || {}
    return (   
    <div className="py-56 border relative">
            <div className=" md:w-[1020px] bg-white border shadow-lg mx-auto p-3 rounded-xl absolute left-0 right-0 bottom-20">
           <div className="grid grid-cols-5 gap-4">
            <div className="col-span-2">
                <img className="object-cover rounded-xl h-[440px]" src={img} alt="title" />
            </div>
            <div className="col-span-3 flex flex-col justify-between gap-2">
                <h2 className="font-medium text-2xl">{title}</h2>
                <p>Price :${price}</p>
                <div>
                {available?<span className="border border-green-400 bg-green-100 text-green-600 px-2 py-1 text-xs rounded-xl">In Stock</span>:
                <span className="border border-red-400 bg-red-100 text-red-600 px-2 py-1 text-xs rounded-xl">Out of Stock</span>}
                </div>
                <p>{desc}</p>
                <h3>Specifications</h3>
                <ol className="list-decimal list-inside">
                    {specs.map((li,index) => <li key={index}>{li}</li>)}
                </ol>
                <div>
                <h4 className="font-semibold">Rating :</h4>
               <div className="flex gap-2 items-center">
                <ReactStars className='inline' count={5} value={rating}isHalf={true} size={24} activeColor="#ffd700"/>
                <div>
                    <span className="text-sm bg-gray-200 px-2 py-1 rounded-xl">{rating}
                    </span>
                </div>
               </div>
                </div>
                <div className="flex gap-2 items-center">
                    <button onClick={()=>addToCart(product)} className="bg-[#9538E2] text-xs hover:bg-pink-400 pl-3 pr-2 py-0.5 rounded-xl text-white flex items-center justify-between gap-2">
                        Add to Cart <BsCart3 className=' w-6  h-6  p-1 ' />
                    </button>

                    <button id={product.id}>
                        <IoIosHeartEmpty onClick={()=>addToWishlist(product)} className='border border-gray-400  w-7  h-7  p-1  rounded-full' />
                    </button>
                </div>
                </div>
            </div>
            </div>   
    </div>
    );
};

export default ProductDetails;
