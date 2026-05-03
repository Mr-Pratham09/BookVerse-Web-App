import { useState } from "react";
import Book1 from "../../assets/books/book2.jpg";
import Book2 from "../../assets/books/book1.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Vector from "../../assets/website/blue-pattern.png";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "His Life will forever be Changed",
    description:
      "A powerful story of transformation and struggle where the main character discovers hidden truths about life, relationships, and purpose. Every page brings a new emotional turn that keeps the reader engaged.",
  },
  {
    id: 2,
    img: Book2,
    title: "Who's there",
    description:
      "A mysterious narrative that explores unknown voices, secrets, and unexpected encounters. The story builds curiosity with every chapter, making you question what is real and what is illusion.",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boy",
    description:
      "An emotional journey of a boy trying to find his identity in a world full of confusion and challenges. It reflects growth, pain, and hope in a beautifully written storyline.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [active, setActive] = useState(ImageList[0]);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <div
      className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
      style={bgImage}
    >
      <div className="container pb-8 sm:pb-0">

        <div className="grid grid-cols-1 sm:grid-cols-2">

          {/* text section */}
          <div
            data-aos-once="true"
            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
          >
            <h1
              data-aos="zoom-out"
              data-aos-duration="500"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              {active.title}

              <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                by Anonymous
              </p>
            </h1>

            <p
              data-aos="slide-up"
              data-aos-duration="500"
              data-aos-delay="100"
              className="text-sm"
            >
              {active.description}
            </p>

            <div>
              <button
                onClick={handleOrderPopup}
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* image section */}
          <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">

            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img
                data-aos="zoom-in"
                src={active.img}
                alt={active.title}
                className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
              />
            </div>

            {/* thumbnails */}
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">

              {ImageList.map((item) => (
                <img
                  key={item.id}
                  src={item.img}
                  alt={item.title}
                  onClick={() => setActive(item)}
                  className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200 cursor-pointer"
                />
              ))}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;