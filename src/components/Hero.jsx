import HeroBg from '../assets/image/hero-section.webp'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 relative"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(18, 18, 18, 0.85)' }}
      ></div>
      
      <div className="w-full max-w-3xl mx-auto text-center animate-on-scroll relative z-10">
        <p className="text-white font-medium mb-4 text-lg">Hello, I'm</p>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          Yudhi Adinata
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
          Fullstack Developer
        </p>

        <p className="text-lg text-gray-400 mb-10 leading-relaxed">
          Based in Bali, Indonesia. I craft modern web applications with React.js and Node.js, 
          turning complex problems into elegant digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 bg-white text-black rounded-lg font-semibold transition-colors text-lg hover:bg-gray-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 border border-gray-600 hover:border-white text-white rounded-lg font-semibold transition-all text-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
