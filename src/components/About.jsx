import ProfilePhoto from '../assets/image/me.png';

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
                I'm an Information Technology student at{' '}
                <span className="text-white font-semibold">Udayana University</span>, Bali with a current
                GPA of 3.77. I'm passionate about building modern, user-centered web
                applications that solve real problems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-xl p-5" style={{ backgroundColor: '#1E1E1E' }}>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-400 text-sm">Location</p>
                </div>
                <p className="text-white font-semibold">Denpasar, Bali</p>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: '#1E1E1E' }}>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  <p className="text-gray-400 text-sm">Education</p>
                </div>
                <p className="text-white font-semibold">Udayana University</p>
                <p className="text-gray-400 text-sm">Current GPA 3.77</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="/CV-yudnata.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold transition-colors hover:bg-gray-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
              <div className="ml-3 w-48 h-[1px] bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
