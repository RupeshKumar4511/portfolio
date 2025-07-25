import ProjectCard from "./ProjectCard"
import image from '../assets/thoughtcircle.jpg';
import image2 from '../assets/countries.jpg';
import image3 from '../assets/expense-tracker.jpg';
import image4 from '../assets/techupdate.jpg';
import image5 from '../assets/todosapp.jpg';


const Projects = () => {
  return (
    <div id="projects" className='p-6 md:py-24 md:px-4 lg:px-20 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-4 md:px-8 flex flex-wrap gap-5'>
        <ProjectCard title={"ThoughtCircle"} main={"This is a social web application built using React, Tailwind, Express and MongoDB where users can post his ideas and thoughts and it also contains some other features."} 
        image = {image} demo={"https://thoughtcircle-frontend.onrender.com"}
        sourceCode={"https://github.com/RupeshKumar4511/ThoughtCircle"}/>

        <ProjectCard title={"REST Countries"} main={"A web app that integrates with the REST Countries API to fetch and display detailed information about countries, such as their name, capital, region, population, and flag."} 
        image = {image2} 
        demo={"https://rupesh-restcountries.netlify.app/"}
        sourceCode={"https://github.com/RupeshKumar4511/countries-react"}/>

        <ProjectCard title={"Expense Tracker"} main={"A React web application that allows users to manage their expenses with full CRUD functionality and sorting features"} 
        image = {image3} demo={"https://expense-tracker-rupesh.netlify.app/"}
        sourceCode={"https://github.com/RupeshKumar4511/expense-tracker"}/>

        <ProjectCard title={"Technology Update"} main={"This is a dynamic web application designed to provide real-time updates on the latest technologies. Built using HTML, CSS, JS."} 
        image = {image4} 
        demo={"https://technology-update.netlify.app/"}
        sourceCode={"https://github.com/RupeshKumar4511/TechUpdate"}/>

        <ProjectCard title={"MyTodosList"} main={"TodoList is a React web application that allows users to add, delete tasks which is completed."} 
        image = {image5} 
        demo={"https://expense-tracker-rupesh.netlify.app/"}
        sourceCode={"https://github.com/RupeshKumar4511/expense-tracker"}/>

       

      </div>
    </div>
  )
}

export default Projects
