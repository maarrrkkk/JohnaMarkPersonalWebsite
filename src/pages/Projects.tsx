function Projects() {
    return (
        <div className="Projects bg-slate-950 h-content pt-20 place-content-center">
            <div className="container mx-auto p-4 flex flex-col gap-5 items-center justify-center">
                <h1 className="text-sky-300 text-4xl mb-4 font-bold">PROJECTS</h1>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-slate-800 shadow-lg rounded-2xl p-4 md:p-6">
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <img 
                            src="https://via.placeholder.com/600x400" 
                            alt="Thesis Preview" 
                            className="w-full h-auto rounded-xl object-cover"
                        />
                    </div>

                        {/* Details */}
                    <div className="w-full md:w-1/2 flex flex-col gap-3">
                        <h2 className="text-2xl font-bold text-sky-300">Project Title Goes Here</h2>
                        <p className="text-sm text-gray-600">By John Mark | April 2025</p>
                        <p className="text-gray-700">
                            This section includes a short abstract or description of the thesis. You can highlight the purpose, scope, and findings of the research in a concise paragraph here.
                        </p>
                        <div className="mt-4">
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-slate-800 shadow-lg rounded-2xl p-4 md:p-6">
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <img 
                            src="https://via.placeholder.com/600x400" 
                            alt="Thesis Preview" 
                            className="w-full h-auto rounded-xl object-cover"
                        />
                    </div>

                        {/* Details */}
                    <div className="w-full md:w-1/2 flex flex-col gap-3">
                        <h2 className="text-2xl font-bold text-sky-300">Project Title Goes Here</h2>
                        <p className="text-sm text-gray-600">By John Mark | April 2025</p>
                        <p className="text-gray-700">
                            This section includes a short abstract or description of the thesis. You can highlight the purpose, scope, and findings of the research in a concise paragraph here.
                        </p>
                        <div className="mt-4">
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-slate-800 shadow-lg rounded-2xl p-4 md:p-6">
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <img 
                            src="https://via.placeholder.com/600x400" 
                            alt="Thesis Preview" 
                            className="w-full h-auto rounded-xl object-cover"
                        />
                    </div>

                        {/* Details */}
                    <div className="w-full md:w-1/2 flex flex-col gap-3">
                        <h2 className="text-2xl font-bold text-sky-300">Project Title Goes Here</h2>
                        <p className="text-sm text-gray-600">By John Mark | April 2025</p>
                        <p className="text-gray-700">
                            This section includes a short abstract or description of the thesis. You can highlight the purpose, scope, and findings of the research in a concise paragraph here.
                        </p>
                        <div className="mt-4">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Projects;