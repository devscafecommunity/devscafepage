"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "About",
        url: "/about",
    },
    {
        title: "Contact",
        url: "/contact",
    },
];

export default function NavBar() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.clientHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / totalHeight) * 100;
      setPercent(scrollPercentage);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div

    >
      <div className="flex flex-col">
        {/* Page Scroll Progress */}
        <div
          className="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5 bg-blue-500"
          style={{ width: `${percent}%` }}
        ></div>

        {/* Navbar */}
        <div className="flex flex-row justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
          {/* Logo Container */}
          <div className="flex items-center">
            {/* Logo */}
            <a className="cursor-pointer">
              <h3 className="text-2xl font-medium text-blue-500">
                <Image
                  src="/assets/images/logo.png"
                  alt="logo"
                  href="/"
                  width={75}
                  height={75}
                />
              </h3>
            </a>
          </div>

<br />
{/* Links Section */}
<div className="items-center space-x-8 flex flex-row justify-center">
  {links.map((link, index) => (
    <Link key={index} href={link.url} className="flex px-4 text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
        {link.title}
    </Link>
  ))}
</div>
          {/* Icon Menu Section */}

        </div>
      </div>
    </div>
  );
}