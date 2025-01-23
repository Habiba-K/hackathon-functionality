import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CardSection() {
  const cards = [
    {
      id: 1,
      image: "/images/blog1.png",
      title: "Loudest à la Madison #1 (L'intégral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 2,
      image: "/images/unsplash_tVEqStC2uz8.png",
      title: "Loudest à la Madison #1 (L'intégral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 3,
      image: "/images/unsplash_dEGu-oCuB1Y.png",
      title: "Loudest à la Madison #1 (L'intégral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
  ];

  return (
    <section className="bg-white md:py-5 text-center ">
      <div className=" lg:pl-20 lg:pr-20 lg:pb-10">
        <p className="text-blue-500 font-bold text-md md:text-base">
          Practice Advice
        </p>
        <h2 className="text-lg text-[#252B42] md:text-2xl font-bold mb-2">
          Featured Posts
        </h2>
        <div className="flex justify-center">
          <p className="text-[#737373]  text-sm md:text-base w-[80%] md:w-[50%]   ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      <div className=" lg:max-w-[1440px] mx-auto px-4 mt-5  ">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border rounded-lg shadow hover:shadow-lg transition duration-200"
            >
              <Button className="ml-2 mt-1 absolute bg-red-500 text-white px-5  py-1 font-semibold">
                New
              </Button>
              {/* Card Image */}
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              {/* Card Content */}
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-blue-500 uppercase font-semibold">
                  <span>Google</span>
                  <span className="text-[#737373]">Trending</span>
                  <span className="text-[#737373]">New</span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-gray-800">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{card.description}</p>

                {/* Date and Comments */}
                <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
                  <div className="flex items-center gap-1">
                    <i className="ri-calendar-line"></i>
                    <span>{card.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="ri-message-line"></i>
                    <span>{card.comments}</span>
                  </div>
                </div>

                {/* Learn More */}
                <button className="mt-4 text-blue-600 font-medium hover:underline">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
