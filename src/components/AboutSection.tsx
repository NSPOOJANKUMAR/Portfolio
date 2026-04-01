export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 tracking-tight">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Main Bio */}
          <div>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
              I'm a Computer Science graduate with hands-on experience on the University of Memphis SOAR (Oracle Cloud) project, 
              where I worked extensively with SQL, OTBI, and enterprise data systems.
            </p>
            
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
              My passion lies in building data-driven and AI-powered solutions that solve real business problems. 
              I combine deep enterprise system knowledge with modern technology skills to create intelligent, scalable applications.
            </p>

            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              What sets me apart is my ability to bridge the gap between complex enterprise systems (Oracle Fusion Cloud, HCM, Procurement) 
              and modern development practices (Node.js, Python, Machine Learning), making me effective across the entire tech stack.
            </p>
          </div>

          {/* Skills & Stats */}
          <div>
            <div className="space-y-8">
              <div className="p-8 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Core Expertise</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="text-blue-400">▸</span>
                    Oracle Fusion Cloud (HCM & Procurement)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-400">▸</span>
                    SQL & Data Analytics (OTBI, BI Publisher)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-400">▸</span>
                    AI/ML & Deep Learning (Python, TensorFlow)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-400">▸</span>
                    Backend Development (Node.js, APIs)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-400">▸</span>
                    Cloud Technologies & Integration
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Background</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><strong>Education:</strong> Computer Science Graduate</li>
                  <li><strong>Experience:</strong> Oracle Cloud Analyst</li>
                  <li><strong>Internship:</strong> Deloitte</li>
                  <li><strong>Specialty:</strong> Enterprise Systems & AI Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
