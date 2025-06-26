import image from '../assets/image.jpg';

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center md:items-start p-10 md:p-20">
      
      <div className="w-full md:w-2/4 text-center md:text-left mt-10 md:mt-0">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          Hello, I'm Rupesh
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-4">
          A Full Stack Web Developer
        </p>
        <a href="#contact"><button className="mt-6 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button></a>
      </div>

     
      <div className="w-full md:w-2/5 flex justify-center items-center">
        <img
          src={image}
          alt="Profile"
          className="w-48 md:w-80 aspect-square object-cover rounded-full shadow-lg transition-transform duration-500 hover:scale-105 border-4 border-cyan-300"
        />
      </div>
    </div>
  );
};

export default Home;
