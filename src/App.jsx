import { BrowserRouter } from "react-router-dom";

import {Profile, Intrest, Experience, Education, Hero, Navbar, Project, Content, Footer } from "./components";

const App = () => {

  return (
    <div>
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Content />
        <Project />
        <Education />
        <Experience />
        <Profile/>
        <Intrest />
        <Footer/>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
