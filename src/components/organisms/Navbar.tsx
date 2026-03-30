"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
   const [open, setOpen] = useState(false);
   const pathname = usePathname();

   const links = [
      { name: "Home", href: "/" },
      { name: "Courses", href: "/courses" },
      { name: "My Learning", href: "/learning" },
      { name: "About", href: "/about" },
   ];

   return (
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
         <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

            {/* Logo */}
            <Link href="/" className="text-xl font-bold">
               Afaq <span className="text-blue-600">Academy</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
               {links.map((link) => (
                  <Link
                     key={link.href}
                     href={link.href}
                     className={`text-sm font-semibold transition ${pathname === link.href
                           ? "text-blue-600"
                           : "text-gray-600 hover:text-black"
                        }`}
                  >
                     {link.name}
                  </Link>
               ))}
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-3">
               <Link
                  href="/login"
                  className="px-4 py-2 text-sm border rounded-md hover:bg-gray-100"
               >
                  Login
               </Link>
               <Link
                  href="/dashboard"
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
               >
                  Dashboard
               </Link>
            </div>

            {/* Mobile Button */}
            <button
               onClick={() => setOpen(!open)}
               className="md:hidden text-2xl"
            >
               ☰
            </button>
         </div>

         {/* Mobile Menu */}
         <div className={`${open ? "block" : "hidden"} md:hidden`}>
            <div className="flex flex-col p-4 gap-4">
               {links.map((link) => (
                  <Link
                     key={link.href}
                     href={link.href}
                     onClick={() => setOpen(false)}
                     className={`text-sm ${pathname === link.href
                           ? "text-blue-600 font-semibold"
                           : "text-gray-600"
                        }`}
                  >
                     {link.name}
                  </Link>
               ))}

               <hr />

               <Link href="/login" className="text-sm">
                  Login
               </Link>
               <Link href="/dashboard" className="text-sm font-semibold">
                  Dashboard
               </Link>
            </div>
         </div>
      </nav>
   );
}