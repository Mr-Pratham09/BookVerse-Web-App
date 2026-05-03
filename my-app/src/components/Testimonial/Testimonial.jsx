import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "This platform completely changed the way I read books. The collection is amazing and I can easily discover new titles every week. Highly recommended for all book lovers.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Narayan",
    text: "I love how simple and fast it is to find books here. The reading experience is smooth and the variety of genres keeps me engaged all the time.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Sachin Tendulkar",
    text: "A great platform for anyone who enjoys reading. From classics to modern stories, everything is available in one place with a clean and easy interface.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="fade-up" className="py-10">

      <div className="container">

        {/* Header */}
        <div className="text-center mb-20 max-w-[600px] mx-auto">

          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            What our customers say
          </p>

          <h1 className="text-3xl font-bold">Testimonial</h1>

          <p className="text-xs text-gray-400">
            Hear from readers who have explored our collection. Their experiences reflect how these books have inspired, educated, and entertained them.
          </p>

        </div>

        {/* Slider */}
        <div className="max-w-[600px] mx-auto">

          <Slider {...settings}>

            {testimonialData.map((data) => (
              <div key={data.id} className="my-6">

                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">

                  <img
                    className="rounded-full w-20 h-20"
                    src={data.img}
                    alt={data.name}
                  />

                  <div>
                    <p className="text-gray-500 text-sm">{data.text}</p>

                    <h1 className="text-xl font-bold text-black/80 dark:text-white">
                      {data.name}
                    </h1>
                  </div>

                  <p className="text-black/10 text-8xl font-serif absolute top-0 right-2">
                    "
                  </p>

                </div>

              </div>
            ))}

          </Slider>

        </div>

      </div>

    </div>
  );
};

export default Testimonial;