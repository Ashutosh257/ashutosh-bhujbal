
import SectionHeader from "./SectionHeader"

const About = () => {
  return (
    <section className="py-20 sm:py-8">
      <SectionHeader title="About Me" />
      <div className="text-center p-8 text-slate-300 text-lg font-light mb-6 w-8/12 mx-auto">
          I am a full-stack web developer with a passion for creating beautiful and functional user experiences. 
          I have a strong foundation in web development and am proficient in both front-end and back-end technologies.
          <br />
          <span className="text-yellow-400">
            I am a quick learner and am always looking for opportunities to expand my skill set.
          </span>

      </div>

    </section>
    
  )
}

export default About