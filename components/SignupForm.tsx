"use client";
import {FormEvent} from "react";
import {Button} from "./ui/button";
import Link from "next/link";

export default function LoginForm() {
  const submit = async (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submit} className="border-rotate rounded-xl min-w-[400px] max-sm:min-w-full">
      <div className="relative bg-background shadow-md rounded-xl h-full p-5">
        <h1 className="text-center mb-10 text-2xl font-bold">Lets Get Started</h1>
        <div className="relative w-full mt-10 input-container">
          <input
            type="text"
            id="name"
            name="name"
            className="font-semibold relative w-full p-[10px] pt-5 bg-transparent border-none outline-none text-white z-[2] input"
            required
            onChange={(e) => {
              //
            }}
          />
          <label
            htmlFor="name"
            className="absolute left-0 w-full p-[10px] pt-5 transition-all duration-500 pointer-events-none"
          >
            Name
          </label>
          <i className="absolute left-0 bottom-0 w-full h-0.5 bg-accent transition-all duration-500 z-[1]"></i>
        </div>
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
            Email
          </label>
          <i className="absolute left-0 bottom-0 w-full h-0.5 bg-accent transition-all duration-500 z-[1]"></i>
        </div>
        <div className="relative w-full mt-10 input-container">
          <input
            type="text"
            id="password"
            name="password"
            className="font-semibold relative w-full p-[10px] pt-5 bg-transparent border-none outline-none text-white z-[2] input"
            required
            onChange={(e) => {
              //
            }}
          />
          <label
            htmlFor="password"
            className="absolute left-0 w-full p-[10px] pt-5 transition-all duration-500 pointer-events-none"
          >
            Password
          </label>
          <i className="absolute left-0 bottom-0 w-full h-0.5 bg-accent transition-all duration-500 z-[1]"></i>
        </div>
        <div className="mt-10">
          <Button className="w-full">Login</Button>
        </div>
        <div className="mt-12">
          Already have an Account?{" "}
          <Link href={"/login"} className="link-underline text-blue-400">
            Login
          </Link>
        </div>
      </div>
    </form>
  );
}
