import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React from "react";
import { CgFileAdd } from "react-icons/cg";

const Task = () => {
  return (
    <div className="relative">
      {/* Banner Image */}
      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] relative">
        <Image src="/images/banner.png" alt="banner image" fill className="" />

        {/* Welcome Text */}
        <div className="absolute z-20 left-4 sm:left-8 md:left-16 xl:left-24 top-1/2 -translate-y-1/2 mt-3">
          <h4 className="text-lg sm:text-2xl text-[#60E5AE] font-semibold">
            Hi Thomas
          </h4>
          <h2 className="text-white text-xl sm:text-3xl lg:text-5xl font-extrabold mt-1">
            Welcome to Dashboard
          </h2>
        </div>
      </div>

      {/* Task Section */}
      <section className="relative z-30 h-full px-4 sm:px-6 md:px-10 xl:px-24 -mt-10 md:-mt-16 xl:-mt-20 pb-10">
        <div className="w-full bg-white rounded-[16px] p-4 sm:p-6 md:p-10 shadow-md">
          {/* Query Controls */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
              All Task List
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Select>
                <SelectTrigger className="w-[219px] text-lg">
                  <SelectValue placeholder="Select Task Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="text-xl" value="light">
                    Light
                  </SelectItem>
                  <SelectItem className="text-xl" value="dark">
                    Dark
                  </SelectItem>
                  <SelectItem className="text-xl" value="system">
                    System
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[219px] text-lg">
                  <SelectValue placeholder="All Task" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="text-xl" value="latest">
                    Latest
                  </SelectItem>
                  <SelectItem className="text-xl" value="oldest">
                    Oldest
                  </SelectItem>
                </SelectContent>
              </Select>

              <button
                className="flex items-center justify-center gap-3 w-full sm:w-auto px-6 cursor-pointer  bg-[#60E5AE] hover:bg-[#498069] 
             transition-all duration-300 
             text-black text-lg md:text-xl font-semibold 
             rounded-xl md:h-[48px] shadow-md"
              >
                <CgFileAdd className="text-2xl md:text-lg" />
                Add New Task
              </button>
            </div>
          </div>

          {/* Placeholder Task Image */}
          <div className="flex flex-col items-center justify-center text-center mt-10 mb-16">
            <Image
              src="/images/dashboard.png"
              alt="Task illustration"
              width={585}
              height={400}
              className="w-[250px] sm:w-[350px] md:w-[450px] xl:w-[585px] h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Task;
