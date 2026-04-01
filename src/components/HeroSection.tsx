export default function HeroSection() {
  return (
    <section className="pt-40 pb-40 px-6 lg:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Tagline */}
        <div className="mb-32">
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light leading-tight tracking-tight mb-12">
            Oracle Cloud Analyst & Full Stack Developer
          </h1>
          <p className="text-xl lg:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl">
            Shaping intelligent solutions and seamless digital experiences across enterprise systems, AI, and modern technology.
          </p>
        </div>

        {/* Gallery Grid - 8 images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg hover:scale-105 transition duration-300 flex items-center justify-center overflow-hidden"
            >
              <div className="text-4xl opacity-50">🔄</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
