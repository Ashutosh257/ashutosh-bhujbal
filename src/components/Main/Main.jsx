

import { About, Contact, Hero, Projects, Skills } from './Sections/index'

const Main = () => {
  return (
    <main className="text-slate-300">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  )
}

export default Main