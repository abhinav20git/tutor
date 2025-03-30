import { Crown } from "lucide-react"
import Image from "next/image"

export default function StudyBay() {
  const features = [
    {
      icon: "/placeholder.svg?height=60&width=60",
      title: "Huge Community of Experts",
      description:
        "We bring together verified college professors, practicing scientists, independent researchers, freelance journalists, essay writers, and thousands of other experts in different fields of study, not only from the USA, but from all over the world. They are ready to share their knowledge and provide you with professional assignment help.",
    },
    {
      icon: "/placeholder.svg?height=60&width=60",
      title: "Affordable Prices",
      description:
        "As a strong team of developers, we use high-tech solutions such as AI-based tools to cover various parts of the process of each project. For example, we automate and optimize plagiarism checking and grammar checking, which lets us offer students assistance of exceptional quality rather than just cheap homework assignment help.",
    },
  ]

  return (
    <section id="featured" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-10">
          <Crown className="text-purple-500 w-8 h-8 mr-2" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Studybay anywhere with <br />
            <span className="text-gray-900">ExpertBuddy</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image src={feature.icon || "/placeholder.svg"} alt={feature.title} fill className="object-contain" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center mr-4 hover:bg-gray-100 transition-colors">
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
          <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
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
    </section>
  )
}

