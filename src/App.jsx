import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {


  return (
    <div className='bg-[#171132] h-auto w-full overflow-hidden'>
     <Header></Header>
     <Home/>
     <About/>
     <Projects/>
     <Footer/>

    </div>
  )
}

export default App
