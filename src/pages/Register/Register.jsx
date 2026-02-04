import React, { useState, useEffect } from "react";
import saKuboLogo from "../../../public/saKubo.svg";
import { registerUser } from "./RegisterController";

export default function SaKuboRegister() {
  const [activeTab, setActiveTab] = useState("personal");

  const [form, setForm] = useState({
    account_type: "personal",

    lastname: "",
    nickname: "",
    email: "",
    password: "",
    number: "",
    barangay: "",
    city: "",
    province: "",

    business_name: "",
    business_category: "",
    business_type: "",
    business_address: "",
    business_barangay: "",
    business_city: "",
    business_province: "",
    business_number: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      account_type: activeTab,
    }));
  }, [activeTab]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setErrors({});
    try {
      const res = await registerUser(form);
      alert("Account created successfully!");
      localStorage.setItem("auth_token", res.token);
    } catch (err) {
      if (err.response?.data?.error?.fields) {
        setErrors(err.response.data.error.fields);
      }
    }
  };

  const labelClass =
    "form-label text-sm text-muted d-block text-start mb-1 font-bold";

  const inputClass =
    "w-full border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none";

  const errorText = (field) =>
    errors[field] && (
      <div className="text-danger text-sm mt-1 text-start">
        {errors[field][0]}
      </div>
    );

  return (
    <div className="col-12 max-w-xl mx-auto">

      {/* HEADER */}
      <div className="card border-0 p-0 mb-3">
        <div className="row">
          <div className="col-12 d-flex justify-center">
            <img src={saKuboLogo} alt="saKubo" className="max-w-75" />
          </div>
        </div>
      </div>

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
      <div className="flex w-full bg-gray-100 rounded-xl p-1 mt-4">
        <button
          type="button"
          className={`w-1/2 h-13 btn font-semibold rounded-xl ${
            activeTab === "personal"
              ? "btn-primary text-white shadow"
              : "text-gray-700"
          }`}
          onClick={() => setActiveTab("personal")}
        >
          Personal
        </button>

        <button
          type="button"
          className={`w-1/2 h-13 btn font-semibold rounded-xl ${
            activeTab === "business"
              ? "btn-primary text-white shadow"
              : "text-gray-700"
          }`}
          onClick={() => setActiveTab("business")}
        >
          Business
        </button>
      </div>

      {/* FORM */}
      <form className="w-full mt-6 flex flex-col gap-4 pb-10">

        {activeTab === "personal" ? (
          <>
            <div className="flex gap-2">
              <div className="flex-1">
                <label className={labelClass}>Last Name</label>
                <input
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errorText("lastname")}
              </div>

              <div className="flex-1">
                <label className={labelClass}>Nickname</label>
                <input
                  name="nickname"
                  value={form.nickname}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Mobile Number</label>
              <input
                name="number"
                value={form.number}
                onChange={handleChange}
                className={inputClass}
              />
              {errorText("number")}
            </div>

            <div>
              <label className={labelClass}>Email (Optional)</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
              {errorText("email")}
            </div>

            <div>
              <label className={labelClass}>Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className={inputClass}
              />
              {errorText("password")}
            </div>

            <div className="flex gap-2">
              <input
                name="barangay"
                placeholder="Barangay"
                value={form.barangay}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                name="province"
                placeholder="Province"
                value={form.province}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary h-13 mt-2"
              onClick={handleSubmit}
            >
              <span className="text-white font-bold">
                Create Personal Account
              </span>
            </button>
          </>
        ) : (
          <>
            <div>
              <label className={labelClass}>Business Name</label>
              <input
                name="business_name"
                value={form.business_name}
                onChange={handleChange}
                className={inputClass}
              />
              {errorText("business_name")}
            </div>

            <div>
              <label className={labelClass}>Business Category</label>
              <input
                name="business_category"
                value={form.business_category}
                onChange={handleChange}
                className={inputClass}
              />
              {errorText("business_category")}
            </div>

            <div>
              <label className={labelClass}>Business Type</label>
              <input
                name="business_type"
                value={form.business_type}
                onChange={handleChange}
                className={inputClass}
              />
              {errorText("business_type")}
            </div>

            <div>
              <label className={labelClass}>Street Address</label>
              <input
                name="business_address"
                value={form.business_address}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="flex gap-2">
              <input
                name="business_barangay"
                placeholder="Barangay"
                value={form.business_barangay}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                name="business_city"
                placeholder="City"
                value={form.business_city}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                name="business_province"
                placeholder="Province"
                value={form.business_province}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Contact Number</label>
              <input
                name="business_number"
                value={form.business_number}
                onChange={handleChange}
                className={inputClass}
              />
              {errorText("business_number")}
            </div>

            <button
              type="button"
              className="btn btn-primary h-13"
              onClick={handleSubmit}
            >
              <span className="text-white font-bold">
                Create Business Account
              </span>
            </button>
          </>
        )}
      </form>
    </div>
  );
}
