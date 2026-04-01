export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Poojan quickly got up to speed and made complex reporting feel simple—reliable, sharp, and easy to work with.",
      author: "Angela O'Leary",
      title: "HR Consultant Specialist Master",
      company: "Deloitte",
      icon: "💼"
    },
    {
      id: 2,
      quote: "Poojan is dependable and detail-focused—he consistently delivered accurate work and supported our team effectively.",
      author: "Jonathan Ross Barron",
      title: "Procurement Specialist",
      company: "University of Memphis",
      icon: "🎓"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 tracking-tight">
          What Clients Say
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-10 bg-white/5 border border-white/10 rounded-lg hover:border-white/30 hover:bg-white/10 transition"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl">{testimonial.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {testimonial.title}
                  </p>
                  <p className="text-sm text-blue-400">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <blockquote className="text-lg text-gray-300 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
