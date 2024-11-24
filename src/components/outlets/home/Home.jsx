
import bannerImg from '../../../assets/banner.jpg'
import Banner from "../../banner/Banner";
import { Outlet, useLoaderData, useLocation} from "react-router-dom";
import Category from './category/Category';
import { Helmet } from 'react-helmet';


const Home = () => {
    const data = useLoaderData() || {};
    const location = useLocation();
    return (
    <div className="w-11/12 mx-auto">
        <Helmet>
            <title>Products | Gadget Heaven</title>
        </Helmet>
        <Banner 
         title={location.pathname.includes('product')?'Product Details':'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'}
         subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to  the coolest accessories, we have it all!'}/>
         {
            location.pathname.includes('product')?'':
            <div className="md:h-96 h-32 relative">
                <div className=" md:w-[1020px] mx-auto absolute left-0 right-0 top-[-140px]">
                   <div className=" p-4 bg-transparent border-2 border-white rounded-2xl">
                <     img className="md:w-[970px] object-cover md:h-[480px] rounded-xl " src={bannerImg} alt="" />
                   </div>
                </div>   
            </div>
         }
         {
            location.pathname.includes('product')?<Outlet context={data}/>:
            <div>
                <h2 className="text-center text-3xl font-medium mb-8">Explore Our Exclusive Gadgets</h2>
                <div className="md:grid grid-cols-12">
                     <div className="col-span-3 w-3/4">
                         <ul className="menu col-span-3 border p-4 gap-4">
                        <Category/>
                        </ul>
                    </div>
                <Outlet context={data}/>
            </div>
        </div>
         }
        
    </div>
    );
};

export default Home;