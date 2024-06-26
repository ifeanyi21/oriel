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
import TextAnimatedGradient from "@/components/ui/AnimatedText";
import Banner from "@/assests/images/background4.png";
// import SlideUpComponent from "@/components/ui/SlideUpComponent";

export default function Home() {
  const { push } = useRouter();
  const words = [
    {
      text: "Welcome to",
    },
    {
      text: "ORIEL.",
      className: "text-[#FB6D48] dark:text-[#FB6D48] font-bold",
    },
  ];

  const goals = [
    {
      heading: "Promote Your Product & Brand.",
      text: "Elevate your brand visibility and product recognition through strategic marketing campaigns.",
      icon: <IoStar className="sm:h-20 sm:w-20 h-10 w-10 p-3 text-[#FB6D48]" />,
    },
    {
      heading: "Growing & Scale Up Businesses",
      text: "Unlock sustainable growth and scalability for your business with data-driven strategies.",
      icon: (
        <PiChartLineUpBold className="sm:h-20 sm:w-20 h-10 w-10 p-3 text-[#FB6D48]" />
      ),
    },
    {
      heading: "Success Campaign on Social",
      text: "Craft compelling social media campaigns that resonate with your target audience.",
      icon: (
        <BsStars className="sm:h-20 sm:w-20 h-10 w-10 p-3 text-[#FB6D48]" />
      ),
    },
  ];
  return (
    <Layout>
      <div className="relative">
        <Image
          src={Banner}
          className="w-full h-[190px] md:h-[500px] object-cover"
          priority
          width={500}
          height={500}
          alt="Banner"
        />
        <div className="flex absolute inset-0 flex-col items-center justify-center h-[250px] sm:h-[22rem]">
          <TypewriterEffectSmooth words={words} />
          <p className="text-black font-medium dark:text-neutral-200 md:text-7xl text-3xl text-center lg:w-[900px]">
            Building a Loyal Audience Base for Every Brand
          </p>
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
                <h6 className="text-stone-900 dark:text-blue-500 font-medium text-lg mb-1">
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
                <TextAnimatedGradient
                  text={"Brand Values"}
                  className={"text-3xl font-medium "}
                />
                <p className="mt-6 sm:text-base text-sm sm:leading-8 leading-7 text-gray-600 dark:text-gray-300">
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
