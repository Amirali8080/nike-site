import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img width={130} height={29} src={headerLogo} alt="logo" />
        </a>
        <ul className="flex-1 flex gap-16 max-lg:hidden justify-center items-center">
          {navLinks.map((link) => (
            <li
              className="font-montserrat text-lg text-slate-gray"
              key={link.label}
            >
              {link.label}
            </li>
          ))}
        </ul>
        <div>
          <img
            className="lg:hidden"
            src={hamburger}
            width={25}
            height={25}
            alt="hamburger"
          />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
