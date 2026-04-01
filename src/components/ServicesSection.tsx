export default function ServicesSection() {
  const services = [
    {
      title: "Enterprise Cloud Solutions",
      description: "Oracle Fusion Cloud (HCM & Procurement), Oracle Integration Cloud, and business automation systems."
    },
    {
      title: "Data Analytics & BI",
      description: "SQL, OTBI, BI Publisher, and transforming complex enterprise data into actionable insights."
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions with deep learning models, predictive analytics, and data-driven automation."
    },
    {
      title: "Backend Development",
      description: "Node.js systems, REST APIs, database architecture, and scalable application development."
    },
    {
      title: "API Integration",
      description: "Seamless API design and integration enabling smooth data flow across enterprise systems."
    },
    {
      title: "System Architecture",
      description: "Strategic planning of robust cloud and backend systems with focus on scalability."
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-8 bg-black text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
          {services.map((service, index) => (
            <div key={index} className="group">
              <h3 className="text-2xl lg:text-3xl font-light mb-6 text-white group-hover:text-gray-300 transition duration-300">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-light text-lg group-hover:text-gray-400 transition duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
