import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App1.css'

function App1() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="col-12">
                <div className="card border-0 p-8">
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
                            <span className="text-2xl !text-gray-600 font-medium">
                                Welcome back!
                            </span>
                        </div>

                        <div className="col-12 my-2">
                            <span className="text-md !text-gray-600">
                                Sign in to your account.
                            </span>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12 text-left my-2">
                            <label className="form-label text-sm">
                                <span className="text-muted">
                                    Mobile Number
                                </span>
                            </label>

                            <input className="form-control h-13" id='input' type="text" placeholder="+639XX-XXX-XXXX" />
                        </div>

                        <div className="col-12 text-left my-2">
                            <label className="form-label text-sm">
                                <span className="text-muted">
                                    Password
                                </span>
                            </label>
                            <input className="form-control h-13" type="password" placeholder="Enter your password" />
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-6 text-left">
                            <input className='form-check-input me-2' type="checkbox" />

                            <label className="form-label text-sm">
                                <span className="text-muted">
                                    Remember me
                                </span>
                            </label>
                        </div>

                        <div className="col-6 text-right">
                            <a href="#">
                                <label className="form-label text-sm">
                                    <span className="text-red-500">
                                        Forgot password?
                                    </span>
                                </label>
                            </a>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-12 text-center my-2">
                            <div className="row mx-1">
                                <button className='btn btn-primary h-13'>
                                    <span className='text-white font-bold'>
                                        Log In
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App1
