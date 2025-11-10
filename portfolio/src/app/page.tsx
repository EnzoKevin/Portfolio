"use client";
import Image from "next/image";
import Layout from "@/Layout";
import Hero from "@/Pages/Hero";
import About from "@/Pages/about";
import Skills from "@/Pages/Skills";
import Projects from "@/Pages/Projects";
import Contact from "@/Pages/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}
