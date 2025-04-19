function Thesis() {
  return (
    <div className="Thesis bg-slate-950">
        <div className="mx-auto">
            <div className="relative h-screen bg-[url('/JohnaMarkPersonalWebsite/assets/images/thesis.jpeg')] bg-fixed bg-cover bg-center">
                {/* Overlays */}
                {/* <div className="absolute inset-0 bg-black opacity-40 z-0"></div> */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617] opacity-100 z-10"></div>

                {/* Text Content */}
                <div className="relative z-20 h-full flex items-center">
                <div className="w-full md:w-1/2 px-6 md:px-16 text-left">
                    <h1 className="text-sky-300 text-3xl md:text-7xl font-bold leading-tight">
                    NwSSU Library Noise Detector
                    </h1>
                    <p className="mt-4 text-white text-base md:text-lg">
                    A real-time monitoring system designed to help reduce noise levels and promote a better learning environment in the NwSSU library.
                    </p>
                </div>
                </div>
            </div>
        </div>

        <div className="mx-auto flex flex-col md:flex-row-reverse items-center md:items-start">
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <img 
                    className="w-full rounded-md h-100 md:w-full md:h-auto object-cover"
                    src="/JohnaMarkPersonalWebsite/assets/images/noise-detector-1.jpg" 
                    alt="Thesis Preview" 
                />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 p-6 text-center self-center md:text-left">
                <h1 className="text-sky-300 text-3xl md:text-5xl font-bold leading-snug">
                    Container Box
                </h1>
                <p className="mt-2 text-gray-400 text-base">
                    Unfortunatly, the container box is not realy a container box made for Library Noise Detector. We just use electrict box container to to successfully implement the noise detector.
                </p>
            </div>
        </div>
        <div className="mx-auto flex flex-col md:flex-row items-center md:items-start">
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <img 
                    className="w-full rounded-md h-100 md:w-full md:h-auto object-cover"
                    src="/JohnaMarkPersonalWebsite/assets/images/noise-detector-2.jpg" 
                    alt="Thesis Preview" 
                />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 p-6 text-center self-center md:text-left">
                <h1 className="text-sky-300 text-3xl md:text-5xl font-bold leading-snug">
                    Indicator LED & Electret Microphone
                </h1>
                <p className="mt-2 text-gray-400 text-base">
                The Library Noise Detector features an advanced noise detection device that uses a combination of electret microphone as a sound sensor and LED lights to indicate real-time noise levels. The noise levels in the Library Noise Detector are measured in arbitrary units (AU) which is based on the voltage output from the microphone. 
                <br />
                We manipulate the electret microphone to be able to detect the noise level in the library. Without using the Db converter, we use the indicator LED to show the noise level.                 
                </p>
            </div>
        </div>
        <div className="mx-auto flex flex-col md:flex-row-reverse items-center md:items-start">
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <img 
                    className="w-full rounded-md h-100 md:w-full md:h-auto object-cover"
                    src="/JohnaMarkPersonalWebsite/assets/images/noise-detector-3.jpg" 
                    alt="Thesis Preview" 
                />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 p-6 text-center self-center md:text-left">
                <h1 className="text-sky-300 text-3xl md:text-5xl font-bold leading-snug">
                    System Architecture Sample
                </h1>
                <p className="mt-2 text-gray-400 text-base">
                The System connects to noise detection hardware through a USB Hub, which acts as a bridge between the computer and multiple noise detection units (D1, D2, D3, and D4) strategically positioned at library tables. Each unit is consist of a Noise Detector that continuously captures background noise levels and sends the data to the system in real time                </p>
            </div>
        </div>
        <div className="mx-auto container p-10 flex items-center justify-center min-h-[200px]">
            <p className="text-sky-300 text-center leading-snug italic">
                The Library Noise Detector book is available to see inside the Northwest Samar State University Library or in the CCIS Department.
            </p>
        </div>




    </div>

  );
}
export default Thesis;
