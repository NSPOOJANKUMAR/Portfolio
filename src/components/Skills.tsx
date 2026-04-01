export default function Skills() {
  const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    "Backend": ["Node.js", "Express", "PostgreSQL", "MongoDB", "Python"],
    "Tools": ["Git", "Docker", "AWS", "Firebase", "Vercel"],
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, techList]) => (
            <div key={category} className="bg-white dark:bg-black rounded-lg p-6">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {techList.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
