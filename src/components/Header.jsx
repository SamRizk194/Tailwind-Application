import { useEffect, useRef } from "react";
import logo from "../assets/images/logo.svg";

function Header() {
  const headRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 100) {
        headRef.current.style.background = "#0c1524";
        headRef.current.style.padding = "20px 30px";
      } else {
        headRef.current.style.background = "transparent";
        headRef.current.style.padding = "60px";
      }
    });
  }, []);
  return (
    <header
      ref={headRef}
      className="pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-200"
    >
      <div className="container mx-auto flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <ul className="flex gap-[50px]">
            <li>
              <a
                href="/features"
                className="text-white opacity-[0.9] hover:underline hover:opacity-[1] transition-opacity duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/team"
                className="text-white opacity-[0.9] hover:underline"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="signin"
                className="text-white opacity-[0.9] hover:underline"
              >
                Signin
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
