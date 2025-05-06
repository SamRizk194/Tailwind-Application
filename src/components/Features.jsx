import { useState } from "react";

function Features() {
  const [items] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your files, anywhere",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real-time collaboration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
  ]);

  return (
    <section className="pb-[150px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] max-w-[865px] mx-auto">
          {items.map((item, index) => {
            const imageUrl = new URL(
              `../assets/images/${item.icon}`,
              import.meta.url
            ).href;

            return (
              <div key={index} className="text-white flex-col text-center">
                <img
                  src={imageUrl}
                  alt="icon-img"
                  className="w-[80px] h-[80px] object-contain mx-[auto]"
                />
                <h4 className="text-xl font-semibold my-[15px]">
                  {item.title}
                </h4>
                <p className="font-normal text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
