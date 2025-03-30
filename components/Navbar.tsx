import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageSquare, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white w-full">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 gap-5 w-full">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-10 ml-14">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="ml-2 text-2xl font-bold text-purple-600">
              BUDDY
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-8 ml-auto mr-10">
          <nav className="hidden md:flex items-center space-x-8 ">
            <Link
              href="/find-tutor"
              className="text-base font-medium text-gray-900 hover:text-purple-600"
            >
              Find Tutor
            </Link>
            <Link
              href="/homework"
              className="text-[#640D51] font-medium  hover:text-purple-600"
            >
              Homework
            </Link>
          </nav>
          <div className="flex items-center rounded-md border border-orange-300 bg-orange-50 px-3 py-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5C7.5 5 5.5 7 5.5 9.5C5.5 12 7.5 14 10 14C12.5 14 14.5 12 14.5 9.5C14.5 7 12.5 5 10 5Z"
                fill="#F97316"
              />
              <path
                d="M10 3V5M10 14V16M4.5 9.5H2.5M17.5 9.5H15.5M5.5 5L7 6.5M14.5 5L13 6.5M5.5 14L7 12.5M14.5 14L13 12.5"
                stroke="#F97316"
                strokeWidth="1.5"
              />
            </svg>
            <span className="ml-1 text-sm font-medium text-orange-500">
              0 USD
            </span>
          </div>
          <Button
            variant="outline"
            className="hidden md:flex items-center rounded-full border-purple-600 text-purple-600 hover:bg-purple-50"
          >
            Refer a Friend
          </Button>

          <div className="flex items-center gap-1 text-gray-600">
            <span className="hidden md:inline">English, USD</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 17.4301H12L7.54999 20.39C6.88999 20.83 6 20.3601 6 19.5601V17.4301C3 17.4301 1 15.4301 1 12.4301V6.42999C1 3.42999 3 1.42999 6 1.42999H16C19 1.42999 21 3.42999 21 6.42999V12.4301C21 15.4301 19 17.4301 16 17.4301Z"
                  stroke="#16192C"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <div className="h-8 w-8 overflow-hidden rounded-full border border-gray-200">
              <Image
                src="/pro.png"
                alt="User profile"
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
