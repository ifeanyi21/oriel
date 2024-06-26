"use client";
import Layout from "@/components/partials/layout";
import Image from "next/image";
import React, { useState } from "react";
import Background from "@/assests/images/services.jpeg";
import {
  Card,
  CardHeader,
  CardFooter,
  Divider,
  Link,
  Input,
  Textarea,
  Button,
} from "@nextui-org/react";
import TextAnimatedGradient from "@/components/ui/AnimatedText";
import Banner from "@/assests/images/background.png";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [emailData, setEmailData] = useState({
    name: "",
    company: "",
    email: "",
    subject: "",
    message: "",
    number: "",
  });

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      setLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="h-80 w-full bg-transparent  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-black">
            <h1 className="font-bold md:text-5xl text-xl">Contact Us</h1>
            <p className="text-base mt-4">
              Start the conversation to established good relationship and
              business.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black text-white sm:mb-20 mb-10 md:py-24 py-8">
        <div className="sm:flex md:mx-20 p-3 gap-10">
          <div className="sm:border-l-2 border-blue-500 sm:pl-5">
            <TextAnimatedGradient
              text={"Get in touch"}
              className={
                "sm:text-base text-sm !uppercase font-semibold leading-7"
              }
            />
            <div className="text-white font-semibold sm:text-3xl text-xl">
              Seamless Communication, Global Impact.
            </div>
          </div>
          <div className="text-white md:w-[500px]">
            {`Connect with our friendly
            team today. We're ready to listen, understand your unique
            requirements, and provide tailored solutions that exceed your
            expectations.`}
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:mx-20 mx-5 sm:mt-20 mt-10">
        <Card className="mb-2">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">{`Let's Talk.`}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="tel:+2348064482085">
              +234 806 448 2085
            </Link>
          </CardFooter>
        </Card>
        <Card className="mb-2">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">{`Email us.`}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="mailto:aayodele027@gmail.com">
              Aayodele027@gmail.com
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="relative mt-16 py-10 h-[700px] md:h-[500px]">
        <Image
          src={Banner}
          className="w-full h-[300px] md:h-[500px] object-cover object-bottom"
          priority
          width={500}
          height={500}
          alt="Banner"
        />
        <div className="absolute inset-0 flex-col items-center flex justify-center">
          <form className="px-10" onSubmit={handleSubmit}>
            <TextAnimatedGradient
              text={"Send us a message."}
              className={"!text-base font-semibold leading-7 uppercase"}
            />
            <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl mb-10">
              Ready to take your marketing to the next level?
            </p>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 gap-4">
              <Input
                type="text"
                variant={"underlined"}
                label="Name"
                name="name"
                onChange={handleChange}
              />
              <Input
                type="text"
                variant={"underlined"}
                label="Company"
                name="company"
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 gap-4">
              <Input
                type="text"
                variant={"underlined"}
                label="Phone Number"
                name="number"
                onChange={handleChange}
              />
              <Input
                type="email"
                variant={"underlined"}
                label="Email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 gap-4">
              <Input
                type="text"
                variant={"underlined"}
                label="Subject"
                name="subject"
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 gap-4">
              <Textarea
                type="text"
                variant={"underlined"}
                label="Message"
                name="message"
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              className="bg-black text-white"
              isLoading={loading}
            >
              {loading ? "Sending..." : "Send us a message"}
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
