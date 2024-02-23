

import { useEffect, useState } from "react"

import face from "../../assets/face.png"
import git from '../../assets/Github.svg'
import linkedin from '../../assets/LinkedIn.svg'
import ham from '../../assets/ham.svg'
import close from '../../assets/close.svg'


const Header = () => {

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const navItems = [
    "Projects", 
    "Skills", 
    "About Me", 
    "Contact"
]

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    const headerHeight = document.querySelector('header').offsetHeight
    const offset = element.offsetTop - headerHeight

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    })
  }

const navLinks = navItems.map((item, index) => {
    return (
      <li className="nav-item" key={index}>
        <a
          className="lg:text-xl md:text-base text-slate-200 hover:text-yellow-300 hover:underline" 
          href={`#${item.toLowerCase()}`}
          onClick={(e) => scrollToSection(e, item.toLowerCase())}
        >
          {item}
        </a>
      </li>
    )
  })

  const socials = (
    <div className="flex flex-col gap-4 items-center">
      <a 
                  href="https://www.linkedin.com/in/ashutosh-bhujbal/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-2xl mr-4"
                  >
                  <img src={linkedin} alt="LinkedIn" className="w-6" />
                </a>

              <a 
                href="https://github.com/Ashutosh257"
                target="_blank"
                rel="noreferrer"
                className="text-2xl mr-4"
              >
                <img src={git} alt="Github" className="w-6" />
              </a>
    </div>
  )

  const [isOpen, setIsOpen] = useState(false)


  
  useEffect(() => {
    window.addEventListener('resize', () => {
        setScreenSize(window.innerWidth)
      })
  }, [screenSize])
 

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 bg-stone-900 border-b border-slate-500"
    >
      <nav className="flex justify-around items-center p-3">
        <div className="flex items-center gap-6">
          <img 
          src={face} 
          alt="developer's personal photo" 
          className="face-img rounded-full border-2 border-slate-300 object-cover" 
          />
          <a href="/" className="font-mono lg:text-4xl text-2xl sm:text-2xl font-medium text-slate-200 hover:text-yellow-300">
            {"<Ashutosh/>"}
          </a>
        </div>

        {
          screenSize > 768 &&  (<div className="flex">

                <a 
                  href="https://www.linkedin.com/in/ashutosh-bhujbal/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-2xl mr-4"
                  >
                  <img src={linkedin} alt="LinkedIn" className="w-6" />
                </a>

              <a 
                href="https://github.com/Ashutosh257"
                target="_blank"
                rel="noreferrer"
                className="text-2xl mr-4"
              >
                <img src={git} alt="Github" className="w-6" />
              </a>

          </div>)
        }
        

        {
          screenSize > 768 ? (
              <ul className="flex flex-row lg:gap-x-16 md:gap-x-8">
                {navLinks}
              </ul>
          ) : (
          <div className="flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                  {
                    !isOpen ? 
                    <img src={ham} alt="menu" className="w-8" /> 
                    :  (
                      <>
                        <img src={close} alt="menu" className="w-6" />
                        <div className="">
                          <ul className="flex flex-col gap-y-4 bg-stone-800 px-12 py-6 rounded-xl absolute z-50 top-12 right-20">
                            {socials}
                            {navLinks}
                          </ul>
                        </div>
                      </>
                    )
                  }
          </div>
        )


      }   

       
      </nav>
    </header>
  )
}

export default Header