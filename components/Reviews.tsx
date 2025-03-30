"use client"

import { useState } from "react"
import { Star, Crown } from "lucide-react"
import Image from "next/image"

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const platforms = [
    { name: "ExpertBuddy", rating: "5.0", logo: "/placeholder.svg?height=40&width=40", color: "purple" },
    { name: "Trustpilot", rating: "4.7", logo: "/placeholder.svg?height=40&width=40", color: "green" },
    { name: "Sitejabber", rating: "4.0", logo: "/placeholder.svg?height=40&width=40", color: "orange" },
    { name: "Reviews.io", rating: "5.0", logo: "/placeholder.svg?height=40&width=40", color: "black" },
    { name: "Review Centre", rating: "5.0", logo: "/placeholder.svg?height=40&width=40", color: "blue" },
  ]

  const reviews = [
    {
      name: "John B.",
      rating: 5.0,
      text: "Lorem ipsum dolor sit amet consectetur. Proin ipsum aliquam neque lobortis. Arcu libero elementum diam eu mollis adipiscing eget. Est a odio viverra bibendum nibh etiasdm. Consequat...",
      platform: "ExpertBuddy",
    },
    {
      name: "John B.",
      rating: 5.0,
      text: "Lorem ipsum dolor sit amet consectetur. Proin ipsum aliquam neque lobortis. Arcu libero elementum diam eu mollis adipiscing eget. Est a odio viverra bibendum nibh etiasdm. Consequat...",
      platform: "Reviews.io",
    },
    {
      name: "John B.",
      rating: 5.0,
      text: "Lorem ipsum dolor sit amet consectetur. Proin ipsum aliquam neque lobortis. Arcu libero elementum diam eu mollis adipiscing eget. Est a odio viverra bibendum nibh etiasdm. Consequat...",
      platform: "Sitejabber",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-10">
          <Crown className="text-purple-500 w-8 h-8 mr-2" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Reviews from XpertBuddy Community</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {platforms.map((platform) => (
            <div key={platform.name} className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <div className="relative w-8 h-8">
                  <Image
                    src="/image8.png"
                    alt={platform.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-semibold">{platform.name}</span>
              </div>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      platform.color === "purple"
                        ? "fill-purple-500 text-purple-500"
                        : platform.color === "green"
                          ? "fill-green-500 text-green-500"
                          : platform.color === "orange"
                            ? "fill-orange-500 text-orange-500"
                            : platform.color === "black"
                              ? "fill-gray-800 text-gray-800"
                              : "fill-blue-500 text-blue-500"
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold">{platform.rating}</span>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold">{review.name}</h3>
                          <div className="relative w-8 h-8">
                            <Image
                              src={platforms.find((p) => p.name === review.platform)?.logo || ""}
                              alt={review.platform}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <div className="flex mb-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="ml-2 font-bold">{review.rating}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{review.text}</p>
                        <button className="text-purple-600 font-medium mt-4 text-sm">Show more</button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center mr-4 hover:bg-gray-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-left"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

