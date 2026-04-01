export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-8 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a full-stack developer with a passion for creating elegant solutions to
              complex problems. With expertise in modern web technologies, I build fast,
              scalable, and user-friendly applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition"
              >
                🐙
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition"
              >
                💼
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition"
              >
                𝕏
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg h-80 flex items-center justify-center">
            <span className="text-8xl">👋</span>
          </div>
        </div>
      </div>
    </section>
  );
}
