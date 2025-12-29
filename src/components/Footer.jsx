const Footer = () => {
  return (
    <footer
      className="py-8 px-6"
      style={{ backgroundColor: '#121212' }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Gede Yudhi Adinata. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
