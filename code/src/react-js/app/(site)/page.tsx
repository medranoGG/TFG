import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import Integration from "@/components/Integration";


export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <FeaturesTab />
      <FeaturesTab /> {/* Lo dejo por si acaso */}
      <Integration />
      {/*DEMO -> https://solid.nextjstemplates.com/*/}
    </main>
  );
}
