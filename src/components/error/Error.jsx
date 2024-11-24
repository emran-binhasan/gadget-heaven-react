import { useNavigate } from 'react-router-dom';
import notFound from '../../assets/not-found.jpg'
import { Helmet } from 'react-helmet';

const Error = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <Helmet>
                <title>Error 404</title>
            </Helmet>
        <div className="flex justify-center items-center h-[400px] w-full">
            <h1 className="text-4xl">The page you are looking for can’t be found.</h1>
            <img className='w-96' src={notFound} alt="404"/>
        </div>
        <div className="flex justify-center items-center h-[100px] w-full">
        <button className='text-xl hover:underline px-6 py-3 shadow rounded-lg border' onClick={goBack}>Go Back</button>
        </div>
        </div>
    );
};

export default Error;