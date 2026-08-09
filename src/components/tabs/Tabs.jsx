import React from "react";

const themeGreen = "#4CAF50"; // THEME GREEN
const themeGreenDark = "#27642b"; // DARKER GREEN FOR ACTIVE SHADOW

const Tabs = ({ tabs = [], activeTab, setActiveTab }) => {
  return (
    <div className="flex w-full bg-gray-100 rounded-xl p-1 mt-4">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            type="button"
            className={`
              w-1/2 h-13 font-semibold rounded-lg! transition-colors duration-200
              ${isActive ? "text-white shadow" : "text-gray-700"}
            `}
            style={{
              backgroundColor: isActive ? themeGreen : "transparent",
              boxShadow: isActive ? `0 2px 6px ${themeGreenDark}33` : "none",
            }}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
