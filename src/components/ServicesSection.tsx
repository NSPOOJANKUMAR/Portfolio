export default function ServicesSection() {
  const services = [
    {
      title: "Enterprise Cloud Solutions",
      description: "Oracle Fusion Cloud (HCM & Procurement), Oracle Integration Cloud, and comprehensive cloud technology implementation for business automation."
    },
    {
      title: "Data Analytics & BI",
      description: "SQL, OTBI, BI Publisher, and advanced data analytics to transform complex enterprise data into actionable business insights."
    },
    {
      title: "AI & Machine Learning",
      description: "Building intelligent solutions with AI/ML technologies including deep learning models, predictive analytics, and data-driven automation."
    },
    {
      title: "Backend Development",
      description: "Node.js backend systems, REST API integration, database architecture, and scalable application development for modern tech stacks."
    },
    {
      title: "API Integration",
      description: "Seamless API design and integration across enterprise systems, enabling smooth data flow and system communication."
    },
    {
      title: "System Architecture",
      description: "Strategic planning and architecture of robust cloud and backend systems with focus on scalability and performance."
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 tracking-tight">
          What I Do
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
