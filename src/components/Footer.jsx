import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import iconlocation from "../assets/images/icon-location.svg";
import logo from "../assets/images/logo.svg";
import phone from "../assets/images/icon-phone.svg";
import email from "../assets/images/icon-email.svg";

function Footer() {
  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white w-screen">
      <div className="container px-10">
        <a href="/">
          <img
            src={logo}
            alt="logo-img"
            className="w-[175px] h-[66px] object-contain"
          />
        </a>
        <div className="flex justify-between flex-wrap flex-col md:flex-row gap-[30px] mt-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <img
              src={iconlocation}
              alt="location-img"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="font-normal text-sm tracking-[0.8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              nisi dignissimos unde ipsam modi facilis nam magni, assumenda ad
              fuga.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-[15px] mb-[15px]">
              <img
                src={phone}
                alt="phone"
                className="w-[18px] h-[18px] object-contain"
              />
              <p>+20121212121</p>
            </div>
            <div className="flex items-center gap-[15px]">
              <img
                src={email}
                alt="email"
                className="w-[18px] h-[18px] object-contain"
              />
              <p>example@fylo.com</p>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <li>
              <a
                href="/about-us"
                className="hover:text-primary transition-all duration-200 text-base"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="hover:text-primary transition-all duration-200 text-base"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/jobs"
                className="hover:text-primary transition-all duration-200 text-base"
              >
                Jobs
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-primary transition-all duration-200 text-base"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="/press"
                className="hover:text-primary transition-all duration-200 text-base"
              >
                Press
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-primary transition-all duration-200 text-base"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="hover:text-primary transition-all duration-200 text-base"
              >
                Blog
              </a>
            </li>
          </ul>

          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-[40px] h-[40px] flex items-center justify-center border border-white rounded-[50%]">
                  <FaFacebookF className="group-hover:text-primary transition-all duration-200" />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-[40px] h-[40px] flex items-center justify-center border border-white rounded-[50%]">
                  <FaTwitter className="group-hover:text-primary transition-all duration-200" />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-[40px] h-[40px] flex items-center justify-center border border-white rounded-[50%]">
                  <FaInstagram className="group-hover:text-primary transition-all duration-200" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
