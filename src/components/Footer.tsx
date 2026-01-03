const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-6"
      style={{ backgroundColor: '#121212' }}
      role="contentinfo"
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gray-100 text-sm border-t border-gray-300/60 pt-10">
          © {currentYear} Gede Yudhi Adinata. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
