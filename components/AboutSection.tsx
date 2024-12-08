"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `
Welcome to EcoTrail – your comprehensive partner in carbon footprint management for Indian coal mines. Our mission is to empower mines with cutting-edge tools to quantify their emissions, explore pathways to carbon neutrality, and make informed decisions for a sustainable future.

At EcoTrail, we understand the balance between India's energy needs and climate commitments. Our platform offers advanced features for emission estimation, carbon credit management, and data visualization, all tailored to support transparency, cost savings, and sustainability goals.

Join us on our journey to revolutionize the coal mining industry. With EcoTrail, navigate towards a greener future with confidence and clarity.
`;

export function About() {
  return (
    <div className="bg-green-50 text-gray-900 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">About EcoTrail</h2>
     <TextGenerateEffect
       words={words}>
        </TextGenerateEffect>
      
    </div>
  );
}
