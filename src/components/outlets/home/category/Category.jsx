import { NavLink } from "react-router-dom";
const Category = () => {
    return (
        <>
            <li><NavLink to={'/'}>All Products</NavLink></li>
            <li><NavLink to={'/phones'}>Phones</NavLink></li>
            <li><NavLink to={'/laptops'}>Laptops</NavLink></li>
            <li><NavLink to={'/audio'}>Audio</NavLink></li>
            <li><NavLink to={'/tablets'}>Tablets</NavLink></li>
            <li><NavLink to={'/wearables'}>Wearables</NavLink></li>
        </>
    );
};

export default Category;