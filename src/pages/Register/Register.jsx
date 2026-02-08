import React, { useState, useEffect } from "react";
import saKuboLogo from "/saKubo.svg";
import { registerUser } from "@/pages/register/RegisterController";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button"; 
import Tabs from "@/components/Tabs";
import Logo from "@/components/Logo";


export default function SaKuboRegister() {
  const [activeTab, setActiveTab] = useState("personal");

  const tabList = [
    { key: "personal", label: "Personal" },
    { key: "business", label: "Business" },
  ];

  const [form, setForm] = useState({
    account_type: "personal",

    // personal
    lastname: "",
    nickname: "",
    email: "",
    password: "",
    number: 0,
    barangay: "",
    city: "",
    province: "",

    // business
    business_name: "",
    business_category: "",
    business_type: "",
    business_address: "",
    business_barangay: "",
    business_city: "",
    business_province: "",
    business_number: 0,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      account_type: activeTab,
    }));
  }, [activeTab]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    
    const accountType = form.account_type;

    // Dynamically pick relevant fields
    const payload = Object.fromEntries(
      Object.entries(form).filter(([key, value]) => {
        if (key === "account_type") return true; // always include account_type
        return accountType === "personal"
          ? !key.startsWith("business_")
          : key.startsWith("business_");
      })
    );

    
    try {
      const res = await registerUser(payload);
      localStorage.setItem("auth_token", res.token);
    } catch (err) {
      if (err.response?.data?.error?.fields) {
        setErrors(err.response.data.error.fields);
      }
    }
  };

  return (
    <div className="row">
      <div className="col-12 max-w-xl mx-auto">
        <Logo/>

        {/* TITLE */}
        <div className="row mb-4 text-center">
          <div className="col-12">
            <span className="text-2xl text-gray-600 font-bold">
              Create Account
            </span>
          </div>
          <div className="col-12">
            <span className="text-md text-gray-500">
              Join our community today
            </span>
          </div>
        </div>

        {/* TABS */}
          <Tabs tabs={tabList} activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* FORM */}
        <form className="w-full mt-6 flex flex-col gap-4 pb-10">

          {activeTab === "personal" ? (
            <>
              <div className="flex gap-2">
                <div className="flex-1">
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="firstname"
                    label="First Name"
                    variant="primary"
                    type="text"
                    placeHolder="First Name"
                  />
                </div>
                <div className="flex-1">
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="middlename"
                    label="Middle Name"
                    variant="primary"
                    type="text"
                    placeHolder="Middle Name"
                  />
                </div>
                <div className="flex-1">
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="lastname"
                    label="Last Name"
                    variant="primary"
                    type="text"
                    placeHolder="Last Name"
                  />
                </div>
              </div>

               <div>
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="nickname"
                    label="Nickname (Optional)"
                    variant="primary"
                    type="text"
                    placeHolder="Nickname"
                  />
                </div>

              <div>
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="number"
                    label="Number"
                    variant="primary"
                    type="number"
                    placeHolder="Number"
                  />
              </div>

              <div>
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="email"
                    label="Email (Optional)"
                    variant="primary"
                    type="email"
                    placeHolder="Email"
                  />
              </div>

              <div>
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="password"
                    label="Password"
                    variant="primary"
                    type="password"
                    placeHolder="Password"
                  />
              </div>

              <div className="flex gap-2">
                <div className="flex-1">
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="barangay"
                    label="Barangay"
                    variant="primary"
                    type="text"
                    placeHolder="Barangay"
                  />
                </div>
                <div className="flex-1">
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="city"
                    label="City"
                    variant="primary"
                    type="text"
                    placeHolder="City"
                  />
                </div>
                <div className="flex-1">
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="province"
                    label="Province"
                    variant="primary"
                    type="text"
                    placeHolder="Province"
                  />
                </div>
              </div>
              <Button variant="primary" type="submit" onClick={handleSubmit}>Create Personal Account</Button>
            </>
          ) : (
            <>
              <div>
                <TextInput
                  form={form}
                  errors={errors}
                  handleChange={handleChange}
                  name="business_name"
                  label="Business Name"
                  variant="primary"
                  type="text"
                  placeHolder="Business Name"
                />
              </div>

              <div>
                <TextInput
                  form={form}
                  errors={errors}
                  handleChange={handleChange}
                  name="business_category"
                  label="Business Category"
                  variant="primary"
                  type="text"
                  placeHolder="Business Category"
                />
              </div>

              <div>
                <TextInput
                  form={form}
                  errors={errors}
                  handleChange={handleChange}
                  name="business_type"
                  label="Business Type"
                  type="select"
                  variant="primary"
                  placeHolder="Business Type"
                  options={[
                    { value: "Local", label: "Local" },
                    { value: "International", label: "International" },
                  ]}
                />
              </div>

              <div>
                <TextInput
                  form={form}
                  errors={errors}
                  handleChange={handleChange}
                  name="business_address"
                  label="Street Address"
                  variant="primary"
                  type="text"
                  placeHolder="Street Address"
                />
              </div>

              <div className="flex gap-2">
                <div className="flex-1">
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="business_barangay"
                    label="Barangay"
                    variant="primary"
                    type="text"
                    placeHolder="Barangay"
                  />
                </div>
                <div className="flex-1">
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="business_city"
                    label="City"
                    variant="primary"
                    type="text"
                    placeHolder="City"
                  />
                </div>
                <div className="flex-1">
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="business_province"
                    label="Province"
                    variant="primary"
                    type="text"
                    placeHolder="Province"
                  />
                </div>
              </div>

              <div>
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="business_number"
                    label="Contact Number"
                    variant="primary"
                    type="number"                  
                    placeHolder="Contact Number"
                  />
              </div>

              <Button variant="primary" type="submit" onClick={handleSubmit}>Create Business Account</Button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
