
import SectionHeader from "./SectionHeader"

const Skills = () => {
  
  const skills = [ 
    "Python", "AWS", "Django", "Flask", 
    "JavaScript", "React.js", 
    "PostgreSQL", "MongoDB", "REST APIs",
    "SQL", "C++", "Git", "GitHub",
    "HTML", "CSS", "Terrafom", "Docker"
  ]
  
  return (
    <section className="lg:py-20 sm:py-8">
      <SectionHeader title="Skills" />

      <div className="text-center p-8 text-slate-300 text-lg font-light">
        <p className="mb-8">
          I have experience working with the following technologies:
        </p>

        <div className="flex flex-wrap justify-center gap-4 lg:mb-16 lg:mx-32 sm:mx-8 mb-16">
          {skills.map(skill => (
            <div 
              key={skill} 
              className=" flex items-center justify-center
              border rounded-lg shadow-md px-4 py-2" 
            > 
              <h3 className="text-xl font-medium text-yellow-300">
                {skill}
              </h3>
            </div>
          ))}
        </div>


        <p className="mb-16">
          I am always looking to learn new technologies and improve my skills.
        </p>
      </div>

    </section>
  )
}

export default Skills