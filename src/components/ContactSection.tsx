export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* CTA */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              I'm always interested in hearing about new opportunities and projects. 
              Whether you need enterprise cloud solutions, data analytics, or modern full-stack development, 
              let's create something meaningful together.
            </p>
            
            <div className="flex gap-6 flex-wrap">
              <a
                href="mailto:mnspoojankumar@gmail.com"
                className="px-8 py-4 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
              >
                Send Email
              </a>
              <a
                href="https://drive.google.com/file/d/1MYQA5vdQtEZ6n7XHdT6-ZGn_c27ipMUu/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 bg-white/5 border border-white/10 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Email</h3>
              <a
                href="mailto:mnspoojankumar@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition text-lg"
              >
                mnspoojankumar@gmail.com
              </a>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-lg">
              <h3 className="text-lg font-semibold mb-6">Connect</h3>
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/mnspoojankumar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                >
                  <span className="text-2xl">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/nspoojankumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                >
                  <span className="text-2xl">🐙</span>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-gray-500">
              © 2024 Poojan Mittapalli. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Crafted with precision and built with modern technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
