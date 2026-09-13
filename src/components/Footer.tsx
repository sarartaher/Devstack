import Logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-100 text-base-content container mx-auto py-15">
        <aside className=" max-sm:flex-col max-sm:justify-items-center max-sm:container max-sm:text-center ">
          <img src={Logo} alt="" />
          <p className="py-2.5">
            Curated tools, technologies, and resources for developers building
            <br />
            modern software.
          </p>
          <div className="links flex gap-3 font-semibold">
            <a href="">GitHub</a>
            <a href="">Twitter</a>
            <a href="">LinkedIn</a>
          </div>
        </aside>
        <nav className="max-sm:hidden">
          <h6 className="uppercase text-md text-black font-semibold">
            Product
          </h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Technologies</a>
          <a className="link link-hover">Projects</a>
        </nav>
        <nav className="max-sm:hidden">
          <h6 className="uppercase text-md text-black font-semibold">
            Company
          </h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav className="max-sm:hidden">
          <h6 className="uppercase text-md text-black font-semibold">Legal</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms of use</a>
        </nav>
      </footer>
      <div className=" container mx-auto divider my-3 max-sm:my-0"></div>
      <div className="credential container mx-auto flex justify-between items-center py-4 max-sm:justify-evenly">
        <div className="left">&copy;2026DevStack. All Rights reserved.</div>
        <div className="terms flex gap-3 mr-3.5">
          <p className="link link-hover">Privacy</p>
          <p className="link link-hover">Terms</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
