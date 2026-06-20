import './App.css'
import { Nav }      from './components/Nav/Nav'
import { Hero }     from './components/Hero/Hero'
import { About }      from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects }   from './components/Projects/Projects'
import { Skills }   from './components/Skills/Skills'
import { Contact }  from './components/Contact/Contact'
import { Footer }   from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
