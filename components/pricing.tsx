"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch"; // Assuming you have a Switch component

const pricingPlans = {
  monthly: [
    {
      title: "Basic Plan",
      price: "₹2,500",
      features: [
        "Real-time emissions monitoring",
        "Basic predictive analytics",
        "Standard reporting",
        "Email support",
      ],
      buttonText: "Choose Basic",
    },
    {
      title: "Professional Plan",
      price: "₹6,250",
      features: [
        "All Basic Plan features",
        "Advanced predictive analytics",
        "Customized decarbonization strategies",
        "Enhanced reporting and data visualization",
        "Priority email and phone support",
      ],
      buttonText: "Choose Professional",
    },
    {
      title: "Enterprise Plan",
      price: "₹12,500",
      features: [
        "All Professional Plan features",
        "Unlimited user access",
        "Comprehensive consulting and implementation services",
        "Advanced data analytics and custom reporting",
        "Dedicated account manager",
        "24/7 support",
      ],
      buttonText: "Choose Enterprise",
    },
  ],
  yearly: [
    {
      title: "Basic Plan",
      price: "₹25,000",
      features: [
        "Real-time emissions monitoring",
        "Basic predictive analytics",
        "Standard reporting",
        "Email support",
      ],
      buttonText: "Choose Basic",
    },
    {
      title: "Professional Plan",
      price: "₹62,500",
      features: [
        "All Basic Plan features",
        "Advanced predictive analytics",
        "Customized decarbonization strategies",
        "Enhanced reporting and data visualization",
        "Priority email and phone support",
      ],
      buttonText: "Choose Professional",
    },
    {
      title: "Enterprise Plan",
      price: "₹1,25,000",
      features: [
        "All Professional Plan features",
        "Unlimited user access",
        "Comprehensive consulting and implementation services",
        "Advanced data analytics and custom reporting",
        "Dedicated account manager",
        "24/7 support",
      ],
      buttonText: "Choose Enterprise",
    },
  ],
};

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
          Pricing Plans
        </h2>
        
        {/* Switch between Monthly and Yearly */}
        <div className="flex justify-center items-center mb-12">
          <span className={`mr-2 ${!isYearly ? "font-semibold" : ""}`}>Monthly</span>
          <Switch checked={isYearly} onCheckedChange={() => setIsYearly(!isYearly)} />
          <span className={`ml-2 ${isYearly ? "font-semibold" : ""}`}>Yearly</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans[isYearly ? "yearly" : "monthly"].map((plan, index) => (
            <Card key={index} className="rounded-lg shadow-lg p-6 flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">{plan.title}</CardTitle>
                <CardDescription className="text-4xl font-bold my-4">{plan.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-green-500 mr-2">✔️</span> {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <Button variant="custom" className="mt-auto">
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
