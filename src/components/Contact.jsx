import GitHubLogo from '../assets/logo/GitHub.png'
import InstagramLogo from '../assets/logo/instagram.png'

const contactInfo = [
  {
    label: 'Email',
    value: 'yudhinata04@gmail.com',
    link: 'mailto:yudhinata04@gmail.com',
  },
  {
    label: 'Phone',
    value: '+62 8966 9760 121',
    link: 'tel:+6289669760121',
  },
  {
    label: 'Location',
    value: 'Denpasar, Bali, Indonesia',
    link: null,
  },
]

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
]

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-24 px-6">
      <div className="w-full max-w-4xl mx-auto">
        <div className="animate-on-scroll text-center mb-16">
          <p className="text-white font-medium text-sm mb-2 uppercase tracking-wider">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        <div className="animate-on-scroll grid sm:grid-cols-3 gap-4 mb-12" style={{ transitionDelay: '0.1s' }}>
          {contactInfo.map((info) => (
            <div
              key={info.label}
              className="rounded-xl p-6 text-center"
              style={{ backgroundColor: '#1E1E1E' }}
            >
              <p className="text-gray-400 text-sm mb-2">{info.label}</p>
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
          ))}
        </div>

        <div className="animate-on-scroll flex justify-center gap-8" style={{ transitionDelay: '0.2s' }}>
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
    </section>
  )
}

export default Contact
