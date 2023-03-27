'use client'
import { Card, Button } from "@nextui-org/react";
import { FaCheck } from "react-icons/fa";


export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$10",
      features: ["10,000 requests/month", "100 requests/minute"],
      buttonLabel: "Choose Basic",
      bgClass: "bg-white",
      textColor: "text-black",
    },
    {
      name: "Pro",
      price: "$50",
      features: ["50,000 requests/month", "500 requests/minute"],
      buttonLabel: "Choose Pro",
      bgClass: "bg-gray-800",
      textColor: "text-white",
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Custom requests/month", "Custom requests/minute"],
      buttonLabel: "Contact Us",
      bgClass: "bg-white",
      textColor: "text-black",
    },
  ];

  return (
    <div className="container mx-auto my-12">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-light-gold">
          Choose a plan
        </h2>
        <p className="mt-4 text-gray-500">
          Start using Similarity Scout API today with a pricing plan that works
          for you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            className={`px-6 py-8 text-center rounded-lg shadow-lg bg-white text-black 
                      dark:bg-slate-700 dark:text-light-gold ${plan.bgClass}`}
            key={plan.name}
          >
            <h3 className="text-2xl font-medium mb-4 uppercase tracking-wide">
              {plan.name}
            </h3>
            <div className="flex items-center justify-center mb-4">
              <span className="text-6xl font-bold">{plan.price}</span>
              <span className="text-lg font-medium ml-2 text-gray-500">
                USD
              </span>
            </div>
            <ul className="mb-8">
              {plan.features.map((feature) => (
                <li
                  className="flex items-center justify-center text-lg mb-4"
                  key={feature}
                >
                  <FaCheck className="text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              className={`${
                plan.textColor
              } hover:${plan.bgClass} hover:text-white block`}
              
            >
              {plan.buttonLabel}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
