import { useState } from "react";
import Quto from "../assets/images/bg-quotes.png";

function Testimonials() {
  const [testData] = useState([
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: "profile-1.jpg",
      position: "Founder & CEO, Huddle",
      name: "Ahmed",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: "profile-2.jpg",
      position: "Founder & CEO, Huddle",
      name: "Mohamed",
    },
    {
      id: 3,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: "profile-3.jpg",
      position: "Founder & CEO, Huddle",
      name: "Eman",
    },
  ]);

  return (
    <section className="pb-[350px] md:mx-[100px]">
      <div className="container relative">
        <div className="absolute left-[20px] top-[-35px]">
          <img src={Quto} alt="quote" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10">
          {testData.map((item) => {
            const imageUrl = new URL(
              `../assets/images/${item.image}`,
              import.meta.url
            ).href;
            return (
              <div
                key={item.id}
                className="bg-[#21293c] rounded-[5px] p-[30px] shadow-[8px_8px_1px_8px_#1c202c]"
              >
                <p className="text-white text-sm font-normal tracking-[0.8px] mb-[30px]">
                  {item.desc}
                </p>
                <div className="flex items-center gap-[15px]">
                  <img
                    src={imageUrl}
                    alt={item.name}
                    className="w-[50px] h-[50px] rounded-[50%] object-contain"
                  />
                  <div>
                    <strong className="text-white block mb-[5px]">
                      {item.name}
                    </strong>
                    <p className="text-white font-normal text-sm">
                      {item.position}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
