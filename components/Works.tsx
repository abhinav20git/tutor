import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Crown } from "lucide-react"

export default function Works() {
  const steps = [
    {
      number: "01",
      title: "Fill in a brief",
      description: "Tell us what you need help with, describe your project requirements, and set the deadline.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      number: "02",
      title: "Choose an expert",
      description:
        "Receive offers from those who can help with assignments, compare their ratings, and pick the best one for your task.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      number: "03",
      title: "Get It Done On Time",
      description:
        "Chat with the expert directly, discuss your project in detail, and get professional academic assistance by the deadline.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-10">
          <Crown className="text-purple-500 w-8 h-8 mr-2" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="bg-white rounded-xl shadow-md overflow-hidden relative">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500">Step</span>
                    <span className="text-3xl font-bold text-gray-900">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold ml-4">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white">Get Started</Button>
              </div>

              <div className="mt-6 p-4">
                <div className="relative h-48 w-full">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={`Step ${step.number}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="w-8 h-0.5 bg-purple-500 absolute top-1/2 left-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
