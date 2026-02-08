import React from "react";
import Button from "@/components/Button"; 


const MessageModal = ({ show, onClose, title, message, type = "success" }) => {
  if (!show) return null;

  const bgColor =
    type === "success" ? "bg-green-100" :
    type === "error" ? "bg-red-100" :
    "bg-gray-100";

  const textColor =
    type === "success" ? "text-green-800" :
    type === "error" ? "text-red-800" :
    "text-gray-800";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
      <div className={`w-96 p-6 rounded-lg shadow-lg ${bgColor}`}>
        <h3 className={`font-bold text-lg mb-2 ${textColor}`}>{title}</h3>
        <p className={`text-sm ${textColor}`}>{message}</p>
        <div className="mt-4 text-right">
          <Button variant="secondary" type="submit" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
