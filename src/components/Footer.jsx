import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#465697] text-white px-6 md:px-20 py-10 md:py-14"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Contact
          </h1>
          <p className="text-sm md:text-lg text-white/90">
            Feel Free to reach out!
          </p>
        </div>

        <ul className="space-y-4 text-sm md:text-lg">
          <li className="flex items-center gap-3 hover:text-gray-200 transition-colors">
            <MdOutlineEmail size={22} />
            <a
              href="mailto:rupesh.kumar.rcdu7047@gmail.com"
              className="hover:underline break-all"
            >
              rupesh.kumar.rcdu7047@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-3 hover:text-gray-200 transition-colors">
            <CiLinkedin size={22} />
            <a
              href="https://www.linkedin.com/in/rupesh-kumar-7349392a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/RupeshKumar
            </a>
          </li>

          <li className="flex items-center gap-3 hover:text-gray-200 transition-colors">
            <FaGithub size={22} />
            <a
              href="https://github.com/RupeshKumar4511"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/RupeshKumar4511
            </a>
          </li>
        </ul>
      </div>


      <div className="mt-10 text-center text-xs text-white/60">
        &copy; {new Date().getFullYear()} Rupesh Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
