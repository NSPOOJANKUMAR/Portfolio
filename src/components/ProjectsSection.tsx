export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Oracle Fusion Procurement Reporting",
      description: "Built and supported procurement reports using SQL and Oracle Fusion Cloud to ensure accurate financial and supplier data insights",
      technologies: ["SQL", "Oracle Fusion Cloud", "OTBI", "Data Analytics"],
      color: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "Oracle HCM SOAR Reporting (Deloitte)",
      description: "Developed SQL queries and OTBI/BI reports to support workforce and payroll analytics during SOAR implementation",
      technologies: ["SQL", "OTBI", "BI Publisher", "Oracle HCM"],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Healthcare Data Analytics",
      description: "Analyzed healthcare datasets to identify trends and support predictive insights through data preprocessing and reporting",
      technologies: ["Python", "SQL", "Pandas", "Machine Learning"],
      color: "from-pink-600 to-red-600"
    },
    {
      id: 4,
      title: "Chest X-ray Classification (CNN)",
      description: "Built a deep learning model to detect abnormalities in chest X-ray images for automated medical image classification",
      technologies: ["Python", "TensorFlow", "Keras", "CNN"],
      color: "from-red-600 to-orange-600"
    },
    {
      id: 5,
      title: "Node.js Backend System",
      description: "Developed a backend application with relational database integration for efficient data handling and API operations",
      technologies: ["Node.js", "SQL", "REST APIs", "Backend"],
      color: "from-orange-600 to-yellow-600"
    }
  ];

  return (
    <section id="work" className="py-20 px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 tracking-tight">
          Featured Work
        </h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition"
            >
              {/* Project Header with Background */}
              <div className={`bg-gradient-to-r ${project.color} opacity-10 group-hover:opacity-20 transition p-12 h-40 flex items-center`}>
                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="p-8 bg-black/50">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 text-white text-sm rounded border border-white/20 group-hover:bg-white/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
