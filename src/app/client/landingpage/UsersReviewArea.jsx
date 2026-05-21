"use client";

import Container from "@/container/Container";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import BGImage from "../images/heroimage.png";

const UsersReviewData = [
  {
    id: 1,
    description:
      "CareerAssist AI helped me identify my weaknesses and guided me step-by-step to land my dream job as a Frontend Developer.",
    image: BGImage,
    name: "Rafi Ahmed",
    career: "Frontend Developer",
  },
  {
    id: 2,
    description:
      "This AI tool improved my resume and boosted my confidence in interviews.",
    image: BGImage,
    name: "Nusrat Jahan",
    career: "UI/UX Designer",
  },
  {
    id: 3,
    description:
      "I got a clear roadmap for my career growth. Highly recommended!",
    image: BGImage,
    name: "Arif Hossain",
    career: "Backend Developer",
  },
  {
    id: 4,
    description:
      "Mock interviews helped me crack my first job interview successfully.",
    image: BGImage,
    name: "Tanvir Hasan",
    career: "Software Engineer",
  },
];

export default function UsersReviewArea() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="py-20 bg-gray-50">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
            What Our Users Say
          </h3>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {UsersReviewData.map((item) => (
            <div key={item.id} className="px-3">
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-md w-full lg:w-[70%]">
                  <p className="text-gray-600 text-sm leading-6">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-4 mt-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />

                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">{item.career}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
}
