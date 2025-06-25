"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const Navlinks = [
    { id: 2, link: "/about", title: "Qui suis-je ?" },
    { id: 3, link: "/book", title: "Mon travail" },
    { id: 4, link: "/prestation", title: "Mes services" },
    { id: 5, link: "/contact", title: "Me contacter" },
  ];

  const handleScroll = () => {
    setScrolling(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setNav(false);
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-100 w-full px-5 py-4 bg-[#f9f8f7] transition-shadow duration-300 ${
        scrolling ? "shadow-lg" : ""
      }`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-3 py-2 max-w-6xl">
        <h1 className="text-2xl font-mono ml-2 flex flex-col">
          <Link href="/" className="link-underline link-underline-black">
            Jade Bailly
          </Link>
        </h1>
        <div className="flex gap-6">
          <ul className="hidden md:flex">
            {Navlinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="nav-links px-4 cursor-pointer font-semibold text-primary hover:text-[#aa4c4c] focus:text-[#aa4c4c] duration-200 link-underline"
                  onClick={handleLinkClick}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pl-40 z-10 text-primary md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#f9f8f7] text-primary pr-5">
              {Navlinks.map((item) => (
                <li
                  key={item.id}
                  className="nav-links px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  <Link href={item.link} onClick={handleLinkClick}>
                    {item.title}
                  </Link>
                </li>
              ))}
              <Link href="/espace-client/logIn">
                <button
                  className="text-2xl mt-4 border-[#aa5949] bg-[#aa5949] text-[#f9f8f7] px-8 py-2 font-semibold rounded-sm hover:bg-[#aa4c4c] transition duration-300"
                  onClick={handleLinkClick}
                >
                  Espace client
                </button>
              </Link>
            </ul>
          )}
        </div>
        <Link href="/espace-client/logIn">
          <button className="hidden hover:cursor-pointer sm:block border-[#aa5949] bg-[#aa5949] text-[#f9f8f7] px-6 py-1 font-semibold rounded-sm hover:bg-[#aa4c4c] transition duration-300">
            Espace client
          </button>
        </Link>
      </div>
    </nav>
  );
};
