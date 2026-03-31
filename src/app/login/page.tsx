"use client"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from "next/link";

export default function LoginPage() {
   const initialValues = {
      email: '',
      password: ''
   }
   const loginFormik = useFormik({
      initialValues,
      onSubmit: (values) => {
         console.log(values);
      },
      validationSchema: Yup.object().shape({
         email: Yup.string().email('Invaild Email').required('Email is required *'),
         password: Yup.string()
            .min(6, 'Password minimum is 6 characters')
            .max(12, 'Password maximum is 12 characters')
            .required('Password is required *')
      })
   });

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
            <form className="mt-6 space-y-4" onSubmit={loginFormik.handleSubmit}>

               {/* Email */}
               <div>
                  <label className="text-sm text-gray-600">Email</label>
                  <input
                     onChange={loginFormik.handleChange}
                     onBlur={loginFormik.handleBlur}
                     value={loginFormik.values.email}
                     type="email"
                     name="email"
                     className={`w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 
                        ${loginFormik.errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-500'} focus:border-0`}
                     placeholder="you@example.com"
                  />
                  {loginFormik.errors.email && loginFormik.touched.email ? <p className='text-red-600 pt-2 text-sm'>{loginFormik.errors.email}</p> : ''}
               </div>

               {/* Password */}
               <div>
                  <label className="text-sm text-gray-600">Password</label>
                  <input
                     type="password"
                     name="password"
                     onChange={loginFormik.handleChange}
                     onBlur={loginFormik.handleBlur}
                     value={loginFormik.values.password}
                     required
                     className={`w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 ${loginFormik.errors.password ? 'focus:ring-red-500' : 'focus:ring-blue-500'}    focus:border-0 `}
                     placeholder="••••••••"
                  />
                  {loginFormik.errors.password && loginFormik.touched.password ? <p className='text-red-600 pt-2 text-sm'>{loginFormik.errors.password}</p> : ''}
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