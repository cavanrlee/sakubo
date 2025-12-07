import React from "react";

export default function SaKuboLogin({ user_data }) {
  return (
    <div className="bg-white text-gray-800 flex flex-col items-center justify-between min-h-screen p-4">
      <header className="text-center mt-8">
        <h1 className="text-2xl font-bold text-green-700">saKubo</h1>
        <p className="text-sm text-gray-600 mt-1">
          Discover local businesses in your community
        </p>
      </header>

      <section className="w-full max-w-sm border border-green-300 rounded-2xl p-4 mt-6 text-center">
        <div className="flex items-center justify-center text-red-600 mb-2">
          <span className="mr-1">📍</span>
          <span className="text-sm font-medium">Current Location Detected</span>
        </div>
        <p className="text-base font-semibold text-gray-800">
          Brgy. Commonwealth, Quezon City
        </p>
        <p className="text-xs text-gray-500 mt-1">
          47 businesses found in your area
        </p>
      </section>

      <div className="flex flex-col gap-3 w-full max-w-sm mt-6">
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-2xl font-medium">
          Log In
        </button>
        <button className="border border-green-600 text-green-600 hover:bg-green-50 py-2 rounded-2xl font-medium">
          Sign Up
        </button>
      </div>

      <div className="mt-4 text-sm text-green-600 cursor-pointer hover:underline">
        Log In as A Guest
      </div>

      <footer className="flex justify-center gap-4 w-full max-w-sm mt-6 mb-8">
        <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-2xl font-medium">
          📰 saKubo News
        </button>
        <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-2xl font-medium">
          📍 See Coverage Map
        </button>
      </footer>
    </div>
  );
}
