"use client";

import Link from "next/link";


export default function RegisterPage() {
   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
         <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

            <h2 className="text-2xl font-bold text-center mb-6">
               Create Account
            </h2>

            <form  className="space-y-4">

               {/* Name */}
               <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input
                     type="text"
                     name="name"
                     placeholder="Enter your name"
                     className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-0"
                  />
               </div>

               {/* Email */}
               <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                     type="email"
                     name="email"
                     placeholder="Enter your email"
                     className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-0"
                  />
               </div>

               {/* Password */}
               <div>
                  <label className="block text-sm mb-1">Password</label>
                  <input
                     type="password"
                     name="password"
                     placeholder="Enter your password"
                     className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-0"
                  />
               </div>

               {/* Button */}
               <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
               >
                  Login
               </button>
            </form>

            {/* Footer */}
            <p className="text-sm text-center mt-4">
               Already have an account?{" "}
               <Link href={'/login'} className="text-blue-600 cursor-pointer hover:underline">
                  Login
               </Link>
            </p>
         </div>
      </div>
   );
}