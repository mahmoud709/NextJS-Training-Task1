export default function Hero() {
   return (
      <section className="pt-24 min-h-screen bg-gray-50 flex flex-col justify-center items-center">
         <div className="max-w-7xl h-full mx-auto px-4 text-center">

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
               Learn Skills That Matter <br />
               Build Your <span className="text-blue-600">Future</span> Today
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
               Join our platform to access high-quality courses, track your progress,
               and grow your career with real-world skills.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
               <a
                  href="/courses"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
               >
                  Explore Courses
               </a>

               <a
                  href="/register"
                  className="px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
               >
                  Get Started
               </a>
            </div>

         </div>
         <div className="mt-10 flex justify-center gap-8 text-sm text-gray-600">
            <div><span className="font-bold text-black">2+</span> Students</div>
            <div><span className="font-bold text-black">20+</span> Courses</div>
            <div><span className="font-bold text-black">30+</span> Instructors</div>
         </div>
      </section>
   );
}