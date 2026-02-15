"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 " />,
  },
  {
    name: "profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5" />,
  },
];

function SideNavigationMobile() {
  const pathName = usePathname();

  return (
    <nav className="fixed flex z-10 bottom-0 right-0 left-0 mx-auto sm:hidden  bg-primary-700 ">
      <ul className="flex justify-between  gap-2 w-full text-lg ">
        {navLinks.map((link) => (
          <li key={link.name} className="flex flex-col group">
            <Link
              className={` py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                pathName === link.href ? "bg-primary-900 text-primary-100" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span className="hidden min-[480px]:block">{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="group">
          <SignOutButton>
            <span className="hidden min-[480px]:block text-sm ">Sign out</span>
          </SignOutButton>
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigationMobile;
