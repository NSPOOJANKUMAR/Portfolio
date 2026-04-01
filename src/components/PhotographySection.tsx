export default function PhotographySection() {
  const galleries = [
    { id: 1, title: "Portrait Series", count: "12 Images" },
    { id: 2, title: "Landscape Collection", count: "8 Images" },
    { id: 3, title: "Architecture & Urban", count: "10 Images" },
    { id: 4, title: "Event Coverage", count: "15 Images" },
    { id: 5, title: "Nature & Wildlife", count: "9 Images" },
    { id: 6, title: "Street Photography", count: "11 Images" }
  ];

  return (
    <section id="gallery" className="py-20 px-6 lg:px-8 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">
          Visual Vault
        </h2>
        <p className="text-lg text-gray-400 mb-16 max-w-2xl">
          A curated collection of photography capturing moments across portraiture, landscape, architecture, and more. 
          Each frame tells a story through composition, light, and perspective.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleries.map((gallery) => (
            <div
              key={gallery.id}
              className="group relative h-64 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/20 overflow-hidden hover:border-white/50 transition cursor-pointer"
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 group-hover:bg-black/40 transition">
                <div className="text-5xl mb-4 group-hover:scale-110 transition">📷</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {gallery.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {gallery.count}
                </p>
                <p className="text-xs text-gray-500 mt-4">
                  Images from Google Drive
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-12 bg-white/5 border border-white/10 rounded-lg text-center">
          <p className="text-gray-300 mb-4">
            Photography samples are being integrated from your Google Drive collection.
          </p>
          <p className="text-sm text-gray-500">
            To add your photos, replace the placeholder galleries with actual images.
          </p>
        </div>
      </div>
    </section>
  );
}
