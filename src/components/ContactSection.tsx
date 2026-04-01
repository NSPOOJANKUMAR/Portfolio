export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-8 bg-black text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* CTA */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-light mb-12 tracking-tight leading-tight">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light">
              I'm always interested in hearing about new opportunities and projects. Whether you need enterprise cloud solutions, data analytics, or modern full-stack development, let's create something meaningful together.
            </p>
            
            <div className="flex flex-col gap-4">
              <a
                href="mailto:mnspoojankumar@gmail.com"
                className="px-8 py-4 bg-white text-black font-light rounded hover:bg-gray-200 transition inline-block w-fit"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* Contact Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm text-gray-500 font-light uppercase mb-4">Email</h3>
              <a
                href="mailto:mnspoojankumar@gmail.com"
                className="text-2xl text-gray-300 hover:text-white transition font-light"
              >
                mnspoojankumar@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm text-gray-500 font-light uppercase mb-6">Connect</h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/mnspoojankumar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition font-light"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/nspoojankumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition font-light"
                >
                  GitHub
                </a>
                <a
                  href="https://drive.google.com/file/d/1MYQA5vdQtEZ6n7XHdT6-ZGn_c27ipMUu/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition font-light"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-600 font-light">
            <p>© 2024 Poojan Mittapalli. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#work" className="hover:text-gray-400 transition">Work</a>
              <a href="#about" className="hover:text-gray-400 transition">About</a>
              <a href="#gallery" className="hover:text-gray-400 transition">Visual Vault</a>
              <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
