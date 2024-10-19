"use client";
import Link from "next/link";
import {useState} from "react";
import NavBtn from "./NavBtn";
import NavLinks from "./navLinks";
import {buttonVariants} from "./ui/button";

export default function Header() {
  const [navState, setNavState] = useState(false);

  return (
    <div className="w-full mx-auto  fixed z-10 sm:backdrop-blur">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="backdrop-blur w-full flex justify-between py-4">
            <div>Adel</div>
            <button
              className="sm:hidden space-y-1.5 p-2 transition-all duration-300 hover:bg-background-alt rounded-full aspect-square flex flex-col justify-cente outline-none border-none focu"
              onClick={() => {
                setNavState(!navState);
              }}
            >
              <NavBtn navState={navState} />
            </button>
          </div>
          <div
            className={`${
              navState ? "max-sm:translate-x-0" : "max-sm:translate-x-full"
            } transition-all duration-300 grow max-sm:fixed max-sm:w-full max-sm:h-[calc(100svh-60px)] max-sm:p-5 max-sm:bg-gray-600/30 left-0 top-[60px] sm:justify-end flex max-sm:flex-col backdrop-blur gap-5`}
          >
            <NavLinks setNavState={setNavState} />
            <div className="flex items-center gap-2 max-sm:flex-col max-sm:gap-5 max-sm: max-sm:w-full">
              <Link
                href="#"
                className={`${buttonVariants({variant: "secondary"})} max-sm:w-full max-sm:block max-sm:text-center`}
              >
                Login
              </Link>
              <Link href="#" className={`${buttonVariants()} max-sm:w-full max-sm:block max-sm:text-center`}>
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
