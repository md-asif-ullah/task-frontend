import SpinWheel from "@/components/SpinWheel";
import Image from "next/image";
import React from "react";

const Spin = () => {
  return (
    <div className="relative">
      {/* Banner Image */}
      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] relative">
        <Image src="/images/banner.png" alt="banner image" fill className="" />
      </div>

      {/* Task Section */}
      <section className="relative z-30 h-full px-4 sm:px-6 md:px-10 xl:px-24 -mt-10 md:-mt-16 xl:-mt-20 pb-10">
        <div className="w-full bg-white rounded-[16px] p-4 sm:p-6 md:p-10 shadow-md">
          <div>
            <SpinWheel />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spin;
