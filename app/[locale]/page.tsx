"use client";

import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { Brands } from "@/components/sections/Brands";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Specs } from "@/components/sections/Specs";
import { Videos } from "@/components/sections/Videos";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { ScrollEffects } from "@/components/effects/ScrollEffects";

export default function Page() {
  return (
    <div>
      <ScrollEffects />
      <Navbar />
      <main className="space-y-10 sm:space-y-12">
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Brands />
        <Gallery />
        <Reviews />
        <Specs />
        <Videos />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
