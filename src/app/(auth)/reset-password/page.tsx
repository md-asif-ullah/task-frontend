import ResetPasswordForm from "@/components/forms/ResetPasswordForm";
import Image from "next/image";
import React from "react";

const ResetPassword = () => {
  return (
    <div className="w-full h-full min-h-screen relative bg-[#a4abb624]">
      <Image
        src="/auth/resetPasswordbanner.png"
        alt="404 Not Found"
        width={500}
        height={200}
        priority
        className="w-full h-20 md:h-30 xl:h-[174px] z-0"
      />
      <div className="absolute_sub_container">
        <div className="w-full h-full bg-white z-10 flex flex-col justify-center items-center rounded-[16px] px-5">
          <Image
            src="/auth/clockImage.png"
            alt="404 Not Found"
            width={60}
            height={60}
            className="w-16 md:w-20 xl:w-[96px] h-auto mt-10 md:mt-14"
          />
          <div className="w-full max-w-xl mt-5">
            <div className="text-center mb-8">
              <h2 className="xl:text-4xl text-xl font-bold">
                Reset your Password
              </h2>
              <p className="text-[#667085] mt-2 text-sm lg:text-base">
                Strong passwords include numbers, letters, and punctuation
                marks.
              </p>
            </div>
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
