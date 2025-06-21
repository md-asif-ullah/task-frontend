"use client";

import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { HiOutlineClipboardList } from "react-icons/hi";
import { PiSpinnerBallLight } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItem = [
    {
      icon: <HiOutlineClipboardList />,
      title: "Tasks List",
      pathname: "/task",
    },
    {
      icon: <PiSpinnerBallLight />,
      title: "Spin",
      pathname: "/spin",
    },
  ];

  return (
    <nav className="relative h-20 bg-transparent w-full flex items-center justify-between md:px-16 xl:px-24 mt-5 px-5 z-50">
      {/* Mobile menu button */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl"
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/icons/clock-icon.png"
          alt="Clock Icon"
          width={50}
          height={50}
          className="h-[50px] w-[50px]"
        />
        <h2 className="text-3xl font-extrabold text-white">Tasko</h2>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-12">
        {menuItem.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 cursor-pointer ${
              item.pathname === pathname ? "text-[#60E5AE]" : "text-white"
            }`}
          >
            <i className=" text-4xl">{item.icon}</i>
            <h2 className="text-2xl font-semibold ">{item.title}</h2>
          </div>
        ))}
      </div>

      {/* Dropdown */}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-3 focus:outline-none">
            <Image
              src="/images/profile.png"
              alt="Profile image"
              width={40}
              height={40}
              className="rounded-full object-cover h-10 w-10 border border-white"
            />
            <h2 className="text-white text-lg font-medium">Name</h2>
            <IoMdArrowDropdown className="text-white text-xl" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80" align="start">
          <DropdownMenuLabel className="text-2xl">My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem className="text-lg">Profile</DropdownMenuItem>
            <DropdownMenuItem className="text-lg">Billing</DropdownMenuItem>
            <DropdownMenuItem className="text-lg">Settings</DropdownMenuItem>
            <DropdownMenuItem className="text-lg">
              Keyboard shortcuts
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-lg">Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full h-screen bg-white flex flex-col gap-4 py-6 px-5 md:hidden z-40">
          {menuItem.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 cursor-pointer ${
                item.pathname === pathname ? "text-[#60E5AE]" : "text-black"
              }`}
            >
              <i className="text-2xl">{item.icon}</i>
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
