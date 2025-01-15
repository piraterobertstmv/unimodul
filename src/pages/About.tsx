import React from "react";
import { Navbar } from "@/components/Navbar";
import { PageTitle } from "@/components/shared/PageTitle";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutPhilosophy } from "@/components/about/AboutPhilosophy";
import { AboutFeatures } from "@/components/about/AboutFeatures";
import { AboutVision } from "@/components/about/AboutVision";
import { AboutValues } from "@/components/about/AboutValues";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <PageTitle 
            title="The Story of Unimodul: Innovation and Sustainability for a Modular Future"
          />
          
          <AboutHero />
          <AboutPhilosophy />
          <AboutFeatures />
          <AboutVision />

          <div className="bg-gray-50 py-16 mt-16">
            <div className="container mx-auto px-4">
              <AboutValues />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;