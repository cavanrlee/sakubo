import { React } from 'react';
import saKuboLogo from '../../../public/saKubo.svg';
import { useNavigate } from "react-router-dom";
import './Home.css';


function HomePage() {
	const navigate = useNavigate();

	return (
            <div className="col-12">
                {/* HEADER */}
                <div className="card border-0 p-0">
                    <div className="row">
                        <div className="col-12 d-flex justify-center">
                            <img src={saKuboLogo} alt="saKubo" className='max-w-75'/>
                        </div>
                    </div>
                </div>

                <div className="card border-0 p-0">
                    <div className="row mb-2">
                        <div className="col-12 my-2">
                            <span className="text-md text-gray-600!">
                                Discover local businesses in your community.
                            </span>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-12 text-center my-2">
                            <div className="alert bg-[#E8F5E8]! border-2 border-[#4CAF50]! rounded-2xl" role="alert">
                                <div className="col-12 my-3">
                                    <span className='text-[#4CAF50] text-lg font-medium'>Current Location:</span>
                                </div>
                                <div className="col-12 my-3">
                                    <span className='text-gray-600 text-lg font-bold'>Ibayo, Marilao, Bulacan</span>
                                </div>
                                <div className="col-12 my-3">
                                    <span className='text-[#4CAF50] text-md font-bold'>34</span>&nbsp;<span className='text-[#4CAF50] text-md'>businesses found in your area.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center my-2">
                            <div className="row mx-1 my-2">
                                <button className='btn btn-primary text-white font-bold! h-13' type="button" onClick={() => navigate("/Login")}>
                                    Log In
                                </button>
                            </div>

                            <div className="row mx-1 my-2">
                                <button className='btn btn-outline-primary bg-[white] border-[#4CAF50]! text-[#4CAF50]! font-bold! h-13' type="button" onClick={() => navigate("/Register")}>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row my-2">
                        <div className="col-12 text-center my-2">
                            <div className="row mx-1 my-2">
                                <hr />
                            </div>

                            <div className="row mx-1 my-2">
                                <a className='no-underline!'>
                                    <span className='text-[#4CAF50] text-lg font-medium'>
                                        Log In as Guest
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row my-2">
                        <div className="col-6 text-center my-2">
                            <div className="row mx-1 my-2">
                                <button className='btn btn-sm btn-outline-primary  bg-[#E8F5E8]! border-[#4CAF50]! text-[#4CAF50]! whitespace-nowrap font-medium!text-sm h-13' type="button">
                                    saKubo News
                                </button>
                            </div>
                        </div>

                        <div className="col-6 text-center my-2">
                            <div className="row mx-1 my-2">
                                <button className='btn btn-sm btn-outline-primary bg-[#E8F5E8]! border-[#4CAF50]! text-[#4CAF50]! whitespace-nowrap font-medium! text-sm h-13' type="button">
                                    See Map Coverage
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	)
}

export default HomePage
