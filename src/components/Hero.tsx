export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 px-4">
      <div className="max-w-4xl text-center">
        <div className="mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl">👨‍💻</span>
          </div>
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold text-black dark:text-white mb-6">
          Hi, I'm Poojan
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          A passionate full-stack developer building beautiful and functional web experiences
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-lg font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
