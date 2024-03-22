import { useLoaderData, useParams } from "react-router-dom";


const JobDetailes = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id == id);

    return (
        <div className="my-10">
            <h1 className="text-center text-xl font-bold my-10">Job Details Of: {job.job_title}</h1>
            <div className="flex gap-6">
                <div className="w-2/3 border-2 p-6">
                    <h1>details coming here</h1>
                </div>
                <div className="w-1/3 border-2 p-6">
                    <h3>side bar</h3>
                    <h3>Name: {job.company_name}</h3>
                    <button className="btn-primary btn"> Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetailes;