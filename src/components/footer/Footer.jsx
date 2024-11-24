import './Footer.css'

const Footer = () => {
    return (
        <footer className="flex flex-col justify-between items-center bg  p-10">
            <div>
                <h2 className="bold text-center text-3xl">Gadget Heaven</h2>
                <p className="text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
            </div>

            <div className="border-t w-full border-gray-200 pt-2 my-5"></div>


            <div className="flex w-full justify-around items-center">
                <nav className="flex flex-col gap-2">
                <h4 className=" text-center">Services</h4>
                    <a href="">Product Support</a>
                    <a href="">Order Tracking</a>
                    <a href="">Shipping & Delivery</a>
                    <a href="">Returns</a>
                </nav>

                <nav className="flex flex-col gap-2">
                <h4 className=" text-center">Company</h4>
                    <a href="">About Us</a>
                    <a href="">Careers</a>
                    <a href="">Contact</a>
                </nav>

                <nav className="flex flex-col gap-2">
                    <h4 className=" text-center">Legal</h4>
                    <a href="">Terms of Service</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Cookie Policy</a>
                </nav>

            </div>
        </footer>
    );
};

export default Footer;