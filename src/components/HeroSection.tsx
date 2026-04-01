export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Oracle Cloud Analyst & Full Stack Developer
            </h1>
            <p className="text-lg lg:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
              Shaping intelligent solutions and seamless digital experiences across enterprise systems, AI, and modern technology.
            </p>
            <div className="flex gap-6">
              <a
                href="https://drive.google.com/file/d/1MYQA5vdQtEZ6n7XHdT6-ZGn_c27ipMUu/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-white text-white font-semibold hover:bg-white hover:text-black transition"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="relative h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-white/10 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📸</div>
              <p className="text-gray-400">Profile Image</p>
              <p className="text-sm text-gray-500 mt-2">From your Google Drive</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
