import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Teams } from "@/components/Teams/page";
import Testimonials from "@/components/Testimonials";
import { ThreeDCardDemo } from "@/components/3dCard/page";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JIT ACM Student Chapter",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <AboutSectionOne />
      <ThreeDCardDemo />
      <Testimonials />
      <Teams />
      <Blog />
      <Contact />
    </>
  );
}
