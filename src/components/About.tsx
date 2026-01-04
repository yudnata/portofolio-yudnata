import ProfilePhoto from '../assets/image/me.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6" aria-labelledby="about-heading">
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll">
          <p className="text-white font-medium text-sm mb-2 uppercase tracking-wider">About Me</p>
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-12 text-white">
            A bit about myself
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <figure className="animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <div
              className="aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden"
              style={{ backgroundColor: '#1E1E1E' }}
            >
              <img
                src={ProfilePhoto}
                alt="Yudhi Adinata - Fullstack Developer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="sr-only">Profile photo of Yudhi Adinata</figcaption>
          </figure>

          <article className="animate-on-scroll space-y-6" style={{ transitionDelay: '0.2s' }}>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Hi my name is <strong className="text-white font-semibold">Gede Yudhi Adinata Putra Kurniawan</strong>.
                I'm an Information Technology student at{' '}
                <strong className="text-white font-semibold">Udayana University</strong>, Bali with a current
                GPA of 3.77. I'm passionate about building modern, user-centered web
                applications that solve real problems.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-xl p-5" style={{ backgroundColor: '#1E1E1E' }}>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <dt className="text-gray-400 text-sm">Location</dt>
                </div>
                <dd className="text-white font-semibold">Denpasar, Bali</dd>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: '#1E1E1E' }}>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  <dt className="text-gray-400 text-sm">Education</dt>
                </div>
                <dd className="text-white font-semibold">Udayana University</dd>
                <dd className="text-gray-400 text-sm">Current GPA 3.77</dd>
              </div>
            </dl>

            <div className="flex items-center gap-4">
              <a
                href="/CV-yudnata.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold transition-colors hover:bg-gray-200"
                aria-label="Download CV of Yudhi Adinata"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
              <div className="ml-3 w-24 h-[1px] bg-white" aria-hidden="true" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
