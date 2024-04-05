import Layout from "@/components/partials/layout";
import Image from "next/image";
import React from "react";
import Background from "@/assests/images/services.jpeg";
import SocialServiceImage from "@/assests/images/bg.png";
import Events from "@/assests/images/events.jpeg";
import Branding from "@/assests/images/branding.jpeg";
import Public from "@/assests/images/publicimage.jpeg";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import TextAnimatedGradient from "@/components/ui/AnimatedText";

const Services = () => {
  const services = [
    {
      header: `Public Relations`,
      image: Public,
    },
    {
      header: `Branding and Media Strategy`,
      image: Branding,
    },
    {
      header: `Events and Activation`,
      image: Events,
    },
  ];
  return (
    <Layout>
      <div className="relative">
        <Image
          src={Background}
          className="w-full h-80"
          alt="Services"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-bold text-5xl">Services</h1>
            <p className="text-base mt-8">
              We are Connecting you with Digital life.
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-hidden pt-24 sm:pt-32 rounded">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className={`lg:pr-8 lg:pt-4 `}>
              <div className="lg:max-w-lg">
                <h2 className="text-lg font-semibold leading-7">
                  Why use{" "}
                  <TextAnimatedGradient
                    text={"ORIEL"}
                    className={"!text-lg font-bold "}
                  />
                  ?
                </h2>
                <p className="mt-2 text-3xl font-medium tracking-tight text-stone-950 dark:text-white sm:text-4xl">
                  Get the best and most creative results.
                </p>
                <p className="mt-6 sm:text-base text-sm sm:leading-8 leading-6 text-gray-600 dark:text-gray-300">
                  Unlock your full potential and achieve unparalleled success
                  with our expert services. We combine cutting-edge strategies,
                  creativity, and industry insights to deliver tailored
                  solutions that drive exceptional results. Partnering with us
                  ensures you receive innovative, impactful, and highly
                  effective solutions that propel your business to new heights.
                  Get ready to experience the best and most creative outcomes
                  that exceed your expectations.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"></dl>
              </div>
            </div>
            <Image
              src={SocialServiceImage}
              className="w-full h-auto object-cover"
              alt="Services"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="bg-blue-200 md:py-24 py-8">
        <div className="sm:flex gap-10 md:mx-20 p-3">
          <div className="sm:border-l-2 border-blue-500 sm:pl-5">
            <TextAnimatedGradient
              text={"Our Services"}
              className={
                "sm:text-base text-sm !uppercase font-semibold leading-7"
              }
            />
            <div className="text-stone-900 font-medium sm:text-3xl text-xl">
              Strategic Social Media Marketing for Unmatched Business Growth.
            </div>
          </div>
          <div className="text-gray-600 sm:mt-0 mt-5 sm:text-base text-sm sm:leading-8 leading-6 dark:text-black">
            Harness the power of strategic social media marketing to propel your
            business to unprecedented heights. Our data-driven approach crafts
            targeted campaigns that captivate your ideal audience, fostering
            unparalleled engagement and brand loyalty.
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 sm:mx-20 mx-5 sm:mt-20 mt-10">
        {services.map((item) => {
          return (
            <div key={item.header}>
              <Card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-span-5"
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <h4 className="text-white font-medium text-2xl">
                    {item.header}
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src={item.image}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-end">
                  <Button
                    className="text-tiny"
                    color="primary"
                    radius="full"
                    size="sm"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Services;
