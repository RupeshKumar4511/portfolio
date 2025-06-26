import image from '../assets/developer.png';
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="about"
      className="bg-black bg-opacity-30 shadow-xl mx-4 md:mx-20 rounded-lg p-8 md:p-12 text-white"
    >
      
      <h2 className="text-3xl md:text-4xl font-bold mb-10">About Me</h2>

      
      <div className="flex flex-col md:flex-row items-start gap-10">
        
        
        <div className="flex-shrink-0">
          <img
            src={image}
            alt="Developer"
            className="h-60 md:h-80 w-auto rounded-lg shadow-lg"
          />
        </div>

        
        <div className="w-full md:w-2/3 space-y-6">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            I'm a <span className="font-semibold text-white">Full Stack Web Developer</span> with a passion for building scalable, efficient, and user-friendly applications. With experience in both frontend and backend development, I focus on writing clean code and deploying robust, production-ready software.
          </p>

          
          <ul className="space-y-6">
            {/* Frontend */}
            <li className="flex gap-4 items-start">
              <IoArrowForward size={24} className="mt-1 text-blue-400" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Frontend</h3>
                <p className="text-gray-400">HTML, CSS, JavaScript, React, Tailwind CSS</p>
              </div>
            </li>

            
            <li className="flex gap-4 items-start">
              <IoArrowForward size={24} className="mt-1 text-orange-400" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Backend</h3>
                <p className="text-gray-400">Node.js, Express</p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <IoArrowForward size={24} className="mt-1 text-green-400" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Databases</h3>
                <p className="text-gray-400">MongoDB, Mysql</p>
              </div>
            </li>

            
            <li className="flex gap-4 items-start">
              <IoArrowForward size={24} className="mt-1 text-yellow-400" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">DevOps & Tools</h3>
                <p className="text-gray-400">Git, GitHub Actions, Docker, AWS Lambda</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
