import { useState } from "react";
import FeatureBox from "./FeatureBox";

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
          {items.map((item, index) => (
            <FeatureBox
              key={index}
              title={item.title}
              icon={item.icon}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
