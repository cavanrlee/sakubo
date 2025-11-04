import React, { useState } from "react";

export default function SaKuboRegister() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="bg-white text-gray-800 flex flex-col items-center min-h-screen p-6">
      {/* HEADER */}
      <header className="text-center mt-4">
        <h1 className="text-2xl font-bold text-green-700">saKubo</h1>
        <p className="text-sm text-gray-600 mt-1">Join our community today</p>
      </header>

      {/* TAB BUTTONS */}
      <div className="flex mt-4 w-full max-w-sm bg-gray-100 rounded-xl p-1">
        <button
          className={`w-1/2 py-2 rounded-lg font-medium transition ${
            activeTab === "personal"
              ? "bg-green-600 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("personal")}
        >
          Personal
        </button>
        <button
          className={`w-1/2 py-2 rounded-lg font-medium transition ${
            activeTab === "business"
              ? "bg-green-600 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("business")}
        >
          Business
        </button>
      </div>

      {/* FORM SECTION */}
      <form className="w-full max-w-sm mt-6 flex flex-col gap-4">
        {activeTab === "personal" ? (
          <>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <input
              type="text"
              placeholder="Nickname"
              className="border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="text"
              placeholder="Mobile Number"
              className="border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address (Optional)"
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

            <button className="bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition">
              Create Personal Account
            </button>
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

            <button className="bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition">
              Create Business Account
            </button>
          </>
        )}
      </form>
    </div>
  );
}
