"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";

export default function HomeworkHelpLanding() {
  const [humanExpertsOnly, setHumanExpertsOnly] = useState(true);

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-gray-100">
      <div className="absolute inset-0 z-0">
        <Image
          src="/back.png"
          alt="Background"
          fill
          className="object-cover blur-sm opacity-60"
          priority
        />
      </div>

      <div className="relative z-10 flex min-h-screen">
        <div className="flex-1 p-8 pt-12 md:p-16 lg:p-24">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              A-Plus Homework Help For All
            </h1>

            <p className="mt-4 text-gray-700">
              Get personalized expert assistance in any academic field. 100+
              courses and programs covered.
            </p>

            <div className="mt-8">
              <Textarea
                placeholder="Describe your project briefly"
                className="min-h-[100px] rounded-lg border-gray-300 bg-white p-4 text-gray-800"
              />
            </div>

            <div className="mt-4 flex items-center gap-2">
              <Switch
                checked={humanExpertsOnly}
                onCheckedChange={setHumanExpertsOnly}
                className="data-[state=checked]:bg-purple-600"
              />
              <span className="text-sm font-medium text-gray-800">
                Human experts only
              </span>
            </div>

            <div className="mt-8">
              <p className="text-lg font-medium text-gray-800">
                Get Offers{" "}
                <span className="text-purple-600">For FREE & Pay Only</span>{" "}
                When You Accept An Offer!
              </p>
            </div>

            <div className="mt-6">
              <button className="rounded-full bg-purple-600 px-8 py-3 font-medium text-white transition-colors hover:bg-purple-700">
                Find an Expert
              </button>
            </div>
          </div>
        </div>
        <div className="relative hidden flex-1 md:block">
          <Image
            src="/sell.png"
            alt="Expert tutor"
            width={554}
            height={609}
            className="object-contain object-right-bottom"
          />

          <div className="absolute right-8 top-1/3 flex flex-col gap-3">
            <button className="rounded-full bg-white font-bold py-2 text-sm  text-gray-800 shadow-md w-32 text-center">
              How It Works
            </button>
            <button className="rounded-full bg-white py-2 text-sm font-medium text-gray-800 shadow-md w-32 text-center">
              Find an Expert
            </button>
            <button className="rounded-full bg-white py-2 text-sm font-medium text-gray-800 shadow-md w-32 text-center">
              Featured
            </button>
            <button className="rounded-full bg-white py-2 text-sm font-medium text-gray-800 shadow-md w-32 text-center">
              Claim Offers
            </button>
            <button className="rounded-full bg-white py-2 text-sm font-medium text-gray-800 shadow-md w-28 text-center">
              FAQs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
