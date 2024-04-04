"use client";
import Layout from "@/components/partials/layout";
import { TypewriterEffectSmooth } from "@/components/ui/TypeWriter";
import { IoStar } from "react-icons/io5";
import { PiChartLineUpBold } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
import Lottie from "lottie-react";
import Animation from "../assests/animations/Media.json";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  const words = [
    {
      text: "Welcome to",
    },
    {
      text: "ORIEL.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const goals = [
    {
      heading: "Promote Your Product & Brand.",
      text: "Elevate your brand visibility and product recognition through strategic marketing campaigns.",
      icon: <IoStar className="sm:h-20 sm:w-20 h-10 w-10 p-3 text-blue-500" />,
    },
    {
      heading: "Growing & Scale Up Businesses",
      text: "Unlock sustainable growth and scalability for your business with data-driven strategies.",
      icon: (
        <PiChartLineUpBold className="sm:h-20 sm:w-20 h-10 w-10 p-3 text-blue-500" />
      ),
    },
    {
      heading: "Success Campaign on Social",
      text: "Craft compelling social media campaigns that resonate with your target audience.",
      icon: <BsStars className="sm:h-20 sm:w-20 h-10 w-10 p-3 text-blue-500" />,
    },
  ];
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-[250px] sm:h-[30rem]">
        <p className="text-neutral-600 dark:text-neutral-200 text-sm">
          Igniting Digital Brand Experiences.
        </p>
        <TypewriterEffectSmooth words={words} />

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button
            className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
            onClick={() => push("/services")}
          >
            Learn more
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 dark:bg-gray-950 gap-10 rounded-lg py-8 px-4 sm:mx-20 mx-0">
        {goals.map((item) => {
          return (
            <div className="flex gap-2" key={item.heading}>
              <div className="flex justify-center items-center rounded-full">
                {item.icon}
              </div>
              <div>
                <h6 className="text-stone-900 dark:text-blue-500 font-semibold text-lg mb-1">
                  {item.heading}
                </h6>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="overflow-hidden py-24 sm:py-32 rounded">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className={`lg:pr-8 lg:pt-4 `}>
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-brand-orange">
                  Oriel
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">
                  Brand Values
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Oriel is a dynamic and innovative media agency dedicated to
                  providing top-tier design and marketing solutions. With a
                  commitment to excellence, the brand is synonymous with
                  timeless quality, reliability, world-class creativity, and
                  unbeatable value for investment.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"></dl>
                <button
                  className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
                  onClick={() => push("/services")}
                >
                  Learn more
                </button>
              </div>
            </div>
            <Lottie animationData={Animation} className="h-96" loop={true} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
