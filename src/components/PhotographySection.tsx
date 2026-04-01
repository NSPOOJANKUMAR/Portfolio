export default function PhotographySection() {
  return (
    <section id="gallery" className="py-32 px-6 lg:px-8 bg-black text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl lg:text-6xl font-light mb-8 tracking-tight">
            Visual Vault
          </h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
            A curated collection of photography capturing moments across portraiture, landscape, architecture, and more. Each frame tells a story through composition, light, and perspective.
          </p>
        </div>

        {/* Gallery Grid - 12 Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="group relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 hover:opacity-80 transition duration-300 cursor-pointer flex items-center justify-center"
            >
              <div className="text-4xl opacity-30">📷</div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 font-light">
            Photography samples ready to be integrated from your Google Drive collection
          </p>
        </div>
      </div>
    </section>
  );
}
