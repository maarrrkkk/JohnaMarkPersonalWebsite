import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "../components/Button";
import Particles from "../components/Particles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Homepage() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true });

  return (
    <div className="Home-page">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-screen bg-[url('../../public/assets/images/background-img.jpeg')] bg-fixed bg-cover bg-center text-white px-6 flex items-center justify-center relative"
      >
          <div className="max-w-3xl text-center p-6 rounded-lg relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}  // Start with hidden opacity and slide down
              animate={{ opacity: 1, y: 0 }}    // Fade in and slide up to final position
              transition={{ duration: 1 }}      // Adjust the duration as needed
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Hello I am John Mark Aguilar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}  // Start with hidden opacity and slide down
              animate={{ opacity: 1, y: 0 }}    // Fade in and slide up to final position
              transition={{ duration: 1.2 }}    // Slightly delayed animation for p
              className="text-lg md:text-xl mb-8"
            >
              I am a Website developer, graphic designer.
            </motion.p>
            <Button>Learn More</Button>
          </div>

        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Particles />
        </div>
      </motion.div>

      <div className="w-full px-6 py-8 bg-gray-100 rounded-lg">
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
              <p className="mt-2 text-gray-700 font-medium">{skill.name}</p>
            </div>
          ))}
          <div className="flex flex-col items-center min-w-[80px]">
            <img
              src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png"
              alt="Tailwind CSS"
              className="w-15 h-10"
            />
            <p className="mt-2 text-gray-700 font-medium">Tailwind</p>
          </div>
        </div>
      </div>

      <div className="hero container mx-auto text-center py-12 px-4 md:px-6">
        <div className="flex flex-col-reverse gap-10 md:flex-row items-center md:space-y-0">
          <div className="text-center md:text-start max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-sky-950">
              John Mark Aguilar
            </h1>
            <p className="text-xl text-gray-600 mb-4 font-bold">
              UI/UX Designer and Web Developer
            </p>
            <p className="text-md text-gray-700 mb-6">
              Passionate about creating user-centric digital experiences with clean and intuitive interfaces. I specialize in wireframes, prototyping, and responsive design for mobile and web platforms.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-sky-950 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition duration-200">
                View Portfolio
              </button>
              <button className="border border-sky-950 text-sky-950 px-6 py-2 rounded-md hover:bg-blue-100 transition duration-200">
                Contact Me
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <img
              src="../../public/assets/images/JOHN MARK_20230820_131206_0000.jpg"
              alt="John Mark Aguilar"
              className="w-48 h-48 md:w-full md:h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative overflow-hidden rounded-lg shadow group">
            <img
              src="../../public/assets/images/thesis.jpeg"
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
            <h1 className="text-6xl font-bold mb-10 text-sky-950">Capstone</h1>
            <h2 className="text-3xl font-bold text-sky-950 mb-4">
              NwSSU Library Noise Detector
            </h2>
            <p className="text-sky-950 mb-4">
              The <span className="font-medium">Library Noise Detector System</span> is an Arduino-based solution designed to maintain a quiet and productive study environment. It enables real-time noise monitoring and provides staff controls through a desktop interface.
            </p>
            <p className="text-sky-950">
              Built using modern technologies like PyQt5 and serial communication, this system is focused on practical implementation and real-world application in school libraries.
            </p>
            <div className="mt-6 justify-items-center">
              <a
                href="#"
                className="border border-sky-950 text-sky-950 px-6 py-2 rounded-md hover:bg-blue-100 transition duration-200"
              >
                View Full Thesis
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h4 className="text-3xl font-bold text-sky-950 mb-4">A Little Bit About Me</h4>
            <p className="text-gray-700 leading-relaxed">
            I'm John Mark Aguilar, a passionate photographer who finds joy in capturing moments that tell a story. Using my Realme 5 Pro smartphone, I bring out the beauty in both landscapes and portraits through a mobile lens. I explore light, emotion, and composition to create visually striking and meaningful imagery. Whether it’s portraits, sweeping landscapes, or candid shots, I aim to preserve the essence of every scene I encounter.
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col md:flex-col text-center gap-4">
          <div className=" flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full md:w-1/2">
              <motion.div
                ref={aboutRef}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 2 }}
              >
                <img
                  src="../../public/assets/images/photo1.jpg"
                  alt="John Mark Working"
                  className="rounded-lg shadow-lg object-cover w-full h-80 transition-transform duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                />
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <motion.div
                  ref={aboutRef}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1 }}
                >
                <img
                  alt="Creative Work"
                  className="rounded-lg shadow-lg object-cover w-full h-64 transition-transform duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                  src="../../public/assets/images/photo2.jpeg"
                />
                </motion.div>
                <motion.div
                  ref={aboutRef}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 3 }}
                >
                <img
                  alt="Project Presentation"
                  className="rounded-lg shadow-lg object-cover w-full h-64 transition-transform duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                  src="../../public/assets/images/photo3.jpg"
                />
                </motion.div>
              </div>
            </div>
            <motion.div
                  ref={aboutRef}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 4 }}
                >
            <div className="flex flex-row justify-center gap-4">
              <p className="content-center text-gray-700">Check me out on</p>
            <a
              href="https://www.instagram.com/johnmark_aguilar/"
              className="text-3xl text-sky-950 hover:text-blue-700 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a> 
            <a
              href="https://www.instagram.com/johnmark_aguilar/"
              className="text-3xl text-sky-950 hover:text-blue-700 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a> 
            </div>       
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
