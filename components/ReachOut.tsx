import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CalendarIcon, Crown } from "lucide-react"
import Image from "next/image"

export default function ReachOut() {
  return (
    <section className="py-16 px-4 bg-pink-500">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-4">
              <Crown className="text-white w-8 h-8 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Reach Out to the Expert Now</h2>
            </div>

            <p className="text-white mb-8">
              Chat with the expert directly, discuss your project in detail, and get professional academic assistance by
              the deadline.
            </p>

            <div className="space-y-4 mb-8">
              <Input placeholder="Personal Self-Care Plan" className="bg-white border-0 h-12 text-gray-900" />

              <div className="relative">
                <Input placeholder="Choose Deadline" className="bg-white border-0 h-12 text-gray-900 pl-4 pr-10" />
                <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              </div>
            </div>

            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg">
              Find an Expert
            </Button>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 md:h-60">
                <Image
                  src="/placeholder.svg?height=240&width=180"
                  alt="Expert 1"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="relative h-40 md:h-60 mt-10">
                <Image
                  src="/placeholder.svg?height=240&width=180"
                  alt="Expert 2"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="relative h-40 md:h-60 col-span-2 mx-auto w-3/4">
                <Image
                  src="/placeholder.svg?height=240&width=320"
                  alt="Expert 3"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

