export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 lg:px-8 bg-black text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-light mb-20 tracking-tight">
          About
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Text Content */}
          <div className="space-y-8">
            <p className="text-lg lg:text-xl text-gray-400 leading-relaxed font-light">
              I'm a Computer Science graduate with hands-on experience on the University of Memphis SOAR (Oracle Cloud) project, 
              where I worked extensively with SQL, OTBI, and enterprise data systems.
            </p>
            
            <p className="text-lg lg:text-xl text-gray-400 leading-relaxed font-light">
              My passion lies in building data-driven and AI-powered solutions that solve real business problems. 
              I combine deep enterprise system knowledge with modern technology skills to create intelligent, scalable applications.
            </p>

            <p className="text-lg lg:text-xl text-gray-400 leading-relaxed font-light">
              What sets me apart is my ability to bridge the gap between complex enterprise systems (Oracle Fusion Cloud, HCM, Procurement) 
              and modern development practices (Node.js, Python, Machine Learning).
            </p>
          </div>

          {/* Expertise Highlights */}
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-light text-white mb-8 uppercase tracking-widest text-sm">Expertise</h3>
              <ul className="space-y-6">
                {[
                  "Oracle Fusion Cloud (HCM & Procurement)",
                  "SQL & Data Analytics (OTBI, BI Publisher)",
                  "AI/ML & Deep Learning",
                  "Backend Development (Node.js, APIs)",
                  "Cloud Technologies & Integration",
                  "Enterprise Systems Architecture"
                ].map((item, idx) => (
                  <li key={idx} className="text-gray-500 font-light flex items-start gap-4 hover:text-gray-400 transition-colors duration-300">
                    <span className="text-gray-700 mt-1 flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-light text-white mb-8 uppercase tracking-widest text-sm">Background</h3>
              <div className="space-y-6 text-gray-500 font-light">
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wider mb-2">Education</p>
                  <p className="text-lg">Computer Science Graduate</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wider mb-2">Experience</p>
                  <p className="text-lg">Oracle Cloud Analyst</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wider mb-2">Internship</p>
                  <p className="text-lg">Deloitte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
