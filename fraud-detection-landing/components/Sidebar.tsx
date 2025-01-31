import Link from "next/link"
import { Home, UserCircle, Network, Bell, Settings } from "lucide-react"

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-blue-600">FraudGuard AI</h1>
      </div>
      <nav className="mt-8">
        <Link href="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <Home className="mr-4" />
          Dashboard
        </Link>
        <Link href="/account-details" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <UserCircle className="mr-4" />
          Account Details
        </Link>
        <Link href="/network-analysis" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <Network className="mr-4" />
          Network Analysis
        </Link>
        <Link href="/alerts" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <Bell className="mr-4" />
          Alerts
        </Link>
        <Link href="/admin" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <Settings className="mr-4" />
          Admin Panel
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar

