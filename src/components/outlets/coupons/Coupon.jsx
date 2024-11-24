import toast from "react-hot-toast";
const Coupon = ({coupon}) => {
    const{coupon_code,minimum_spent,discount} = coupon;
    return (
    <div className='border rounded-lg shadow p-4 border-l-purple-300 border-b-pink-300 border-t-red-500 border-r-orange-300'>
        <p className="font-medium text-3xl">CODE: {coupon_code}</p>
        <p className="text-xl text-slate-800">Discount: {discount}%</p>
        <p className="text-xl text-slate-800">Minimum spent: ${minimum_spent}</p>
        <button onClick={()=> toast.error('Claimable after 17 November !')} className="bg-gradient-to-r from-orange-300 via-pink-300 to-pink-400 border text-white px-3 py-1 rounded-xl">Claim</button>
    </div>
    );
};

export default Coupon;