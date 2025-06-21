import GoBackButton from "@/components/GoBackButton";
import Image from "next/image";
import React from "react";

const Custom404 = () => {
  return (
    <div className="w-full h-full min-h-screen relative bg-[#a4abb624]">
      <Image
        src="/images/banner.png"
        alt="banner image"
        width={500}
        height={500}
        className="w-full h-20 md:h-30 xl:h-[174px] z-0"
      />
      <div className="absolute_sub_container">
        <div className="w-full h-full bg-white z-10 flex flex-col justify-center items-center rounded-[16px] px-5">
          <Image
            src="/images/404.png"
            alt="404 iamge"
            width={500}
            height={500}
            className="w-[300px] md:w-[400px] xl:w-[585px] h-auto"
          />
          <GoBackButton />
        </div>
      </div>
    </div>
  );
};

export default Custom404;
