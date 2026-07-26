import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { loginUser } from "@/pages/login/LoginController";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { getDeviceInfoObject } from "@/helpers/deviceHelper";
import { useAuth } from "@/hooks/useAuth";

export default function SaKuboLogin() {

     const { setUser }             = useAuth(null);
     const [errors, setErrors]     = useState({});
     const navigate                = useNavigate();

     const [form, setForm] = useState({
         email:         "",
         password:      "",
         device_id:     "",
         device_name:   "",
         device_token:  null,
     });

     useEffect(() => {
          const loadDevice = async () => {
               const deviceData = await getDeviceInfoObject();
               setForm((prev) => ({
                    ...prev,
                    ...deviceData,
               }));
          };
          loadDevice();
     }, []);

     const handleChange = (e) => {
          const { name, value, type, checked } = e.target;
          setForm((prev) => ({ 
              ...prev, 
              [name]: type === 'checkbox' ? checked : value 
          }));
     };

     
     const handleLogin = async (e) => {
          e.preventDefault();
          setErrors({});
          try {
               const response = await loginUser(form);
               setUser(response.data);
               navigate("/dashboard");
          } catch (err) {
			if (err.response?.data?.error?.fields) {
				setErrors(err.response.data.error.fields);
			}
          }
     };

     return (
          <div className="container-fluid">
               <div className="row">
                    <div className="col-12 py-4 max-w-xl mx-auto">
                         <Logo />

                         <div className="card border-0 p-0">
                              <div className="row mb-2">
                                   <div className="col-12 my-2">
                                        <span className="text-2xl text-gray-600! font-bold">
                                             Welcome back!
                                        </span>
                                   </div>
                                   <div className="col-12 my-2">
                                        <span className="text-md text-gray-600!">
                                             Sign in to your account.
                                        </span>
                                   </div>
                              </div>

                              <form onSubmit={handleLogin} id="login-form">
                                   <div className="row mt-4">
                                        <div className="col-12 my-2">
                                             <TextInput
                                                  form={form}
                                                  errors={errors}
                                                  handleChange={handleChange}
                                                  name="email"
                                                  label="Mobile Number/Email"
                                                  variant="primary"
                                                  type="text"
                                                  placeHolder="+639XX-XXX-XXXX"
                                             />
                                        </div>
                                        <div className="col-12 my-2">
                                             <TextInput
                                                  form={form}
                                                  errors={errors}
                                                  handleChange={handleChange}
                                                  name="password"
                                                  label="Password"
                                                  variant="primary"
                                                  type="password"
                                                  placeHolder="Enter your password"
                                             />
                                        </div>
                                   </div>

                                   <div className="row mt-2">
                                        <div className="col-6">
                                             <TextInput
                                                  form={form}
                                                  errors={errors}
                                                  handleChange={handleChange}
                                                  name="remember"
                                                  label="Remember me"
                                                  variant="primary"
                                                  type="checkbox"
                                             />
                                        </div>
                                        <div className="col-6">
                                             <a className="float-right text-gray-600! px-2 font-semibold hover:cursor-pointer hover:text-gray-900! no-underline!" onClick={() => navigate("/OTP-Sending")}>
                                                  Forgot password?
                                             </a>
                                        </div>
                                   </div>

                                   <div className="row mt-2">
                                        <div className="col-12 my-2">
                                             <Button variant="primary" type="submit" onSubmit={handleLogin}>Log In</Button>
                                        </div>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
}