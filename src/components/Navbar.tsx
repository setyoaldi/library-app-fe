import { FaChevronDown } from "react-icons/fa";
import React, { Component } from "react";
import { PrimButton } from "./Button";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-20">
      <div className="flex-1">
        <a className="bg-base-100 normal-case font-bold text-base text-[#19345E]">
          E - Perpus
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="bg-base-100 normal-case font-bold text-base text-[#19345E]">
              Home
            </a>
          </li>
          <li tabIndex={0}>
            <a className="bg-base-100 normal-case font-bold text-base text-[#19345E]">
              Category
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-slate-100">
              <li>
                <a className="bg-base-100 normal-case font-bold text-base text-[#19345E] hover:bg-slate-200">
                  Biography
                </a>
              </li>
              <li>
                <a className="bg-base-100 normal-case font-bold text-base text-[#19345E] hover:bg-slate-200">
                  Comic
                </a>
              </li>
              <li>
                <a className="bg-base-100 normal-case font-bold text-base text-[#19345E] hover:bg-slate-200">
                  Encyclopedia
                </a>
              </li>
              <li>
                <a className="bg-base-100 normal-case font-bold text-base text-[#19345E] hover:bg-slate-200">
                  Novel
                </a>
              </li>
            </ul>
          </li>
          <li>
            <PrimButton label="Login" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
