/* eslint-disable react/prop-types */
import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {

    const { company_name, id, job_title, logo, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="pt-7">
                <img src={logo} alt="Shoes" />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="gap-2 flex">
                    <button className="btn btn-outline">{remote_or_onsite}</button>
                    <button className="btn btn-outline">{job_type}</button>
                </div>
                <div className="flex">
                    <p className="flex items-center gap-1"><IoLocationOutline /> {location}</p>
                    <p className="flex items-center gap-1"><CiDollar /> salary : {salary}</p>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                    <button className="btn btn-primary">view Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;