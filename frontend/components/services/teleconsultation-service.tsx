import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Video, MessageSquare, FileText, Clock } from "lucide-react"

export default function TeleconsultationService() {
  const features = [
    "Consultations with specialists from multiple hospitals",
    "High-quality video and audio calls",
    "Secure messaging with healthcare providers",
    "Digital prescription services",
    "Medical record access and sharing",
    "Follow-up appointment scheduling",
  ]

  const specialties = [
    { name: "General Medicine", availability: "24/7" },
    { name: "Pediatrics", availability: "8AM - 8PM" },
    { name: "Cardiology", availability: "By appointment" },
    { name: "Dermatology", availability: "By appointment" },
    { name: "Psychiatry", availability: "9AM - 5PM" },
    { name: "Nutrition", availability: "9AM - 6PM" },
  ]

  return (
    <section id="teleconsultation" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-6">
              <Video className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Teleconsultation</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Connect with Healthcare Professionals from the Comfort of Your Home
            </h2>
            <p className="text-gray-600 mb-8">
              Our teleconsultation service connects you with qualified healthcare professionals from various hospitals
              across Rwanda. Whether you need a quick consultation for a minor issue or specialist advice for a chronic
              condition, our platform makes it easy to get the care you need without the travel.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Available Specialties</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specialties.map((specialty, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{specialty.name}</span>
                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {specialty.availability}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/teleconsultation/book">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Book a Consultation <Video className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/medical-records">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Medical Records
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-full z-0"></div>

            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Teleconsultation"
                    alt="Teleconsultation Service"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Secure Chat</h4>
                    <p className="text-gray-500 text-xs">Message your doctor</p>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Digital Prescriptions</h4>
                    <p className="text-gray-500 text-xs">Sent directly to pharmacy</p>
                  </div>
                </div>

                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Quick Access</h4>
                    <p className="text-gray-500 text-xs">Average wait: 15 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
