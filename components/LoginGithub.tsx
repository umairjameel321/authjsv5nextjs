"use client";
import { login } from "@/actions/auth";
import React from "react";
import { FaGithub } from "react-icons/fa";

const LoginGithub = () => {
  return (
    <div
      onClick={() => login("github")}
      className="w-full gap-4  hover:cursor-pointer mt-6 h-12 bg-black rounded-md p-4 flex justify-center items-center"
    >
      <FaGithub className="text-white" />
      <p className="text-white">Login with Github</p>
    </div>
  );
};

export default LoginGithub;
