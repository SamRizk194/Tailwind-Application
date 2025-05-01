function Header() {
  return (
    <header>
      <a href="/">
        <img
          src="../../src/assets/images/logo.svg"
          alt="logo"
          className="bg-"
        />
      </a>
      <nav>
        <ul>
          <li>
            <a href="/features" className="text-white opacity-[0.9]">
              Features
            </a>
          </li>
          <li>
            <a href="/team" className="text-white opacity-[0.9]">
              Team
            </a>
          </li>
          <li>
            <a href="signin" className="text-white opacity-[0.9]">
              Signin
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
