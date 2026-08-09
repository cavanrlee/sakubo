import { React } from 'react';
import { useNavigate } from "react-router-dom";
import Button from "@/components/buttons/Button";
import Logo from "@/components/Logo";


function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="container-fluid">
            <div className="row py-4">
                <div className="col-12 max-w-xl mx-auto">
                    <Logo />

                    <div className="card border-0 p-0">
                        <div className="row">
                            <div className="col-12 my-2">
                                <span className="text-md text-gray-600!">
                                    Discover local businesses in your community.
                                </span>
                            </div>
                        </div>

                        <div className="row">
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
                                <Button variant="primary" type="button" onClick={() => navigate("/Login")}>Log In</Button>
                            </div>
                            <div className="col-12 text-center my-2">
                                <Button variant="primary" type="button" onClick={() => navigate("/Register")} outline>Sign Up</Button>
                            </div>
                        </div>

                        <div className="row my-2">
                            <hr />

                            <div className="col-12 text-center my-2">
                                <a className='no-underline!'>
                                    <span className='text-[#4CAF50] text-lg font-medium'>
                                        Log In as Guest
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-md-6 my-2">
                                <Button variant="primary" type="button" outline>saKubo News</Button>
                            </div>

                            <div className="col-sm-12 col-md-6 my-2">
                                <Button variant="primary" type="button" outline>See Map Coverage</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage