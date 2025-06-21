import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full h-full min-h-screen bg-[#a4abb624] relative ">
      <div className="absolute top-0 left-0 w-full h-20 md:h-24 xl:h-[100px] z-50">
        <Navbar />
      </div>
      {children}
    </main>
  );
};

export default Layout;
