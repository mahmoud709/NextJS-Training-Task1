import Link from "next/link";

export default function Services() {
   const services = [
      {
         id: '1',
         title: "Expert-Led Courses",
         desc: "Learn from industry professionals with real-world experience.",
         icon: "🎓",
      },
      {
         id: '2',
         title: "Track Your Progress",
         desc: "Monitor your learning journey and stay motivated.",
         icon: "📊",
      },
      {
         id: '3',
         title: "Get Certified",
         desc: "Earn certificates to boost your career opportunities.",
         icon: "🏆",
      },
      {
         id: '4',
         title: "Flexible Learning",
         desc: "Access courses anytime, anywhere at your own pace.",
         icon: "⏳",
      },
   ];

   return (
      <section className="pt-16 pb-32  bg-white">
         <div className="max-w-7xl mx-auto px-4 text-center">

            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
               Why <span className="text-blue-600">Choose</span> Us
            </h2>

            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
               Everything you need to learn, grow, and succeed in your career.
            </p>

            {/* Cards */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
               {services.map((service) => (
                  <Link href={`course/${service?.id}`} key={service?.id} >
                     <div
                        className="p-6 hover:border-b-2 hover:border-blue-600 shadow-md group rounded-xl transition"
                     >
                        <div className="">
                           <div className="text-3xl">{service.icon}</div>
                           <h3 className="mt-4 font-semibold text-lg text-gray-800">
                              {service?.title}
                           </h3>
                           <p className="mt-2 text-sm text-gray-600">
                              {service?.desc}
                           </p>
                        </div>
                     </div>
                  </Link>
               ))}
            </div>

         </div>
      </section>
   );
}