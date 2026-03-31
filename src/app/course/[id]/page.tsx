"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function CoursePage() {
   const { id } = useParams();

   // fake data (بعد كده هتجيبها من API)
   const course = {
      id,
      title: "React & Next.js Complete Course",
      description:
         "Learn how to build modern web applications using React and Next.js with real-world projects.",
      instructor: "Ahmed Mohamed",
      duration: "12 Hours",
      lessons: 24,
      level: "Beginner to Advanced",
      curriculum: [
         "Introduction to React",
         "Components & Props",
         "State & Hooks",
         "Routing with Next.js",
         "API Integration",
         "Final Project",
      ],
   };

   return (
      <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
         <div className="max-w-5xl mx-auto px-4">

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
               {course.title}
            </h1>

            {/* Description */}
            <p className="mt-4 text-gray-600">
               {course.description}
            </p>

            {/* Info */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
               <div className="p-4 bg-white rounded-lg border">
                  <p className="text-gray-500">Instructor</p>
                  <p className="font-semibold">{course.instructor}</p>
               </div>

               <div className="p-4 bg-white rounded-lg border">
                  <p className="text-gray-500">Duration</p>
                  <p className="font-semibold">{course.duration}</p>
               </div>

               <div className="p-4 bg-white rounded-lg border">
                  <p className="text-gray-500">Lessons</p>
                  <p className="font-semibold">{course.lessons}</p>
               </div>

               <div className="p-4 bg-white rounded-lg border">
                  <p className="text-gray-500">Level</p>
                  <p className="font-semibold">{course.level}</p>
               </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex gap-4">
               <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Enroll Now
               </button>

               <Link
                  href="/"
                  className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
               >
                  Back to Courses
               </Link>
            </div>

            {/* Curriculum */}
            <div className="mt-10">
               <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Course Content
               </h2>

               <ul className="mt-4 space-y-3">
                  {course.curriculum.map((lesson, index) => (
                     <li
                        key={index}
                        className="p-4 bg-white shadow-sm rounded-lg flex justify-between items-center"
                     >
                        <span>
                           {index + 1}. {lesson}
                        </span>
                        <span className="text-sm text-gray-500">Preview</span>
                     </li>
                  ))}
               </ul>
            </div>

         </div>
      </div>
   );
}