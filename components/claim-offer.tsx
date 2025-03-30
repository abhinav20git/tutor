import { Crown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ClaimOffer() {
  return (
    <section id="claim-offers" className="py-16 px-4 bg-pink-500">
      <div className="max-w-6xl mx-auto">
        <div className="bg-pink-500 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Crown className="text-white w-8 h-8 mr-2" />
                <h2 className="text-3xl font-bold text-white">Claim Your Offer</h2>
              </div>

              <p className="text-white mb-6">
                Hello, we have a special ongoing offer for our new customers to avail 30% OFF & 150% Cashback on your
                first order! Enter your details below to receive the coupon code. (We do not spam!)
              </p>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">Susan White</h3>
                <p className="text-white opacity-80">Head Of sales Departments</p>
              </div>
            </div>

            <div>
              <div className="bg-white p-6 rounded-xl">
                <div className="relative mb-4">
                  <Input placeholder="Enter your WhatsApp number" className="bg-white border-0 h-12 text-gray-900" />
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg">
                  Get Offer on WhatsApp
                </Button>
              </div>

              <div className="mt-6 text-center">
                <h2 className="text-3xl font-bold text-white">30% OFF & 150% Cashback</h2>
                <p className="text-white text-xl font-semibold">On Your First Order!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

