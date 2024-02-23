
import SectionHeader from "./SectionHeader"

const Contact = () => {
  return (
    <section className="lg:py-20 sm:py-8">
        
        <SectionHeader title="Contact" />

        <div className="text-center p-8 text-slate-300 text-lg font-light mb-6">
          <p className="mb-3">
            Please reach out if you have any questions!
          </p>
          <p className="mb-16">
            Send me an email at 
            &nbsp;
            <a href="mailto:bhujbalashutosh97@gmail.com" className="text-yellow-300 underline">
              bhujbalashutosh97@gmail.com
            </a>
            &nbsp;
            
             or call me directly at 
            
            <span className="text-yellow-300">
              {" 07767939388. "}
            </span>
            
          </p>
          <p>
            I'm looking forward to hearing from you!
          </p>
        </div>
    </section>
  )
}

export default Contact