
import insta from '../../assets/Instagram.svg'
import git from '../../assets/Github.svg'
import linkedin from '../../assets/LinkedIn.svg'

const Footer = () => {
  return (
    
    <footer className="text-white h-1/2">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-lg font-mono ml-2"> Built & designed by: Ashutosh Bhujbal</h1>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/ashutosh-bhujbal/" target="_blank" rel="noreferrer" className="text-2xl mr-4">
              <img src={linkedin} alt="LinkedIn" className="w-6" />
            </a>
            <a href="https://github.com/Ashutosh257" target="_blank" rel="noreferrer" className="text-2xl mr-4">
              <img src={git} alt="Github" className="w-6" />
            </a>
            
            <a href="" target="_blank" rel="noreferrer" className="text-2xl mr-4">
              <img src={insta} alt="Instagram" className="w-6" />
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer