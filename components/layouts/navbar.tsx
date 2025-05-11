import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Globe } from "lucide-react"

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-9 h-8">
              <div className="absolute inset-0 bg-green-600 rounded-tl-xl rounded-br-xl"></div>
              <div className="absolute inset-1 bg-blue-600 rounded-tr-xl rounded-bl-xl"></div>
              <div className="absolute inset-2 bg-white flex items-center justify-center">
                <span className="text-green-600 font-bold text-[0.7rem]">HR</span>
              </div>
            </div>
            <span className="font-bold text-xl text-gray-900">
              HEALTHLINE <span className="text-green-600">RWANDA</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 hover:text-green-600 font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-900 hover:text-green-600 font-medium">
              Services
            </Link>
            <Link href="/departments" className="text-gray-900 hover:text-green-600 font-medium">
              Departments
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-green-600 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-green-600 font-medium">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:flex items-center border-gray-200">
              <Globe className="mr-2 h-4 w-4 text-blue-600" />
              EN | KIN
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 hidden md:flex">Sign In</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
