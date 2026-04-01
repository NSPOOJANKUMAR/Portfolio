export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A modern web application built with React and TypeScript",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      link: "#",
      icon: "🚀",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Full-stack application with real-time features",
      technologies: ["Next.js", "Node.js", "PostgreSQL"],
      link: "#",
      icon: "⚡",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Mobile-first responsive design showcase",
      technologies: ["React Native", "Firebase", "Redux"],
      link: "#",
      icon: "📱",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 hover:shadow-lg transition transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
