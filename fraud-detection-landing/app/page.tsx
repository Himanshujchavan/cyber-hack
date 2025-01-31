import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, AlertTriangle, Lock, Bell, Users, CreditCard } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-16 py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Secure Your Bank Transactions with AI-Powered Fraud Detection
            </h1>
            <p className="text-xl text-gray-600">
              Protect your money from cybercriminals with advanced AI monitoring, real-time alerts, and smart fraud
              prevention.
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/learner-corner">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full filter blur-3xl"></div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="AI-powered security analyzing transactions"
              width={600}
              height={400}
              className="relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Fraud Prevention System?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "AI-Powered Fraud Detection",
                description: "Detects suspicious transactions in real-time.",
              },
              {
                icon: AlertTriangle,
                title: "Behavior-Based Security",
                description: "Identifies unusual login & transaction patterns.",
              },
              {
                icon: Lock,
                title: "Multi-Factor Authentication (MFA)",
                description: "Adds extra security for risky transactions.",
              },
              {
                icon: Bell,
                title: "Real-Time Alerts",
                description: "Notifies users instantly about suspicious activities.",
              },
              {
                icon: Users,
                title: "Money Mule & Rented Account Detection",
                description: "Prevents illegal account rentals.",
              },
              {
                icon: CreditCard,
                title: "Secure Transactions",
                description: "Blocks fraudulent transactions before they occur.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Thousands of Customers & Banks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md relative">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-primary text-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-600 mb-4 italic">
              "FraudGuard AI has significantly reduced our fraud risks. Their system is intuitive and effective."
            </p>
            <p className="font-semibold">- John Doe, Bank of Security</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md relative">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-primary text-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-600 mb-4 italic">
              "Thanks to FraudGuard AI, we've seen a 90% reduction in fraudulent activities. Highly recommended!"
            </p>
            <p className="font-semibold">- Jane Smith, TrustBank</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Our Achievements</h3>
          <div className="flex justify-center space-x-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-3xl font-bold text-primary">10,000+</p>
              <p className="text-gray-600">Suspicious transactions blocked</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-3xl font-bold text-primary">90%</p>
              <p className="text-gray-600">Reduction in financial fraud risks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Secure Your Transactions Today!</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers and protect your financial assets.</p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-primary hover:text-white border-white transition-colors duration-300"
              asChild
            >
              <Link href="/learner-corner">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

