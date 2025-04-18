import { motion } from "framer-motion";
import Button from "../components/Button";
import Particles from "../components/Particles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

function Homepage() {


  return (
    <div className="Home-page">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-screen bg-[url('/JohnaMarkPersonalWebsite/assets/images/background-img.jpeg')] bg-fixed bg-cover bg-center text-white px-6 flex items-center justify-center relative"
      >
          <div className="max-w-3xl text-center p-6 rounded-lg relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Hello I am John Mark Aguilar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-lg md:text-xl mb-8"
            >
              I am a Website developer, graphic designer.
            </motion.p>
            <Link to="/aboutme">
              <Button>Learn More</Button>
            </Link>
          </div>

        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Particles />
        </div>
      </motion.div>

      <div className="w-full px-6 py-8 bg-slate-800">
        <div className="flex flex-wrap justify-center items-center gap-6 py-4">
          {[
            { icon: "html5", color: "orange-600", name: "HTML" },
            { icon: "css3-alt", color: "blue-600", name: "CSS" },
            { icon: "php", color: "indigo-700", name: "PHP" },
            { icon: "sass", color: "pink-500", name: "SCSS" },
            { icon: "laravel", color: "red-600", name: "Laravel" },
            { icon: "figma", color: "purple-500", name: "Figma" },
            { icon: "react", color: "sky-500", name: "React" },
            { icon: "python", color: "yellow-500", name: "Python" },
          ].map((skill, index) => (
            <div className="flex flex-col items-center min-w-[80px]" key={index}>
              <i className={`fab fa-${skill.icon} text-5xl text-${skill.color}`}></i>
              <p className="mt-2 text-white font-medium">{skill.name}</p>
            </div>
          ))}
          <div className="flex flex-col items-center min-w-[80px]">
            <img
              src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png"
              alt="Tailwind CSS"
              className="w-13 p-2 h-12"
            />
            <p className="mt-2 text-white font-medium">Tailwind</p>
          </div>
        </div>
      </div>
      <div className="w-full self-end h-0.5 bg-gray-500" />

      <div className="mx-auto text-center bg-slate-800 py-12 px-4 md:px-6">
        <div className=" container mx-auto flex flex-col gap-10 md:flex-row items-start md:space-y-0  justify-center">
          {/* UI/UX Design */}
          <div className="flex flex-col items-center p-8">
            <i className="fas fa-crown bg-gray-200 rounded-md content-center h-12 w-12 text-purple-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-white mb-2">UI/UX Design</h3>
            <p className="text-white">
              Crafting intuitive and aesthetically pleasing interfaces that enhance user experience through thoughtful design.
            </p>
          </div>

          <div className="flex flex-col items-center p-8">
            <i className="fas fa-laptop-code bg-gray-200 rounded-md content-center h-12 w-12 text-blue-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-white mb-2">Application Development</h3>
            <p className="text-white">
              Building robust and scalable applications tailored to solve real-world problems across platforms.
            </p>
          </div>

          <div className="flex flex-col items-center p-8">
            <i className="fas fa-globe bg-gray-200 rounded-md content-center h-12 w-12 text-green-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-white mb-2">Web Development</h3>
            <p className="text-white">
              Developing responsive and dynamic websites with modern technologies to ensure seamless online presence.
            </p>
          </div>
        </div>
      </div>


      <div className="bg-slate-950 mx-auto text-center py-12 px-4 md:px-6">
        <div className="container mx-auto flex flex-col-reverse gap-10 md:flex-row items-center md:space-y-0">
          <div className="text-center md:text-start max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-sky-300">
              John Mark Aguilar
            </h1>
            <p className="text-xl text-gray-200 mb-4 font-bold">
              UI/UX Designer and Web Developer
            </p>
            <p className="text-md text-gray-200 mb-6">
              Passionate about creating user-centric digital experiences with clean and intuitive interfaces. I specialize in wireframes, prototyping, and responsive design for mobile and web platforms.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-sky-950 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition duration-200">
                View Portfolio
              </button>
              <button className="border border-sky-450 text-sky-400 px-6 py-2 rounded-md hover:bg-blue-100 transition duration-200">
                Contact Me
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <img
              src="/JohnaMarkPersonalWebsite/assets/images/JOHN MARK_20230820_131206_0000.jpg"
              alt="John Mark Aguilar"
              className="w-48 h-48 md:w-full md:h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-950 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative overflow-hidden rounded-lg shadow group">
            <img
              src="/JohnaMarkPersonalWebsite/assets/images/thesis.jpeg"
              alt="Thesis Visual"
              className="w-full h-80 object-cover md:h-full transition-transform duration-300 group-hover:scale-150"
            />
            {["Mae Ann Arriega", "John Mark Aguilar", "Jamila Aguilar"].map((name, idx) => (
              <div
                key={idx}
                className={`absolute hidden md:block top-80 ${idx === 0 ? "left-10" : idx === 1 ? "left-1/2 transform -translate-x-1/2" : "right-10"} -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <p className="font-semibold bg-black/60 px-3 py-1 rounded">{name}</p>
              </div>
            ))}
          </div>

          <div>
            <h1 className="text-6xl font-bold mb-10 text-sky-300">Capstone</h1>
            <h2 className="text-3xl font-bold text-gray-200 mb-4">
              NwSSU Library Noise Detector
            </h2>
            <p className="text-gray-200 mb-4">
              The <span className="font-medium">Library Noise Detector System</span> is an Arduino-based solution designed to maintain a quiet and productive study environment. It enables real-time noise monitoring and provides staff controls through a desktop interface.
            </p>
            <p className="text-gray-200">
              Built using modern technologies like PyQt5 and serial communication, this system is focused on practical implementation and real-world application in school libraries.
            </p>
            <div className="mt-6 justify-items-center">
              <a
                href="#"
                className="border border-sky-450 text-sky-400 px-6 py-2 rounded-md hover:bg-blue-100 transition duration-200"
              >
                View Full Thesis
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h4 className="text-3xl font-bold text-sky-300 mb-4">A Little Bit About Me</h4>
            <p className="text-gray-200 leading-relaxed">
            I'm John Mark Aguilar, a passionate photographer who finds joy in capturing moments that tell a story. Using my Realme 5 Pro smartphone, I bring out the beauty in both landscapes and portraits through a mobile lens. I explore light, emotion, and composition to create visually striking and meaningful imagery. Whether it’s portraits, sweeping landscapes, or candid shots, I aim to preserve the essence of every scene I encounter.
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col md:flex-col text-center gap-4">
          <div className=" flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full md:w-1/2">
                <img
                  src="/JohnaMarkPersonalWebsite/assets/images/photo1.jpg"
                  alt="John Mark Working"
                  className="rounded-lg shadow-lg object-cover w-full h-80 transition-transform duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <img
                  alt="Creative Work"
                  className="rounded-lg shadow-lg object-cover w-full h-64 transition-transform duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                  src="/JohnaMarkPersonalWebsite/assets/images/photo2.jpeg"
                />
                <img
                  alt="Project Presentation"
                  className="rounded-lg shadow-lg object-cover w-full h-64 transition-transform duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                  src="/JohnaMarkPersonalWebsite/assets/images/photo3.jpg"
                />
              </div>
            </div>
            
            <div className="flex flex-row justify-center gap-4">
              <p className="content-center text-gray-200">Check me out on</p>
            <a
              href="https://www.instagram.com/johnmark_aguilar/"
              className="text-3xl text-gray-200 hover:text-blue-700 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a> 
            <a
              href="https://www.instagram.com/johnmark_aguilar/"
              className="text-3xl text-gray-200 hover:text-blue-700 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a> 
            </div>       
          </div>
        </div>
      </div>
      

      <div className="relative min-h-screen bg-[url('/JohnaMarkPersonalWebsite/assets/images/nwssu-bg.jpg')] bg-fixed bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Semi-transparent black overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] opacity-80 z-1"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-500 font-bold mb-5 drop-shadow-[0_0_10px_#22c55e]">
            Northwest Samar State University
          </h1>
          <p className="text-gray-200 text-sm sm:text-base mb-2 sm:mb-3">
            The Northwest Samar State University is a public university in the Philippines. It is one of the state universities and colleges in the Philippines.
          </p>
          <p className="text-gray-200 text-sm mb-5 sm:text-base">
            I am currently undergoing my internship as part of my Bachelor of Science in Information Technology program.
          </p>
          <button className="border border-green-500 text-white px-6 py-2 rounded-md shadow hover:bg-green-500 px-8 transition duration-200">
          Full Story 
        </button>
        </div>
      </div>




      <div className="py-16 bg-slate-950 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl text-sky-300 font-bold mb-4">Testimonials</h2>
          <p className="text-gray-200 mb-12 max-w-2xl mx-auto">
            Hear from some of my satisfied clients who’ve experienced the quality of my work firsthand.
          </p>

          <div className="grid gap-10 md:grid-cols-3">    

          <div className="text-white bg-sky-500 p-8 flex flex-col items-left rounded-lg shadow-lg h-full gap-6">
            <div className="flex flex-row items-left text-left gap-4">
              <img
                src="https://scontent.fceb1-4.fna.fbcdn.net/v/t39.30808-6/475213688_1930819384108465_7480961542835826490_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEhAst27EuM8KIFBlDUlZ9nWMyjd8WxTBJYzKN3xbFMEght_1FedPPCOdsgH3hu2SsVdBsM2OwJMAIPOqTKMudW&_nc_ohc=BqWeDXUF0M4Q7kNvwHBDcYr&_nc_oc=Admb0TU-LuJMYoDktn6ZqOBqjHJZEkQ391al1FLSnHLcdVTMcRrxw7lgiqwthka-4RwXQlnMqtFPC4dScID77-_I&_nc_zt=23&_nc_ht=scontent.fceb1-4.fna&_nc_gid=DrIqwGvyfpFPvZgjCdmQ6g&oh=00_AfGN4Ko6oECnZjtu9ZeLp27dlKL5d5SHatJD83i5C88mvA&oe=6802B111"
                alt="Client 1"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">Vherner Genoguin</p>
                <p className="text-sm text-slate-950">Web Developer</p>
              </div>
            </div>
            <p className="text-left max-w-md">
              “Goods!”
            </p>
          </div>

          <div className="text-white bg-sky-500 p-8 flex flex-col items-left rounded-lg shadow-lg h-full gap-6">
            <div className="flex flex-row items-left text-left gap-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Client 2"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">Carlos Santiago</p>
                <p className="text-sm text-slate-950">Product Manager, DevPro</p>
              </div>
            </div>
            <p className="text-left max-w-md">
              “Their UI/UX design transformed our app into something truly user-friendly and beautiful. Amazing work!”
            </p>
          </div>

          <div className="text-white bg-sky-500 p-8 flex flex-col items-left rounded-lg shadow-lg h-full gap-6">
            <div className="flex flex-row items-left text-left gap-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Client 3"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">Alyssa Tan</p>
                <p className="text-sm text-slate-950">Marketing Head, WebWave</p>
              </div>
            </div>
            <p className="text-left max-w-md">
              “Our new website loads fast, looks great, and has helped increase our online visibility by 200%!”
            </p>
          </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Homepage;
