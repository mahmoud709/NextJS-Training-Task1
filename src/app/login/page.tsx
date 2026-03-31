import Link from "next/link";

export default function LoginPage() {

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 ">

         <div className="w-full max-w-md bg-white px-8 py-16 rounded-xl shadow-md">

            {/* Title */}
            <h1 className="text-2xl font-bold text-center text-gray-900">
               Welcome Back 👋
            </h1>

            <p className="text-center text-gray-500 mt-2 text-sm">
               Login to continue your learning journey
            </p>

            {/* Form */}
            <form className="mt-6 space-y-4">

               {/* Email */}
               <div>
                  <label className="text-sm text-gray-600">Email</label>
                  <input
                     type="email"
                     name="email"
                     required
                     className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-0"
                     placeholder="you@example.com"
                  />
               </div>

               {/* Password */}
               <div>
                  <label className="text-sm text-gray-600">Password</label>
                  <input
                     type="password"
                     name="password"
                     required
                     className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-0"
                     placeholder="••••••••"
                  />
               </div>

               {/* Forgot password */}
               <div className="text-right">
                  <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                     Forgot Password?
                  </Link>
               </div>

               {/* Button */}
               <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
               >
                  Login
               </button>

            </form>

            {/* Register */}
            <p className="text-sm text-center text-gray-500 mt-6">
               Don’t have an account?{" "}
               <Link href="/register" className="text-blue-600 font-medium hover:underline">
                  Sign up
               </Link>
            </p>

         </div>

      </div>
   );
}