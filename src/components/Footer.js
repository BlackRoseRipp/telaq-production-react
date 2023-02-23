const Footer = () => {
  return (
    <footer className="bg-[#111320]">
      <div className="container mx-auto py-12 px-3">
        <div className="grid lg:grid-cols-4">
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-bold text-white mb-2">Menu</h3>
            <ul className="mb-4">
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  Urgent Care
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  Primary Care
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  Mental Health
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  Pediatrics
                </a>
              </li>
            </ul>
          </div>
          <div></div>
          <div></div>
          <div className="flex flex-col items-start justify-evenly">
            <img
              className="w-[200px] mb-2"
              src="img/telaq-logo-white.png"
              alt="telaq logo white letters"
            />
            <p className="text-footer-muted mb-4">
              Sem eleifend donec molestie, integer quisque orci aliquam.
            </p>
          </div>
        </div>
        <hr className="h-px bg-footer-muted border-0 my-4" />
        <p className="text-footer-muted pt-4">
          Copyright &copy; {new Date().getFullYear()} TelaQ
        </p>
      </div>
    </footer>
  );
};

export default Footer;
