export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Oracle Fusion Procurement Reporting",
      description: "Built and supported procurement reports using SQL and Oracle Fusion Cloud to ensure accurate financial and supplier data insights",
      technologies: ["SQL", "Oracle Fusion Cloud", "OTBI"],
    },
    {
      id: 2,
      title: "Oracle HCM SOAR Reporting",
      description: "Developed SQL queries and OTBI/BI reports supporting workforce and payroll analytics during SOAR implementation at Deloitte",
      technologies: ["SQL", "OTBI", "BI Publisher", "Oracle HCM"],
    },
    {
      id: 3,
      title: "Healthcare Data Analytics",
      description: "Analyzed healthcare datasets to identify trends and support predictive insights through data preprocessing and reporting",
      technologies: ["Python", "SQL", "Pandas", "ML"],
    },
    {
      id: 4,
      title: "Chest X-ray Classification",
      description: "Built a deep learning model to detect abnormalities in chest X-ray images for automated medical image classification",
      technologies: ["Python", "TensorFlow", "CNN"],
    },
    {
      id: 5,
      title: "Node.js Backend System",
      description: "Developed a backend application with relational database integration for efficient data handling and API operations",
      technologies: ["Node.js", "SQL", "REST APIs"],
    }
  ];

  return (
    <section id="work" className="py-32 px-6 lg:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-light mb-20 tracking-tight">
          Work
        </h2>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div key={project.id} className="group cursor-default">
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-sm mb-8 overflow-hidden hover:from-gray-700 hover:to-gray-800 transition-all duration-300 flex items-center justify-center relative">
                <div className="text-6xl opacity-20 group-hover:opacity-10 transition-opacity duration-300">📊</div>
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-all duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                  <h3 className="text-3xl lg:text-4xl font-light text-white group-hover:text-gray-300 transition duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-light">0{project.id}</p>
                </div>
                
                <p className="text-gray-400 leading-relaxed font-light text-lg mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs text-gray-500 border border-gray-700 px-3 py-1 rounded-full hover:text-gray-400 hover:border-gray-600 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {idx < projects.length - 1 && <div className="mt-16 border-t border-white/5"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
