import { useEffect, useRef } from 'react';
import Aurora from '../components/Aurora';

function Aboutme() {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const adjustImageHeight = () => {
      if (imageContainerRef.current && contentRef.current) {
        imageContainerRef.current.style.height = `${contentRef.current.offsetHeight}px`;
      }
    };

    adjustImageHeight(); // Set on mount
    window.addEventListener('resize', adjustImageHeight); // Update on resize

    return () => {
      window.removeEventListener('resize', adjustImageHeight);
    };
  }, []);

  return (
    <div className="relative bg-slate-950 About-me overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#046E5B", "#66A8FF", "#00457A"]}
          blend={0.5}
          amplitude={1}
          speed={1}
        />
      </div>

      {/* Main content above */}
      <div className="relative z-10 px-6 pb-5 pt-24">
        <div className="min-h-screen flex flex-row w-full gap-8 items-start">
          
          {/* Image */}
          <div className="w-1/3 relative" ref={imageContainerRef}>
            <img
              src="/JohnaMarkPersonalWebsite/assets/images/background-img.jpeg"
              alt="About Me"
              className="shadow-lg w-full h-full object-cover"
            />
            
            {/* Gradient overlay and name */}
            <div className="absolute bottom-0 left-0 w-full flex flex-col justify-end items-start h-1/3 p-6 bg-gradient-to-t from-black to-transparent">
              <div className='text-white w-full flex flex-row justify-between items-center text-1xl font-bold'>
                Age: <span className='text-gray-400 ml-2'>22</span>
              </div>
              <div className='text-white w-full flex flex-row justify-between items-center text-1xl font-bold'>
                Status: <span className='text-gray-400 ml-2'>Single</span>
              </div>
              <div className='text-white w-full flex flex-row justify-between items-center text-1xl font-bold'>
                Location: <span className='text-gray-400 ml-2'>Calbayog City, Samar</span>
              </div>           
            </div>
          </div>


          {/* Content */}
          <div className="w-full flex flex-col text-white" ref={contentRef}>
            <h1 className="text-6xl text-right font-bold mb-4">JOHN MARK</h1>
            <div className="w-full self-end h-0.5 bg-gray-200 mb-6" />

            <div className="flex flex-row">
              <div className="w-1/2">
                <div className="flex flex-col gap-3 mb-6">
                  <h1 className="text-2xl font-bold">About Me</h1>
                  <p>
                    I'm John Mark Aguilar, a website developer and graphic designer focused on creating clean, user-friendly interfaces for web and mobile. I specialize in wireframes, prototyping, and responsive design.
                    I'm also a mobile photographer using my Realme 5 Pro to capture portraits, landscapes, and candid moments. I aim to highlight light, emotion, and composition in every shot.
                    Combining tech skills with creativity, I deliver functional and visually impactful digital experiences.
                  </p>
                </div>

                <div className="flex flex-col gap-3 mb-6">
                  <h1 className="text-2xl font-bold">Skills</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>

                <div className="flex flex-col gap-3 mb-6">
                  <h1 className="text-2xl font-bold">Projects</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
              </div>

              <div className="w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
