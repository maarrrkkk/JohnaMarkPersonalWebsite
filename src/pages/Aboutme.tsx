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
              alt="About Me" 
              className="absolute inset-0 w-full h-full object-cover z-0 rounded-lg"
            />


            {/* Bottom overlay and text wrapper */}
            <div className="absolute bottom-0 left-0 w-full z-10">

              {/* Text content positioned on top of gradient */}
              <div className="relative z-20 p-6">
                <div className='text-white w-full flex flex-row justify-between items-center text-sm sm:text-base font-bold'>
                  Age: <span className='text-gray-400 ml-2'>22</span>
                </div>
                <div className='text-white w-full flex flex-row justify-between items-center text-sm sm:text-base font-bold'>
                  Status: <span className='text-gray-400 ml-2'>Single</span>
                </div>
                <div className='text-white w-full flex flex-row justify-between items-center text-sm sm:text-base font-bold'>
                  Location: <span className='text-gray-400 ml-2'>Calbayog City, Samar</span>
                </div>
              </div>
            </div>
          </div>



          {/* Content */}
          <div className="w-full flex flex-col text-white">
            <h1 className="text-4xl sm:text-6xl text-right font-bold mb-4">JOHN MARK</h1>
            <div className="w-full self-end h-0.5 bg-gray-200 mb-6" />

            <div className="flex flex-col md:flex-row gap-8">
              
              {/* Left Column */}
              <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-3 mb-6">
                  <h1 className="text-2xl font-bold">About Me</h1>
                  <p>
                  I'm <strong>John Mark Aguilar</strong>, a web developer and graphic designer focused on clean, responsive design and user-friendly interfaces. I also enjoy mobile photography, capturing moments with my Realme 5 Pro. Blending creativity and tech, I aim to deliver functional and visually impactful digital experiences.
                  </p>
                </div>

                <div className="flex flex-col gap-3 mb-6">
                  <h1 className="text-2xl font-bold">Skills</h1>
                  <p>
                  Frontend Development (React, TypeScript, Tailwind CSS), UI/UX Design (Figma, Adobe XD), Responsive Web Design, Graphic Design (Photoshop, Illustrator), Mobile Photography, Version Control (Git & GitHub), Basic Backend (Node.js, Express).
                  </p>
                </div>

                <div className="flex flex-col gap-3 mb-6">
                  <h1 className="text-2xl font-bold">Projects</h1>
                  <p>
                  I’ve worked on a variety of personal and academic projects, including a Library Noise Detector System, a Vehicle Rental Management System, and this personal portfolio. Each project showcases a balance of clean design, thoughtful interactions, and scalable code.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-3 mb-6">
                  <h1 className="text-2xl font-bold">Skills</h1>
                  {[
                    { label: "React & TypeScript", width: "60%" },
                    { label: "Laravel & PHP", width: "55%" },
                    { label: "UI/UX Design", width: "95%" },
                    { label: "Graphic Design", width: "75%" },
                    { label: "Mobile Photography", width: "80%" },
                  ].map((skill, i) => (
                    <div key={i}>
                      <p className="mb-1">{skill.label}</p>
                      <div className="w-full bg-gray-300 rounded-full h-1">
                        <div
                          className="bg-purple-700 h-1 rounded-full"
                          style={{ width: skill.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 mb-6">
                  <h1 className="text-2xl font-bold">Education</h1>
                  <p>
                    Bachelor of Science in Information Technology <br />
                    <span className="text-sm text-gray-400">Northwest Samar State University, Calbayog City</span>
                  </p>
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
