
import Product from '../Product';
import { useOutletContext } from 'react-router-dom';
const Phones = () => {
    const data = useOutletContext();
    const products = data.filter(dat => dat.cat == 'Phones')
    return (
        <>
        <div className="border sm:grid grid-cols-2 md:grid-cols-3 col-span-9 gap-2">
            {
            products.map((product) => <Product product={product} key={product.id}/>)
            }
        </div>
        </>
    );
};

export default Phones;