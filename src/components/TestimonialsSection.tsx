export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Poojan quickly got up to speed and made complex reporting feel simple—reliable, sharp, and easy to work with.",
      author: "Angela O'Leary",
      title: "HR Consultant Specialist Master",
      company: "Deloitte",
    },
    {
      id: 2,
      quote: "Poojan is dependable and detail-focused—he consistently delivered accurate work and supported our team effectively.",
      author: "Jonathan Ross Barron",
      title: "Procurement Specialist",
      company: "University of Memphis",
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-8 bg-black text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-light mb-20 tracking-tight">
          What Clients Say
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group">
              <blockquote className="text-xl lg:text-2xl font-light text-gray-300 leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                {/* Profile Image Placeholder */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex-shrink-0 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>

                {/* Author Info */}
                <div>
                  <h3 className="text-lg font-light text-white">
                    {testimonial.author}
                  </h3>
                  <p className="text-gray-500 font-light text-sm">
                    {testimonial.title}
                  </p>
                  <p className="text-blue-400 font-light text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
