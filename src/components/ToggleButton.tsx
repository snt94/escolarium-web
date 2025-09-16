import React from "react";

interface ToggleButtonProps {
  label: string;                 
  value: string;                 
  selected: boolean;
  onToggle: (value: string) => void;
  className?: string;            
}

export function ToggleButton({ label, value, selected, onToggle, className }: ToggleButtonProps) {
  return (
    <button
      onClick={() => onToggle(value)}
      className={`flex-1 py-2 rounded-lg font-medium transition
        ${selected ? "bg-blue-600 text-white shadow-lg" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}
        ${className ?? ""}
      `}
    >
      {label}
    </button>
  );
}
