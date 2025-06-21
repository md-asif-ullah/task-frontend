"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className="w-full cursor-pointer max-w-[558px] bg-[#60E5AE] hover:bg-[#498069] duration-500 text-black md:h-[60px] text-xl font-medium mt-10"
    >
      Back To Home
    </Button>
  );
};

export default GoBackButton;
