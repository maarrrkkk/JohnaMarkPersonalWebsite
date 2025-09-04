// import Aurora from '../components/Aurora';

function Aboutme() {
  return (
    <div className="relative bg-slate-950 About-me overflow-hidden">
      {/* Aurora background */}
      {/* <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#046E5B", "#66A8FF", "#00457A"]}
          blend={0.5}
          amplitude={1}
          speed={1}
        />
      </div> */}

      {/* Main content above */}
      <div className="relative z-10 px-4 sm:px-6 pb-5 pt-20">
        <div className="min-h-screen flex flex-col lg:flex-row w-full gap-8 items-start">
          {/* Image */}
          <div className="w-full lg:w-1/3 min-w-[300px] relative min-h-[500px] lg:min-h-screen">
            {/* Background image */}
            <img
              src="/JohnaMarkPersonalWebsite/assets/images/background-img.jpeg"
              alt="John Mark Aguilar - Full-Stack Developer & Virtual Assistant"
              className="absolute inset-0 w-full h-full object-cover z-0 rounded-lg"
            />

            {/* Bottom overlay and text wrapper */}
            <div className="absolute bottom-0 left-0 w-full z-10">
              {/* Text content positioned on top of gradient */}
              <div className="relative z-20 p-6">
                <div className="text-white w-full flex flex-row justify-between items-center text-sm sm:text-base font-bold">
                  Age: <span className="text-gray-400 ml-2">22</span>
                </div>
                <div className="text-white w-full flex flex-row justify-between items-center text-sm sm:text-base font-bold">
                  Status:{" "}
                  <span className="text-gray-400 ml-2">
                    Single
                  </span>
                </div>
                <div className="text-white w-full flex flex-row justify-between items-center text-sm sm:text-base font-bold">
                  Location:{" "}
                  <span className="text-gray-400 ml-2">
                    Calbayog City, Samar
                  </span>
                </div>
                <div className="text-white w-full flex flex-row justify-between items-center text-sm sm:text-base font-bold">
                  Response Time:{" "}
                  <span className="text-gray-400 ml-2">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full flex flex-col text-white">
            {/* Hero Section */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-6xl text-right font-bold mb-4">
                JOHN MARK
              </h1>
              <div className="w-full self-end h-0.5 bg-gray-200 mb-4" />
              <h2 className="text-xl sm:text-2xl text-right text-purple-400 font-semibold mb-4">
                Full-Stack Developer & Virtual Assistant
              </h2>
              <p className="text-right text-gray-300 text-lg">
                I'll be your own personal internet slave!
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column */}
              <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-4 mb-8">
                  <h3 className="text-2xl font-bold text-purple-400">
                    What I Do For You
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    I help businesses and entrepreneurs streamline their
                    operations through custom web development and comprehensive
                    virtual assistance. Whether you need a modern website that
                    converts visitors into customers, or reliable support to
                    handle your daily administrative tasks, I deliver solutions
                    that save you time and drive results.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

                    <div className="bg-slate-800 p-6 rounded-2xl border border-purple-500/20 shadow-md 
                      hover:shadow-purple-500/20 hover:scale-[1.02] transition-all duration-300">
                      <h4 className="font-semibold text-purple-300 text-lg mb-2">
                        Web Development
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        Custom websites and web applications that drive business
                        growth
                      </p>
                    </div>

                    <div className="bg-slate-800 p-6 rounded-2xl border border-purple-500/20 shadow-md 
                      hover:shadow-purple-500/20 hover:scale-[1.02] transition-all duration-300">
                      <h4 className="font-semibold text-purple-300 text-lg mb-2">
                        Virtual Assistant
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        Data Entry Associate • Typing Specialist • Email Management
                      </p>
                    </div>

                  </div>
                </div>

                <div className="flex flex-col gap-4 mb-8">
                  <h3 className="text-2xl font-bold text-purple-400">
                    My Services
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white">
                          Web Development
                        </h4>
                        <p className="text-sm text-gray-400">
                          React, Next.js, TypeScript, responsive design,
                          e-commerce solutions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white">
                          Virtual Assistant Services
                        </h4>
                        <p className="text-sm text-gray-400">
                          Email management, scheduling, social media, content
                          creation, data entry
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white">
                          UI/UX Design
                        </h4>
                        <p className="text-sm text-gray-400">
                          User-centered design, prototyping, brand identity,
                          graphic design
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white">
                          Digital Marketing Support
                        </h4>
                        <p className="text-sm text-gray-400">
                          Content strategy, SEO
                          optimization
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 mb-8">
                  <h3 className="text-2xl font-bold text-purple-400">
                    Why Work With Me?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-purple-500 font-bold">✓</span>
                      <span className="text-gray-300">
                        Always willing to learn and improve my skills
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-purple-500 font-bold">✓</span>
                      <span className="text-gray-300">
                        Communicates clearly and responds quickly
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-purple-500 font-bold">✓</span>
                      <span className="text-gray-300">
                        Can help with simple projects and tasks
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-purple-500 font-bold">✓</span>
                      <span className="text-gray-300">
                        Offers affordable work with dedication and effort
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column */}
              <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-4 mb-8">
                  <h3 className="text-2xl font-bold text-purple-400">
                    Technical Skills
                  </h3>
                  {[
                    { label: "React & Next.js", width: "90%" },
                    { label: "TypeScript & JavaScript", width: "80%" },
                    { label: "UI/UX Design (Figma)", width: "95%" },
                    { label: "Laravel & PHP", width: "45%" },
                    { label: "Virtual Assistant Services", width: "70%" },
                    { label: "Social Media Management", width: "85%" },
                    { label: "Graphic Design", width: "80%" },
                  ].map((skill, i) => (
                    <div key={i} className="mb-4">
                      <div className="flex justify-between mb-2">
                        <p className="text-white font-medium">{skill.label}</p>
                        <span className="text-purple-400 text-sm">
                          {skill.width}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-purple-700 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: skill.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-4 mb-8">
                  <h3 className="text-2xl font-bold text-purple-400">
                    Education & Background
                  </h3>
                  <div className="bg-slate-800 p-6 rounded-lg border border-purple-500/20">
                    <h4 className="text-white font-semibold mb-2">
                      Bachelor of Science in Information Technology
                    </h4>
                    <p className="text-purple-300 mb-3">
                      Northwest Samar State University, Calbayog City
                    </p>
                    <p className="text-gray-400 text-sm">
                      Specialized in web development, database management, and
                      system analysis. Graduated with hands-on experience in
                      modern development frameworks and business applications.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 mb-8">
                  <h3 className="text-2xl font-bold text-purple-400">
                    Recent Projects
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-slate-800 p-4 rounded-lg border border-purple-500/20">
                      <h4 className="text-white font-semibold mb-2">
                        Library Noise Detector System
                      </h4>
                      <p className="text-gray-400 text-sm">
                        IoT-based solution for monitoring and managing noise
                        levels in academic environments
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg border border-purple-500/20">
                      <h4 className="text-white font-semibold mb-2">
                        Vehicle Rental Management System
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Full-stack web application for managing vehicle rentals
                        with booking and payment integration
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg border border-purple-500/20">
                      <h4 className="text-white font-semibold mb-2">
                        Personal Portfolio Website
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Modern, responsive portfolio showcasing development
                        skills and creative projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Aboutme;
