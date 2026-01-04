import { Helmet } from 'react-helmet-async';
import { SEOProps } from '../types';

const defaultSEO = {
  title: 'Yudhi Nata — Fullstack Developer | Bali, Indonesia',
  description:
    'Portfolio of Yudhi Nata, a fullstack developer based in Bali, Indonesia specializing in modern web applications using React and Node.js.',
  keywords:
    'Yudhi Nata, fullstack developer, web developer Bali, React developer, Node.js, UI UX, Indonesia, portfolio',
  image: 'https://portofolio-yudnata.vercel.app/preview.png',
  url: 'https://portofolio-yudnata.vercel.app/',
  type: 'website',
};

const SEO: React.FC<SEOProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = defaultSEO.type,
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gede Yudhi Adinata Putra Kurniawan',
    alternateName: 'Yudhi Nata',
    url: url,
    image: image,
    jobTitle: 'Fullstack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Denpasar',
      addressRegion: 'Bali',
      addressCountry: 'Indonesia',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Udayana University',
    },
    sameAs: [
      'https://github.com/yudnata',
      'https://linkedin.com/in/yudnata',
      'https://instagram.com/yudnata',
    ],
    knowsAbout: [
      'Web Development',
      'React',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'UI/UX Design',
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Gede Yudhi Adinata Putra Kurniawan" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="yudnata" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
