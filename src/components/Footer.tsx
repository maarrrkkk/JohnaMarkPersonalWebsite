import { Copy } from "lucide-react";

function Footer() {
  return (
    <div id="footer-contact" className="Footer bg-gray-900 text-white">
      <div className="bg-gray-900">
        <div className="p-10 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-bold mb-4">
            Do you have Project Idea?
          </h1>
          <p className="text-white mb-6 text-center max-w-xl">
            I'm a developer, so I know how to create your website to run across
            devices using the latest technologies available.
          </p>

          <div className="flex items-center gap-2">
            <a
                href="mailto:johnmarkaguilar405@gmail.com"
                className="text-purple-400 font-semibold text-lg hover:underline"
            >
                johnmarkaguilar405@gmail.com
            </a>
            <button
                onClick={() => navigator.clipboard.writeText("johnmarkaguilar405@gmail.com")}
                className="text-gray-400 hover:text-purple-400"
            >
                <Copy className="w-5 h-5" />
            </button>
            </div>
        </div>
      </div>
      <footer className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h2 className="text-xl font-semibold mb-2">John Mark Aguilar</h2>
          <p className="text-gray-400">
            This website is built using react typscript and tailwind.
          </p>
        </div>
        <div>
          <h3 className="font-medium mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-2">Contact me</h3>
          <div className="flex space-x-4 mt-2 text-xl">
            <a
              href="https://www.facebook.com/johnmark.aguilar.940"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.t.me/mmaarrrk"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-telegram"></i>
            </a>
            <a
              href="https://www.instagram.com/maarrk_06/"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://wa.me/9928239215"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            {/*                         <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-telegram"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-whatsapp"></i></a> */}
          </div>
        </div>
      </footer>
      <div className="text-center text-gray-500 py-4 border-t border-gray-700 text-xs">
        &copy; 2025 John Mark Aguilar. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
