import { DollarSign, Clock, BanknoteIcon } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      icon: <DollarSign className="w-12 h-12 text-purple-700" />,
      title: "Money-Back Guarantee",
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-700" />,
      title: "Support 24/7",
    },
    {
      icon: <BanknoteIcon className="w-12 h-12 text-purple-700" />,
      title: "No Hidden Charges",
    },
  ]

  return (
    <section className=" px-4 bg-gray-50 ">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`flex flex-col items-center justify-center py-8 ${
                  index < benefits.length - 1 ? "md:border-r md:border-gray-200" : ""
                }`}
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-purple-800">{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

