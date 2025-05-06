import landing from "../assets/images/landing.png";
import curvy from "../assets/images/bg-curvy-desktop.svg";

function Landing() {
  return (
    <section className="bg-[#1c2230]">
      <div className="container pt-[200px]">
        <div>
          <img className="mx-auto" src={landing} alt="landing" />
        </div>

        <div className="text-white text-center">
          <h1 className="text-[30px] md:text[40px] font-semibold my-[30px]">
            All your fiels in one secure location
            <br />
            accessible anywhere
          </h1>
          <p className="text-lg font-normal px-[15px] md:w-[600px] max-w-full mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            explicabo repudiandae, quis earum quisquam officiis ipsa eius culpa
            quia id consequuntur aut a dolor incidunt officia, voluptate rerum
            dolorum perferendis.
          </p>
        </div>
        <div className="flex justify-center text-center">
          <a
            href="/"
            className="btn w-[280px] h-[60px] rounded-[30px] pt-[18px] mt-[30px] text-white font-medium"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="w-[100%] h-[200px]">
        <img src={curvy} className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
}
export default Landing;
