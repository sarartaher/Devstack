import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white shadow-sm">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4 ">
          <div className="hamburger  md:hidden ">
            <RxHamburgerMenu className="h-10" />
          </div>
          <div className="logo">
            <img src={Logo} alt="" className="h-10 " />
          </div>
          <ul className="flex items-center gap-6 text-[#475569] font-semibold max-sm:hidden ">
            <li>
              <a href="" className="hover:text-pink-600">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:text-pink-600">
                Technologies
              </a>
            </li>
            <li>
              <a href="" className="hover:text-pink-600">
                Projects
              </a>
            </li>
            <li>
              <a href="" className="hover:text-pink-600">
                About
              </a>
            </li>
            <li>
              <a href="" className="hover:text-pink-600">
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-button flex gap-4 text-[#475569] font-semibold">
            <button>Sign In</button>
            <button className="bg-pink-600 text-white px-3.5 py-1.5 rounded-2xl font-semibold">
              Sign Up
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
