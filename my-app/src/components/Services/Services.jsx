import Img1 from "../../assets/books/book2.jpg";
import Img2 from "../../assets/books/book1.jpg";
import Img3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    title: "His Life",
    description:
      "A deeply emotional story that follows a journey of struggle, hope, and self-discovery. It explores how one life-changing decision can redefine everything.",
  },
  {
    id: 2,
    img: Img2,
    title: "Who's there",
    description:
      "A suspenseful mystery filled with hidden voices, unexpected twists, and unanswered questions that keep you engaged till the very last page.",
  },
  {
    id: 3,
    img: Img3,
    title: "Lost Boy",
    description:
      "An inspiring tale of a boy searching for identity and belonging in a complex world, discovering strength through pain and experience.",
  },
];

const Services = ({ handleOrderPopup }) => {
  return (
    <>
      <span id="services"></span>

      <div className="py-10">

        <div className="container">

          {/* Header */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">

            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Trending Books
            </p>

            <h1 className="text-3xl font-bold">Best Books</h1>

            <p className="text-xs text-gray-400">
             Discover handpicked books loved by readers worldwide. From inspiring stories to thrilling mysteries, explore titles that spark imagination and knowledge.
            </p>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">

            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
              >

                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                  />
                </div>

                <div className="p-4 text-center">

                  {/* Rating */}
                  <div className="w-full flex items-center justify-center gap-1">
                    {Array(4).fill(null).map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>

                  <h1 className="text-xl font-bold">{service.title}</h1>

                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {service.description}
                  </p>

                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </>
  );
};

export default Services;