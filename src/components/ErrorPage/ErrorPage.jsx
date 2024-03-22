import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="max-w-7xl mx-auto text-center m-72">
            <h1 className="text-7xl font-bold text-red-600">404</h1>
            <p className="text-3xl font-semibold">Data Not Found</p>
            <Link to="/"><button className="btn btn-active btn-link text-lg">Go back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;