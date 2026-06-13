import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-14 bg-transparents fixed hover:cursor-pointer z-50">
        <div className="flex justify-end items-center h-full mr-30">
          <ul className="flex flex-row items-center space-x-12">
            <li>
              <Link
                href="/"
                className="text-black font-bold hover:text-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-black font-bold hover:text-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-black font-bold hover:text-gray-700"
              >
                Contact
              </Link>
            </li>
            <li></li>
            <li>
              <Link
                href="/addToCart"
                className="bg-black w-[30px] h-[30px] flex items-center justify-center rounded-lg hover:shadow-lg transition-shadow duration-500 ease-in cursor-pointer"
              >
                <Image src={"/cart.png"} alt="cart" width={16} height={16} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
