import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="col-12">
                <div className="card border-0 px-8 pt-8 pb-1">
                    <div className="row">
                        <div className="col-12">
                            <span className="text-4xl text-[#4CAF50] font-bold">
                                saKubo
                            </span>
                        </div>
                    </div>
                </div>

                <div className="card border-0 p-0">
                    <div className="row mb-2">
                        <div className="col-12 my-2">
                            <span className="text-md !text-gray-600">
                                Discover local businesses in your community.
                            </span>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-12 text-center my-2">
                            <div class="alert !bg-[#E8F5E8] border-2 !border-[#4CAF50] !rounded-2xl" role="alert">
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
                                <button className='btn btn-primary text-white !font-bold h-13' type="button">
                                    Log In
                                </button>
                            </div>

                            <div className="row mx-1 my-2">
                                <button className='btn btn-outline-primary !bg-[white] !border-[#4CAF50] !text-[#4CAF50] !font-bold h-13' type="button">
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
                                <a className='!no-underline' href="#">
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
                                <button className='btn btn-sm btn-outline-primary !bg-[#E8F5E8] !border-[#4CAF50] !text-[#4CAF50] !font-medium text-sm h-13' type="button">
                                    saKubo News
                                </button>
                            </div>
                        </div>

                        <div className="col-6 text-center my-2">
                            <div className="row mx-1 my-2">
                                <button className='btn btn-sm btn-outline-primary !bg-[#E8F5E8] !border-[#4CAF50] !text-[#4CAF50] whitespace-nowrap !font-medium text-sm h-13' type="button">
                                    See Map Coverage
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
