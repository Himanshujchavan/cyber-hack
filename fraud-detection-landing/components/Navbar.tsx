"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import type React from "react"

const Navbar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const userId = localStorage.getItem("userId")
    setIsSignedIn(!!userId)
  }, [])

  const handleSignOut = () => {
    localStorage.removeItem("userId")
    setIsSignedIn(false)
    router.push("/signin")
  }

  return (
    <nav className="bg-white shadow-md border-b-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">FraudGuard AI</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/analytics">Analytics</NavLink>
            <NavLink href="/alerts">Alerts</NavLink>
            <NavLink href="/learner-corner">Learner Corner</NavLink>
          </div>
          <div className="flex space-x-2">
            {isSignedIn ? (
              <Button variant="outline" onClick={handleSignOut}>
                Sign Out
              </Button>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link href="/signin">Sign In</Link>
                </Button>
                <Button variant="default" asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium">
    {children}
  </Link>
)

export default Navbar

