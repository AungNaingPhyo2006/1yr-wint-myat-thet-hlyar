const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="border-t py-6">
        <h6 className="text-sm text-gray-400 text-center">All right serves -  {currentYear} Aung Naing Phyo</h6>
      </footer>
    </>
  );
}

export default Footer;