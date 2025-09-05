import Image, {StaticImageData} from "next/image";
import React from "react";
import project1 from "/public/images/services/frontend-web-development.png";
import project2 from "/public/images/services/wordPress-website-creation.png";
import project3 from "/public/images/services/figma-to-HTML-conversion.png";

interface ServiceItem {
    id: number,
    title: string,
    image:StaticImageData
}

const servicesData:ServiceItem[] = [
  {
    id: 1,
    title: "Frontend Web Development",
    image: project1,
  },
  {
    id: 2,
    title: "WordPress Website Creation",
    image: project2,
  },
  {
    id: 3,
    title: "Figma to ReactJs/NextJs Conversion",
    image: project3,
  },
];

const ServicesCards:React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-6 justify-items-center">
      {servicesData.map((service) => (
        <div
          data-aos="fade-up"
          key={service.id}
          className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 inverted-radius relative border shadow-md w-full"
        >
          <h2 className="text-lg md:text-sm lg:text-md xl:text-lg p-5 text-white font-bold">
            {service.title}
          </h2>
          <hr />
          <div className="flex justify-center">
            <div className="services-layer-one rounded-3xl top-28 h-40 absolute"></div>
            <div className="services-layer-two rounded-3xl top-32 h-40 absolute"></div>
          </div>
          <Image
            className="inverted-radius w-full mt-20 h-[90%]"
            src={service.image}
            alt={service.title}
          />
        </div>
        
      ))}
    </div>
  );
};

export default ServicesCards;
