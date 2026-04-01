export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-black dark:bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href="mailto:your.email@example.com"
            className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition"
          >
            Send Me an Email
          </a>
          <a
            href="#"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition"
          >
            Download Resume
          </a>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-12">
          <p className="text-gray-400">
            © 2024 Poojan. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
