import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">FraudGuard AI</h3>
            <p className="text-sm text-gray-600">Secure your transactions with AI-powered fraud detection.</p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <Link href="/dashboard" className="text-gray-600 hover:text-blue-600">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="text-gray-600 hover:text-blue-600">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="/alerts" className="text-gray-600 hover:text-blue-600">
                  Alerts
                </Link>
              </li>
              <li>
                <Link href="/learner-corner" className="text-gray-600 hover:text-blue-600">
                  Learner Corner
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Legal</h4>
            <ul className="text-sm">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-600 hover:text-blue-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-md font-semibold mb-2">Contact Us</h4>
            <p className="text-sm text-gray-600">support@fraudguardai.com</p>
            <p className="text-sm text-gray-600">+1 (800) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">© 2023 FraudGuard AI. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer

