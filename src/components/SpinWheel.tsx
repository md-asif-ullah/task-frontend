"use client";
import React, { useState } from "react";
import { PiSpinnerFill } from "react-icons/pi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const options = [
  { label: "Friends", color: "bg-[#98df8a]" },
  { label: "Sport", color: "bg-[#1f77b4]" },
  { label: "Family", color: "bg-[#aec7e8]" },
  { label: "Nature", color: "bg-[#ff7f0e]" },
  { label: "Arts and Craft", color: "bg-[#ffbb78]" },
  { label: "Meditation", color: "bg-[#2ca02c]" },
];

const SpinWheel = () => {
  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [selected, setSelected] = useState<{
    label: string;
    color: string;
  } | null>(null);

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);

    const extraSpins = 360 * 5;
    const randomAngle = Math.floor(Math.random() * 360);
    const totalRotation = angle + extraSpins + randomAngle;
    setAngle(totalRotation);

    const segmentAngle = 360 / options.length;
    const pointerOffset = 180; // because pointer is at bottom
    const effectiveAngle = (totalRotation + pointerOffset) % 360;
    const pickedIndex = Math.floor(effectiveAngle / segmentAngle);

    setTimeout(() => {
      setSelected(options[pickedIndex]);
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-br from-white to-gray-100 px-4 py-8">
      {/* Header and Category Selector */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Spin Wheel
        </h2>
        <Select>
          <SelectTrigger className="w-[250px] text-lg">
            <SelectValue placeholder="Select Task Category" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem
                key={option.label}
                value={option.label}
                className="text-lg"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Wheel Container */}
      <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] aspect-square flex items-center justify-center">
        {/* Pointer */}
        <div className="absolute bottom-[-20px] sm:bottom-[-30px] z-30">
          <div className="w-0 h-0 border-l-[20px] sm:border-l-[30px] md:border-l-[60px] border-l-transparent border-r-[20px] sm:border-r-[30px] md:border-r-[60px] border-r-transparent border-b-[30px] sm:border-b-[50px] md:border-b-[70px] border-b-green-600 shadow-xl" />
        </div>

        {/* Wheel */}
        <div
          className="relative w-full aspect-square rounded-full border-[6px] sm:border-[10px] md:border-[16px] border-red-600 transition-transform duration-[4000ms] ease-out shadow-xl overflow-hidden"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          {options.map((item, index) => {
            const wedgeAngle = 360 / options.length;
            const rotation = index * wedgeAngle;

            return (
              <div
                key={index}
                className={`absolute w-1/2 h-full origin-right ${item.color}`}
                style={{
                  transform: `rotate(${rotation}deg)`,
                  clipPath: "polygon(100% 50%, 0% 35%, 0% 100%)",
                }}
              >
                <div className="absolute bottom-[40%] left-[5%] sm:left-[10%] w-20 sm:w-28 text-xs sm:text-sm md:text-base text-black text-center font-semibold">
                  {item.label}
                </div>
              </div>
            );
          })}

          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-white rounded-full border border-gray-300 transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-md" />
        </div>
      </div>

      {/* Result Message */}
      <p className="mt-8 text-lg font-medium text-gray-700 text-center">
        {selected
          ? `🎯 You got: ${selected.label}`
          : "Spin the wheel to pick a task"}
      </p>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={spinWheel}
          disabled={spinning}
          className={`w-[250px] h-[45px] text-lg rounded-lg font-semibold transition duration-300 shadow-md flex items-center justify-center ${
            spinning
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-[#60e5ae] hover:bg-[#5c9e84]"
          }`}
        >
          {spinning ? (
            "Spinning..."
          ) : (
            <span className="flex items-center space-x-2">
              <span>Spin</span>
              <PiSpinnerFill />
            </span>
          )}
        </button>

        <button
          onClick={() => selected && alert(`Go to task: ${selected.label}`)}
          disabled={!selected}
          className={`w-[250px] h-[45px] text-lg rounded-lg font-semibold transition duration-300 shadow-md ${
            selected
              ? "bg-[#60e5ae] hover:bg-[#5c9e84]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Go To Task
        </button>
      </div>
    </div>
  );
};

export default SpinWheel;
