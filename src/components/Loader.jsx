import React from "react";
import "./TerminalLoader.css";

export default function TerminalLoader() {
  return (
    <div className="border border-gray-800 bg-[#1a1a1a] text-green-500 font-mono text-sm p-6 w-48 shadow-lg rounded relative overflow-hidden box-border">
      <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 rounded-t px-2 flex items-center justify-between">
        <div className="text-gray-200 text-xs">Status</div>
        <div className="flex space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-600"></span>
        </div>
      </div>

      <div className="inline-block whitespace-nowrap overflow-hidden border-r-2 border-green-500 mt-6 animate-typeAndDelete">
        Loading...
      </div>
    </div>
  );
}
