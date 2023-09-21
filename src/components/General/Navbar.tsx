import React from "react";
import { Typography, Button, IconButton, Card } from "@material-tailwind/react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

let routes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];

export default function NavbarComponent() {
  return (
    <div>
      <nav className="fixed top-0 w-full z-50 ">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 p-2 flex row items-center">
          <div className="flex flex-row items-center">
            <Link href="/">
              <Image
                src="/assets/images/logo.png"
                alt="Picture of the author"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className="flex flex-row">
            {routes.map((route, index) => (
              <div key={index} className="p-2">
                <Link href={route.route}>
                  <Typography color="gray">{route.name}</Typography>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
