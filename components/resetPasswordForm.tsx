"use client";
import {FormEvent} from "react";
import {Button} from "./ui/button";
import {ArrowLeft} from "lucide-react";
import Link from "next/link";

export default function ResetPasswordForm() {
  const submit = async (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="max-sm:min-w-[90%]">
      <form onSubmit={submit} className="border-rotate rounded-xl min-w-[400px]">
        <div className="relative bg-background shadow-md rounded-xl h-full p-5 py-10">
          <h1 className="text-center mb-10 text-2xl font-bold">Update Your Password</h1>
          <div className="relative w-full mt-10 input-container">
            <input
              type="text"
              id="email"
              name="email"
              className="font-semibold relative w-full p-[10px] pt-5 bg-transparent border-none outline-none text-white z-[2] input"
              required
              onChange={(e) => {
                //
              }}
            />
            <label
              htmlFor="email"
              className="absolute left-0 w-full p-[10px] pt-5 transition-all duration-500 pointer-events-none"
            >
              Your Email
            </label>
            <i className="absolute left-0 bottom-0 w-full h-0.5 bg-accent transition-all duration-500 z-[1]"></i>
          </div>

          <div className="mt-10">
            <Button className="w-full">Submit</Button>
          </div>
        </div>
      </form>
      <Link href={"/login"} className="flex mx-auto mt-5 items-center gap-1 link-underline w-fit">
        <ArrowLeft size={18} /> Back to Login Page
      </Link>
    </div>
  );
}
