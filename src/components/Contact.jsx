import GitHubLogo from '../assets/logo/GitHub.png';
import InstagramLogo from '../assets/logo/instagram.png';

const socialLinks = [
  { 
    name: 'GitHub', 
    username: '@yudnata',
    link: 'https://github.com/yudnata', 
    logo: GitHubLogo 
  },
  { 
    name: 'LinkedIn', 
    username: 'yudnata',
    link: 'https://linkedin.com/in/yudnata', 
    logo: null 
  },
  { 
    name: 'Instagram', 
    username: '@yudnata',
    link: 'https://instagram.com/yudnata', 
    logo: InstagramLogo 
  },
];

const contactInfo = [
  {
    label: 'Email',
    value: 'yudhinata04@gmail.com',
    link: 'mailto:yudhinata04@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+62 8966 9760 121',
    link: 'tel:+6289669760121',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Denpasar, Bali',
    link: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll">
            <p className="text-white font-medium text-sm mb-2 uppercase tracking-wider">Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-gray-300 text-lg mb-8">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 transition-all hover:scale-110"
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: '#1E1E1E' }}
                  >
                    {social.logo ? (
                      <img 
                        src={social.logo} 
                        alt={social.name}
                        className="w-7 h-7 object-contain"
                      />
                    ) : (
                      <span className="text-white text-xl font-bold">in</span>
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-white">{social.name}</p>
                    <p className="text-xs text-gray-400">{social.username}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll space-y-2" style={{ transitionDelay: '0.1s' }}>
            {contactInfo.map((info) => (
              <div 
                key={info.label} 
                className="rounded-xl p-5 flex items-start gap-4"
                style={{ backgroundColor: '#1E1E1E' }}
              >
                <div className="text-white mt-0.5">{info.icon}</div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-white font-medium transition-colors hover:text-gray-300"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
