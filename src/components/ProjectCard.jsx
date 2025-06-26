const ProjectCard = ({ title, main, image, demo, sourceCode }) => {
  return (
    <div className='p-3 md:p-6 flex flex-col w-full md:w-80 bg-[rgb(12,14,25)] shadow-xl shadow-slate-900 rounded-2xl'>
      <img
        src={image}
        alt="project-image"
        className="w-full h-50 md:h-50 shadow-lg"
      />
      <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>{title}</h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-1 p-2 md:p-4 flex gap-2 md:gap-4">
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Demo</button>
        </a>
        <a href={sourceCode} target="_blank" rel="noopener noreferrer">
          <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Source Code</button>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
