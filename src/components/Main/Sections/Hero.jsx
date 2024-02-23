

import ash from "../../../assets/ash.jpg"


const Hero = () => {
  return (
    <section 
      className="
      h-full relative flex flex-col justify-around items-center 
      lg:flex-row lg:flex-1 lg:justify-around lg:items-center 
      lg:py-12 lg:px-12
      md:flex-col md:items-center 
      md:py-12 md:px-4
      sm:flex-col sm:items-center 
      sm:py-24 sm:px-4
      py-16 px-4"
    >
        
        <div className="order-2 sm:order-1">
          <img 
            className="w-96 h-96 border-4 rounded-2xl border-slate-300 object-cover mx-auto mt-20"
            src={ash} 
            alt="Ashutosh Bhujbal" 
          />
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-5xl font-bold text-center mt-20">
            Hey, I'm Ashutosh Bhujbal
          </h3>
          <p className="text-2xl text-slate-400 text-center mt-5 w-10/12">
            I'm a Full stack developer / Software Engineer based in London, UK. 
            <br />
            My specialities are 
              <span className="text-yellow-500 hover:underline">
                {" Python and AWS"}
              </span>
            , and I love building apps that are delightful to use.
          </p>
        </div>
      </section>
  )
}

export default Hero