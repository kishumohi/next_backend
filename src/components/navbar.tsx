import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="p-2">
        <button
          className=" m-2 select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <Link href="/signup" passHref>
            Sign up
          </Link>
        </button>

        <button
          className=" m-2 select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <Link href="/login" passHref>
            Login
          </Link>
        </button>

        <button
          className=" m-2 select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <Link href="/profile" passHref>
            Profile
          </Link>
        </button>
      </div>
    </>
  );
}
