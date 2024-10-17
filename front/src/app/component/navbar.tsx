"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false); // État pour gérer l'ombre

  interface Navlink {
    id: number;
    link: string;
    title: string;
  }

  const Navlinks: Navlink[] = [
    {
      id: 2,
      link: "/about",
      title: "Qui suis-je ?",
    },
    {
      id: 3,
      link: "/portfolio",
      title: "Mon travail",
    },
    {
      id: 4,
      link: "/services",
      title: "Mes services",
    },
    {
      id: 5,
      link: "/contact",
      title: "Me contacter",
    },
  ];

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-100 w-full px-5 py-3 bg-[#f9f8f7] transition-shadow duration-300 ${
        scrolling ? "shadow-lg" : ""
      }`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-3 py-2 max-w-6xl">
        <div>
          <h1 className="text-2xl font-mono ml-2 flex flex-col">
            <a
              className="link-underline link-underline-black"
              href="/"
              rel="noreferrer"
            >
              Jade Bailly
            </a>
          </h1>
        </div>
        <div className="flex gap-6">
          <ul className="hidden md:flex">
            {Navlinks.map((item) => (
              <li
                key={item.id}
                className="nav-links px-4 cursor-pointer capitalize font-medium text-primary hover:text-muted-foreground duration-200 link-underline"
              >
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-primary md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#f9f8f7] text-primary">
              {Navlinks.map((item) => (
                <li
                  key={item.id}
                  className="nav-links px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <Link href="/gallery" legacyBehavior>
          <button className="border-[#aa5949] bg-[#aa5949] text-[#f9f8f7] px-6 py-1 font-semibold rounded-sm hover:bg-[#aa4c4c] transition duration-300">
            Espace client
          </button>
        </Link>
      </div>
    </nav>
  );
};
