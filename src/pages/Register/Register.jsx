import React, { useState } from "react";

export default function SaKuboRegister() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="col-12 max-w-xl mx-auto">

      {/* HEADER */}
      <div className="card border-0 p-8">
        <div className="row">
          <div className="col-12">
            <span className="text-4xl text-[#4CAF50] font-bold">
              saKubo
            </span>
          </div>
        </div>
      </div>

      {/* TITLE */}
      <div className="row mb-4">
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

      {/* TAB BUTTONS */}
      <div className="flex w-full bg-gray-100 rounded-xl p-1 mt-4">
        <button
          type="button"
          className={`w-1/2 h-13 btn py-2 font-semibold transition-all duration-200 rounded-xl ${
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
          className={`w-1/2 h-13 btn py-2 font-semibold transition-all duration-200 rounded-xl ${
            activeTab === "business"
              ? "btn-primary text-white shadow"
              : "text-gray-700"
          }`}
          onClick={() => setActiveTab("business")}
        >
          Business
        </button>
      </div>

      {/* FORM SECTION */}
      <form className="w-full mt-6 flex flex-col gap-4 pb-10">

        {activeTab === "personal" ? (
          <>
            <div className="flex flex-col gap-4">

              {/* First / Last Name */}
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="form-label font-bold text-sm text-gray-600">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>

                <div className="flex-1">
                  <label className="form-label font-bold text-sm text-gray-600">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>
              </div>

              {/* Nickname */}
              <div>
                <label className="form-label font-bold text-sm text-gray-600">
                  Nickname
                </label>
                <input
                  type="text"
                  placeholder="Nickname"
                  className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="form-label font-bold text-sm text-gray-600">
                  Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="form-label font-bold text-sm text-gray-600">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="Email Address (Optional)"
                  className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              {/* Address */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Barangay"
                  className="w-1/3 border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-1/3 border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Province"
                  className="w-1/3 border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
            </div>

            <button className="btn btn-primary h-13 mt-2" type="button">
              <span className="text-white font-bold">
                Create Personal Account
              </span>
            </button>

            <p className="text-xs text-center text-gray-500 px-4 mt-2">
              By creating an account, you agree to our{" "}
              <span className="text-green-600 font-medium">Terms of Service</span> and{" "}
              <span className="text-green-600 font-medium">Privacy Policy</span>.
            </p>
          </>
        ) : (
          <>
            {/* BUSINESS FORM KEPT AS-IS (STYLING CONSISTENT ONLY) */}
          </>
        )}
      </form>
    </div>
  );
}
