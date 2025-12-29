import ProfilePhoto from '../assets/image/me.png'

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll">
          <p className="text-white font-medium text-sm mb-2 uppercase tracking-wider">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">A bit about myself</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <div 
              className="aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden"
              style={{ backgroundColor: '#1E1E1E' }}
            >
              <img 
                src={ProfilePhoto} 
                alt="Yudhi Adinata"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="animate-on-scroll space-y-6" style={{ transitionDelay: '0.2s' }}>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm an Information Technology student at <span className="text-white font-semibold">Udayana University</span>, Bali 
                with a GPA of 3.77/4.00. I'm passionate about building modern, user-centered web applications 
                that solve real problems.
              </p>
              <p>
                With hands-on experience in React.js, Node.js, and various databases, I enjoy turning 
                complex challenges into simple, elegant solutions. I believe in clean code and exceptional user experience.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-xl p-5" style={{ backgroundColor: '#1E1E1E' }}>
                <p className="text-gray-400 text-sm mb-1">Location</p>
                <p className="text-white font-semibold">Denpasar, Bali</p>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: '#1E1E1E' }}>
                <p className="text-gray-400 text-sm mb-1">Education</p>
                <p className="text-white font-semibold">Udayana University</p>
                <p className="text-gray-400 text-sm">GPA 3.77</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
