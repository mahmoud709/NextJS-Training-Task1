import Link from "next/link";

export default function Footer() {
   return (
      <footer className="bg-gray-900 text-gray-300">
         <div className="max-w-7xl mx-auto px-4 py-10">

            <div className="grid gap-8 md:grid-cols-4">

               {/* Logo & About */}
               <div>
                  <h2 className="text-xl font-bold text-white">TrainingApp</h2>
                  <p className="mt-3 text-sm text-gray-400">
                     An educational platform that helps you learn new skills and develop your professional future.                  </p>
               </div>

               {/* Links */}
               <div>
                  <h3 className="text-white font-semibold">Quick Links</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                     <li><Link href="/">Home</Link></li>
                     <li><Link href="/courses">Courses</Link></li>
                     <li><Link href="/about">About</Link></li>
                  </ul>
               </div>

               {/* Support */}
               <div>
                  <h3 className="text-white font-semibold">Support</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                     <li><Link href="/contact">Contact</Link></li>
                     <li><Link href="/faq">FAQ</Link></li>
                  </ul>
               </div>

               {/* Newsletter */}
               <div>
                  <h3 className="text-white font-semibold">Stay Updated</h3>
                  <p className="mt-3 text-sm text-gray-400">
                     Subscribe to our newsletter.
                  </p>

                  <div className="mt-4 flex">
                     <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border-2 border-blue-500 px-3 py-2 rounded-l-md text-gray-50 outline-none"
                     />
                     <button className="px-4 bg-blue-600 text-white rounded-r-md">
                        Join
                     </button>
                  </div>
               </div>

            </div>

            {/* Bottom */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
               © {new Date().getFullYear()} TrainingApp. All rights reserved.
            </div>

         </div>
      </footer>
   );
}