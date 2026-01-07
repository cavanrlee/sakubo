import React, { useState } from "react";

export default function SaKuboRegister() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="col-12">

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

        <div className="row mb-2">
          <div className="col-12">
            <span className="text-2xl text-gray-600 font-bold">
              Create Account
            </span>
          </div>

          <div className="col-12">
            <span className="text-md text-gray-600!">
              Join our community today
            </span>
          </div>
        </div>

      {/* TAB BUTTONS */}

      <div className="flex w-full bg-gray-100 rounded p-1 mt-4">
          <button
            type="button"
            className={`w-1/2 h-13 btn py-2 font-semibold transition-all duration-200 ${
              activeTab === "personal"
                ? "btn-primary text-white"
                : "text-gray-700"
            }`}
            onClick={() => setActiveTab("personal")}
          >
            Personal	 
          </button>

          <button
            type="button"
            className={`w-1/2 h-13 btn py-2 font-semibold transition-all duration-200 ${
              activeTab === "business"
                ? "btn-primary text-white"
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

  {/* First and Last Name */}
  <div className="flex gap-2">
    <div className="flex-1">
      <label className="form-label font-bold text-left text-sm">
        <span className="text-muted">First Name</span>
      </label>
      <input
        type="text"
        placeholder="First Name"
        className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
      />
    </div>

    <div className="flex-1">
      <label className="form-label font-bold text-left text-sm">
        <span className="text-muted">Last Name</span>
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
    <label className="form-label font-bold text-left text-sm">
      <span className="text-muted">Nickname</span>
    </label>
    <input
      type="text"
      placeholder="Nickname"
      className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
    />
  </div>

  {/* Mobile Number */}
  <div>
    <label className="form-label font-bold text-left text-sm">
      <span className="text-muted">Mobile Number</span>
    </label>
    <input
      type="text"
      placeholder="Mobile Number"
      className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
    />
  </div>

  {/* Email Address */}
  <div>
    <label className="form-label font-bold text-left text-sm">
      <span className="text-muted">Email Address (Optional)</span>
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

              <button className='btn btn-primary h-13' type="button">
                <span className='text-white font-bold'>
                  Create Personal Account
                </span>
              </button>
 
            {/* TERMS */}
            <p className="text-xs text-center text-gray-500 px-4">
              By creating an account, you agree to our{" "}
              <span className="text-green-600 font-medium">Terms of Service</span> and{" "}
              <span className="text-green-600 font-medium">Privacy Policy</span>.
              You also consent to receive SMS notifications about local business updates
              and promotional offers.
            </p>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Business Name"
              className="border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="text"
              placeholder="Business Category"
              className="border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
            />

            <select className="border border-gray-300 rounded-xl p-3 text-sm text-gray-700 focus:ring-2 focus:ring-green-500 outline-none">
              <option>Select Type</option>
              <option>Retail</option>
              <option>Service</option>
            </select>

            <input
              type="text"
              placeholder="Street Address"
              className="border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
            />

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

            <input
              type="text"
              placeholder="Contact Number"
              className="border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
            />
    
            <div className="flex gap-2">
              <select className="border  w-1/2 border-gray-300 rounded-xl p-3 text-sm text-gray-700 focus:ring-2 focus:ring-green-500 outline-none">
                <option>Select Days</option>
                <option>15</option>
                <option>30</option>
              </select>
              <input
                  type="text"
                  placeholder="8:00 AM - 9:00 AM"
                  className="border  w-1/2 border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                />
            </div>


            <div className="flex gap-2">
              <input
                  type="text"
                  placeholder="8:00 AM - 9:00 AM"
                  className="border  w-1/2 border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                />
              <input
                  type="text"
                  placeholder="8:00 AM - 9:00 AM"
                  className="border  w-1/2 border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                />
            </div>



			          <button className='btn btn-primary h-13' type="button">
									<span className='text-white font-bold'>
										Create Business Account
									</span>
								</button>

            {/* TERMS */}
            <p className="text-xs text-center text-gray-500 px-4">
              By creating an account, you agree to our{" "}
              <span className="text-green-600 font-medium">Terms of Service</span> and{" "}
              <span className="text-green-600 font-medium">Privacy Policy</span>.
            </p>
          </>
        )}
      </form>
    </div>
  );
}
